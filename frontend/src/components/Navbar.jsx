import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 2560); // Ubah ke 1024px (lg)
  const bookingRef = useRef(null);
  const timeoutRef = useRef(null);

  // Update isDesktop state when window is resized
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 2560); // Ubah ke 1024px (lg)
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (bookingRef.current && !bookingRef.current.contains(event.target)) {
        setIsBookingOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close booking dropdown when mobile menu is closed
  useEffect(() => {
    if (!isOpen) {
      setIsBookingOpen(false);
    }
  }, [isOpen]);

  // Handle hover for desktop
  const handleMouseEnter = () => {
    if (isDesktop) {
      clearTimeout(timeoutRef.current);
      setIsBookingOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (isDesktop) {
      timeoutRef.current = setTimeout(() => {
        setIsBookingOpen(false);
      }, 200);
    }
  };

  const toggleBookingDropdown = () => {
    setIsBookingOpen(!isBookingOpen); // Hapus pengecekan isDesktop
  };

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    {
      label: "Booking",
      hasDropdown: true,
      dropdownItems: [
        {
          to: "/booking",
          label: "Resort",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          ),
          description: "Lihat kamar dan fasilitas resort kami",
        },
        {
          to: "/wedding",
          label: "Wedding",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          ),
          description: "Layanan pernikahan eksklusif bernuansa budaya",
        },
      ],
    },
    { to: "/facility", label: "Facility" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <section id="navbar-section" className="sticky top-0 z-50">
      <nav className="border-gray-200 bg-white relative shadow-md">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/images/logo-sribudaya-full.png" className="h-8 sm:h-10" alt="Sribudaya Logo" />
          </NavLink>

          {/* Mobile toggle button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-600 rounded-lg md:hidden hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            aria-controls="navbar-menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>

          {/* Menu */}
          <div
            id="navbar-menu"
            className={`md:block md:w-auto ${isOpen ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"} overflow-hidden transition-all duration-500 ease-in-out
              w-full md:max-h-none md:opacity-100 md:translate-y-0
              absolute top-[90%] left-0 right-0 md:static`}
          >
            <ul className="flex flex-col font-medium mt-2 md:mt-0 rounded-lg bg-[#2f2f2f] md:space-x-4 lg:space-x-8 rtl:space-x-reverse md:flex-row md:border-0 md:bg-transparent shadow-lg md:shadow-none">
              {navItems.map((item) => (
                <li key={item.label} className="relative group" ref={item.hasDropdown ? bookingRef : null}>
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={toggleBookingDropdown}
                        onMouseEnter={handleMouseEnter}
                        className="flex items-center justify-between w-full py-2 px-3 text-[#e9e4dc] rounded-sm hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-amber-700 md:p-0 md:w-auto"
                      >
                        {item.label}
                        <svg className={`w-2.5 h-2.5 ms-2.5 transition-transform duration-200 ${isBookingOpen ? "rotate-180" : ""}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg>
                      </button>

                      {/* Dropdown menu - Desktop version with hover */}
                      <div
                        className={`hidden 4k:block lg:absolute lg:top-full lg:left-0 lg:mt-1 lg:w-64 lg:bg-white lg:text-gray-700 lg:rounded-lg lg:shadow-lg lg:z-10 ${isDesktop && isBookingOpen ? "block" : ""}`}
                        onMouseEnter={() => isDesktop && clearTimeout(timeoutRef.current)}
                        onMouseLeave={isDesktop ? handleMouseLeave : undefined}
                      >
                        <ul className="py-2 text-sm">
                          {item.dropdownItems.map((dropdownItem) => (
                            <li key={dropdownItem.to}>
                              <NavLink
                                to={dropdownItem.to}
                                className={({ isActive }) => `block px-4 py-3 hover:bg-amber-50 hover:text-amber-700 transition-colors duration-200 ${isActive ? "text-amber-600 font-semibold bg-amber-50" : ""}`}
                                onClick={() => {
                                  setIsBookingOpen(false);
                                  setIsOpen(false);
                                }}
                              >
                                <div className="flex items-center">
                                  {dropdownItem.icon}
                                  <div>
                                    <div className="font-medium">{dropdownItem.label}</div>
                                    <div className="text-xs text-gray-500 mt-1">{dropdownItem.description}</div>
                                  </div>
                                </div>
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Dropdown menu - Mobile & Medium version with toggle */}
                      <div className={`${isBookingOpen ? "block" : "hidden"} 4k:hidden bg-white text-gray-700 w-full rounded-lg mt-1 z-10`}>
                        <ul className="py-2 text-sm">
                          {item.dropdownItems.map((dropdownItem) => (
                            <li key={dropdownItem.to}>
                              <NavLink
                                to={dropdownItem.to}
                                className={({ isActive }) => `block px-4 py-3 hover:bg-amber-50 hover:text-amber-700 transition-colors duration-200 ${isActive ? "text-amber-600 font-semibold bg-amber-50" : ""}`}
                                onClick={() => {
                                  setIsBookingOpen(false);
                                  setIsOpen(false);
                                }}
                              >
                                <div className="flex items-center">
                                  {dropdownItem.icon}
                                  <div>
                                    <div className="font-medium">{dropdownItem.label}</div>
                                    <div className="text-xs text-gray-500 mt-1">{dropdownItem.description}</div>
                                  </div>
                                </div>
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <NavLink
                      to={item.to}
                      end
                      className={({ isActive }) =>
                        `
                          block py-2 px-3 rounded-sm transition-colors duration-300
                          ${
                            isActive
                              ? "text-[#D97706] font-semibold md:border-b-2 md:border-[#D97706]"
                              : "text-[#e9e4dc] hover:text-white hover:bg-gray-700 md:text-black md:hover:text-amber-700 md:hover:border-b-2 md:hover:border-amber-700"
                          }
                          md:p-0 md:hover:bg-transparent
                        `
                      }
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;