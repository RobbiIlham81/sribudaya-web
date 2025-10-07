import React, { useState } from "react";
import { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../swiper-styles.css";

// import fancybox dependencies
import useFancybox from "../fancybox";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";

// font awesome icon import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import PackageCard from "./PackageCard";
// import { Link } from "react-router-dom";
import LazyDiv from "./misc/LazyDiv";

library.add(fas, far, fab);

const Booking = () => {
  const [fancyboxRefRoom1] = useFancybox({
    // Your custom options
    groupAll: false,
  });

  const [fancyboxRefRoom2] = useFancybox({
    groupAll: false,
  });

  const [fancyboxRefRoom3] = useFancybox({
    groupAll: false,
  });

  // useEffect for wedding package gallery
  useEffect(() => {
    // Bind Fancybox to all elements with data-fancybox attribute
    Fancybox.bind("[data-fancybox]", {
      Thumbs: { autoStart: true },
      Navigation: false,
      arrows: false,
      Toolbar: {
        display: [{ id: "counter", position: "center" }, "zoom", "slideshow", "fullscreen", "download", "thumbs", "close"],
      },
    });

    return () => {
      Fancybox.destroy();
    };
  }, []);

  // useState to handle accordion opening and closing
  const [openIndex, setOpenIndex] = useState(null);

  // for smooth scrolling specific page
  useEffect(() => {
    document.documentElement.classList.add("smooth-scroll"); // add to <html>

    return () => {
      document.documentElement.classList.remove("smooth-scroll"); // clean up
    };
  }, []);

  return (
    <section id="booking" className="m-0 p-0  w-full smooth-scroll">
      {/* Slide section */}
      <div className="w-full ">
        <div className="wrapper">
          <div className="hero-slides h-[80vh] relative">
            <Swiper
              // pagination={{
              //   dynamicBullets: false,
              // }}
              autoplay={{
                delay: 5000,
              }}
              speed={2500}
              loop="true"
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img className="" src="/images/booking/family-deluxe01_compressed.jpg" alt="family-deluxe01_compressed.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="" src="/images/booking/family-studio01_compressed.jpg" alt="family-studio01_compressed.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="" src="/images/booking/family-suite01_compressed.jpg" alt="family-suite01_compressed.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="" src="/images/booking/resort-room-front_compressed.jpg" alt="resort-room-front_compressed.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="" src="/images/booking/family-suite02_compressed.jpg" alt="family-suite02_compressed.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="" src="/images/booking/family-studio02_compressed.jpg" alt="family-studio02_compressed.jpg" />
              </SwiperSlide>
            </Swiper>
            <div className="absolute inset-0 z-10 bg-black bg-opacity-30"></div>
            {/* Description for Hero section */}
            <div className="booking-hero-desc absolute z-30 inset-0  flex justify-center items-center text-white flex-col animate-fade-up">
              <div className="header text-center w-[85%]">
                <h1 className="title drop-shadow-lg">Liburan nyaman bersama keluarga di Sribudaya Resort</h1>
              </div>
              <div className="subheader text-center px-2 md:px-4 md:w-3/4">
                <h2 className="title-desc">Nikmati resort indah dengan suasana tenang, dan momen kebersamaan yang penuh kehangatan. Booking sekarang dan nikmati liburan tak terlupakan untuk keluarga Anda</h2>
                <div className=" mt-12">
                  <a href="#order-section" className="terracotaa-btn">
                    Book Now!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper px-5 md:px-12 lg:px-24">
        {/* Booking room section */}
        <div id="order-section" className="my-container w-full">
          <div className="wrapper my-10">
            <div className="family-suite flex flex-col gap-5 justify-center">
              {/* title for booking section */}
              <LazyDiv>
                <div className="booking-title relative mt-8 w-fit animate-fade-up">
                  <h2 className="subtitle text-left">ROOM LIST</h2>
                  <h1 className="page-title">Pilihan Tipe Kamar</h1>
                  <span className="absolute left-0 w-1/2  -bottom-4 h-[2px] bg-amber-600"></span>
                </div>

                {/* booking section description */}
                <div className="mb-8 w-fit animate-fade-right">
                  <p className="page-title-desc">Nikmati pilihan kamar dengan suasana tenang dan fasilitas lengkap, dirancang untuk memberikan kenyamanan terbaik bagi Anda dan keluarga</p>
                </div>
              </LazyDiv>

              {/* Booking room 1 */}
              <LazyDiv>
  {/* Booking room 1 - Family Suite */}
  <div id="booking-room1" className="bg-white w-full rounded-xl shadow-lg overflow-hidden mb-12 transition-all duration-300 hover:shadow-xl border border-stone-100">
    <div className="flex flex-col lg:flex-row">
      {/* Image Gallery */}
      <div ref={fancyboxRefRoom1} className="grid grid-cols-2 gap-3 p-5 lg:w-2/5 bg-stone-50">
        <img data-fancybox="gallery" src="/images/booking/family-suite01_compressed.jpg" alt="Family Suite" className="w-full h-48 object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer shadow-sm" />
        <img data-fancybox="gallery" src="/images/booking/family-suite02_compressed.jpg" alt="Family Suite" className="w-full h-48 object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer shadow-sm" />
        <img data-fancybox="gallery" src="/images/booking/family-suite03_compressed.jpg" alt="Family Suite" className="w-full h-48 object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer shadow-sm" />
        <img data-fancybox="gallery" src="/images/booking/family-suite04_compressed.jpg" alt="Family Suite" className="w-full h-48 object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer shadow-sm" />
      </div>
      
      {/* Room Description */}
      <div className="p-7 lg:w-2/5">
        <div className="mb-5">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-amber-600 bg-amber-100 rounded-full">Premium</span>
          <h1 className="text-2xl font-bold  mt-3">Family Suite</h1>
          <div className="w-16 h-1 bg-amber-500 mt-2 rounded-full"></div>
        </div>
        
        <div className="space-y-4 mt-6">
          <div className="flex items-start gap-3">
            <div className="mt-1 text-amber-600">
              <FontAwesomeIcon className="text-xl" icon="fa-solid fa-bed" />
            </div>
            <div>
              <p className="">Kapasitas 4 dewasa + 2 anak. 1 king bed dan 1 single large</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="mt-1 text-amber-600">
              <FontAwesomeIcon className="text-xl" icon="fa-solid fa-utensils" />
            </div>
            <div>
              <p className="">Free sarapan pagi untuk 4 orang</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="mt-1 text-amber-600">
              <FontAwesomeIcon className="text-xl" icon="fa-solid fa-water-ladder" />
            </div>
            <div>
              <p className="">Free berenang untuk 4 dewasa & 2 anak</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="mt-1 text-amber-600">
              <FontAwesomeIcon className="text-xl" icon="fa-solid fa-couch" />
            </div>
            <div>
              <p className="">Bathtub, living room, 2 bathroom, dan amenities</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="mt-1 text-amber-600">
              <FontAwesomeIcon className="text-xl" icon="fa-solid fa-wifi" />
            </div>
            <div>
              <p className="">Netflix dan WIFI cepat</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Pricing */}
      <div className="bg-stone-50 p-7 lg:w-1/5 flex flex-col justify-between border-l border-stone-100">
        <div>
          <h3 className="text-sm font-medium text-stone-600 uppercase tracking-wider">Harga</h3>
          <h2 className="text-3xl font-bold text-amber-700 mt-2">Rp. 1.500.000<span className="text-sm font-normal text-stone-600">/malam</span></h2>
          <div className="mt-6">
            <div className="flex items-center text-sm text-stone-600 mb-2">
              <FontAwesomeIcon icon="fa-solid fa-users" className="mr-2 text-amber-500" />
              <span>4 Dewasa, 2 Anak</span>
            </div>
          </div>
        </div>
        
        <a href="https://api.whatsapp.com/send?phone=6282267878880&text=Halo%2C%20Saya%20mau%20booking%20kamar%20dengan%20tipe%20family%20suite" target="_blank" rel="noopener noreferrer" className="terracotaa-btn  text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center mt-6 shadow-sm">
          <FontAwesomeIcon icon="fa-brands fa-whatsapp" className="text-xl mr-2" />
          Booking Sekarang
        </a>
      </div>
    </div>
  </div>

  {/* Booking room 2 - Family Studio */}
  <div id="booking-room2" className="bg-white w-full rounded-xl shadow-lg overflow-hidden mb-12 transition-all duration-300 hover:shadow-xl border border-stone-100">
    <div className="flex flex-col lg:flex-row">
      {/* Image Gallery */}
      <div ref={fancyboxRefRoom2} className="grid grid-cols-2 gap-3 p-5 lg:w-2/5 bg-stone-50">
        <img data-fancybox="gallery" src="/images/booking/family-studio01_compressed.jpg" alt="Family Studio" className="w-full h-48 object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer shadow-sm" />
        <img data-fancybox="gallery" src="/images/booking/family-studio02_compressed.jpg" alt="Family Studio" className="w-full h-48 object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer shadow-sm" />
        <img data-fancybox="gallery" src="/images/booking/family-studio03_compressed.jpg" alt="Family Studio" className="w-full h-48 object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer shadow-sm" />
        <img data-fancybox="gallery" src="/images/booking/family-studio04_compressed.jpg" alt="Family Studio" className="w-full h-48 object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer shadow-sm" />
      </div>
      
      {/* Room Description */}
      <div className="p-7 lg:w-2/5">
        <div className="mb-5">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-amber-600 bg-amber-100 rounded-full">Popular</span>
          <h1 className="text-2xl font-bold  mt-3">Family Studio</h1>
          <div className="w-16 h-1 bg-amber-600 mt-2 rounded-full"></div>
        </div>
        
        <div className="space-y-4 mt-6">
          <div className="flex items-start gap-3">
            <div className="mt-1 text-amber-600">
              <FontAwesomeIcon className="text-xl" icon="fa-solid fa-bed" />
            </div>
            <div>
              <p className="">Kapasitas 4 dewasa + 2 anak. 1 king bed dan 1 single large</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="mt-1 text-amber-600">
              <FontAwesomeIcon className="text-xl" icon="fa-solid fa-utensils" />
            </div>
            <div>
              <p className="">Free sarapan pagi untuk 4 orang</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="mt-1 text-amber-600">
              <FontAwesomeIcon className="text-xl" icon="fa-solid fa-water-ladder" />
            </div>
            <div>
              <p className="">Free berenang untuk 4 dewasa & 2 anak</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="mt-1 text-amber-600">
              <FontAwesomeIcon className="text-xl" icon="fa-solid fa-couch" />
            </div>
            <div>
              <p className="">Dapur, Living Room, 1 Bathroom, dan Amenities</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="mt-1 text-amber-600">
              <FontAwesomeIcon className="text-xl" icon="fa-solid fa-wifi" />
            </div>
            <div>
              <p className="">Netflix dan WIFI cepat</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Pricing */}
      <div className="bg-stone-50 p-7 lg:w-1/5 flex flex-col justify-between border-l border-stone-100">
        <div>
          <h3 className="text-sm font-medium text-stone-600 uppercase tracking-wider">Harga</h3>
          <h2 className="text-3xl font-bold text-amber-700 mt-2">Rp. 1.300.000<span className="text-sm font-normal text-stone-600">/malam</span></h2>
          <div className="mt-6">
            <div className="flex items-center text-sm text-stone-600 mb-2">
              <FontAwesomeIcon icon="fa-solid fa-users" className="mr-2 text-amber-500" />
              <span>4 Dewasa, 2 Anak</span>
            </div>
          </div>
        </div>
        
        <a href="https://api.whatsapp.com/send?phone=6282267878880&text=Halo%2C%20Saya%20mau%20booking%20kamar%20dengan%20tipe%20family%20Studio" target="_blank" rel="noopener noreferrer" className="terracotaa-btn  text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center mt-6 shadow-sm">
          <FontAwesomeIcon icon="fa-brands fa-whatsapp" className="text-xl mr-2" />
          Booking Sekarang
        </a>
      </div>
    </div>
  </div>

  {/* Booking room 3 - Family Deluxe */}
  <div id="booking-room3" className="bg-white w-full rounded-xl shadow-lg overflow-hidden mb-12 transition-all duration-300 hover:shadow-xl border border-stone-100">
    <div className="flex flex-col lg:flex-row">
      {/* Image Gallery */}
      <div ref={fancyboxRefRoom3} className="grid grid-cols-2 gap-3 p-5 lg:w-2/5 bg-stone-50">
        <img data-fancybox="gallery" src="/images/booking/family-deluxe01_compressed.jpg" alt="Family Deluxe" className="w-full h-48 object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer shadow-sm" />
        <img data-fancybox="gallery" src="/images/booking/family-deluxe02_compressed.jpg" alt="Family Deluxe" className="w-full h-48 object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer shadow-sm" />
        <img data-fancybox="gallery" src="/images/booking/family-deluxe03_compressed.jpg" alt="Family Deluxe" className="w-full h-48 object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer shadow-sm" />
        <img data-fancybox="gallery" src="/images/booking/family-deluxe04_compressed.jpg" alt="Family Deluxe" className="w-full h-48 object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer shadow-sm" />
      </div>
      
      {/* Room Description */}
      <div className="p-7 lg:w-2/5">
        <div className="mb-5">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-amber-600 bg-rose-100 rounded-full">Spacious</span>
          <h1 className="text-2xl font-bold  mt-3">Family Deluxe</h1>
          <div className="w-16 h-1 bg-amber-600 mt-2 rounded-full"></div>
        </div>
        
        <div className="space-y-4 mt-6">
          <div className="flex items-start gap-3">
            <div className="mt-1 text-amber-600">
              <FontAwesomeIcon className="text-xl" icon="fa-solid fa-bed" />
            </div>
            <div>
              <p className="">Kapasitas 5 dewasa + 2 anak. 1 king bed dan 1 single large</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="mt-1 text-amber-600">
              <FontAwesomeIcon className="text-xl" icon="fa-solid fa-utensils" />
            </div>
            <div>
              <p className="">Free sarapan pagi untuk 4 orang</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="mt-1 text-amber-600">
              <FontAwesomeIcon className="text-xl" icon="fa-solid fa-water-ladder" />
            </div>
            <div>
              <p className="">Free berenang untuk 5 dewasa & 2 anak</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="mt-1 text-amber-600">
              <FontAwesomeIcon className="text-xl" icon="fa-solid fa-couch" />
            </div>
            <div>
              <p className="">Wide Room, 1 Bathroom, dan Amenities</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="mt-1 text-amber-600">
              <FontAwesomeIcon className="text-xl" icon="fa-solid fa-wifi" />
            </div>
            <div>
              <p className="">Netflix dan WIFI cepat</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Pricing */}
      <div className="bg-stone-50 p-7 lg:w-1/5 flex flex-col justify-between border-l border-stone-100">
        <div>
          <h3 className="text-sm font-medium text-stone-600 uppercase tracking-wider">Harga</h3>
          <h2 className="text-3xl font-bold text-amber-700 mt-2">Rp. 1.300.000<span className="text-sm font-normal text-stone-600">/malam</span></h2>
          <div className="mt-6">
            <div className="flex items-center text-sm text-stone-600 mb-2">
              <FontAwesomeIcon icon="fa-solid fa-users" className="mr-2 text-amber-500" />
              <span>5 Dewasa, 2 Anak</span>
            </div>
          </div>
        </div>
        
        <a href="https://api.whatsapp.com/send?phone=6282267878880&text=Halo%2C%20Saya%20mau%20booking%20kamar%20dengan%20tipe%20family%20deluxe" target="_blank" rel="noopener noreferrer" className="terracotaa-btn  text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center mt-6 shadow-sm">
          <FontAwesomeIcon icon="fa-brands fa-whatsapp" className="text-xl mr-2" />
          Booking Sekarang
        </a>
      </div>
    </div>
  </div>
</LazyDiv>
            </div>
          </div>
        </div>

        {/* Wedding Section */}
        <div className="wedding-container my-8">
          {/* title for Wedding section */}
          <LazyDiv>
            <div className="booking-title relative my-8 w-fit animate-fade-up">
              <h2 className="subtitle text-left">WEDDING HALL</h2>
              <h1 className="page-title">
                Wedding Hall Modern <br /> Untuk Hari Special Anda
              </h1>
              <span className="absolute left-0 w-1/2 -bottom-4 h-[2px] bg-amber-600"></span>
            </div>
          </LazyDiv>

          {/* wedding section description */}
          <LazyDiv>
            <div className="mb-8 w-fit animate-fade-right">
              <p className="page-title-desc">
                Wedding hall kami dilengkapi dengan fasilitas modern dan tata ruang yang fleksibel, cocok untuk resepsi kecil hingga besar. Kami menyediakan ruang yang nyaman dan tertata untuk mendukung hari spesial Anda.
              </p>
            </div>
          </LazyDiv>

          <PackageCard />

          {/* Wedding package list section */}
          <div className="wedding-package py-10 mt-12">
            {/* Section Header */}
            <LazyDiv>
              <div className="text-center">
                <div className="inline-block">
                  <h2 className="subtitle animate-fade-left animate-delay-100">Wedding Package</h2>
                  <h1 className="page-title !mb-4 animate-fade-right animate-delay-200">Our Wedding Package</h1>
                </div>
                <p className="page-title-desc max-w-2xl mx-auto animate-fade-left animate-delay-300 !mb-12">Explore our wedding package created for you</p>
              </div>
            </LazyDiv>

            <div className="wrapper max-w-6xl mx-auto flex justify-center items-center gap-2">
              <Swiper
                pagination={{
                  dynamicBullets: true,
                }}
                spaceBetween={20}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  640: { slidesPerView: 2 },
                }}
                modules={[Pagination]}
                className="myWeddingPackageSwiper"
              >
                <SwiperSlide>
                  <div className="card bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
                    <a href="/images/booking/silver-package.png" data-fancybox="wedding-gallery" data-caption="Silver Package">
                      <img src="/images/booking/silver-package.png" alt="silver package" className="w-full h-48 object-cover" />
                    </a>
                    <div className="p-4 text-left bg-dark text-white flex flex-col flex-grow">
                      <h3 className="card-normal-title font-semibold mb-2 !text-white">Silver Wedding Package</h3>
                      {/* <p className="  ">
                        Perfect for intimate weddings with essential services
                        included.
                      </p> */}
                      <a href="https://api.whatsapp.com/send?phone=6282267878880&text=Halo%2C%20Saya%20mau%20booking%20paket%20wedding%20silver" target="_blank" rel="noopener noreferrer" className="terracotaa-btn mt-24 md:text-xl">
                        <span className="text-2xl pr-1">
                          <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
                        </span>
                        Booking
                      </a>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="card bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
                    <a href="/images/booking/platinum-package.png" data-fancybox="wedding-gallery" data-caption="Platinum Package">
                      <img src="/images/booking/platinum-package.png" alt="platinum package wedding" className="w-full h-48 object-cover" />
                    </a>
                    <div className="p-4 text-left bg-dark text-white flex flex-col flex-grow">
                      <h3 className="card-normal-title mb-2">Platinum Wedding Package</h3>
                      {/* <p className=" ">
                        A luxurious package for couples who want premium
                        arrangements.
                      </p> */}
                      <a href="https://api.whatsapp.com/send?phone=6282267878880&text=Halo%2C%20Saya%20mau%20booking%20paket%20wedding%20platinum" target="_blank" rel="noopener noreferrer" className="terracotaa-btn mt-24 md:text-xl">
                        <span className="text-2xl pr-1">
                          <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
                        </span>
                        Booking
                      </a>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="card bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
                    <a href="/images/booking/gold-package.png" data-fancybox="wedding-gallery" data-caption="Gold Package">
                      <img src="/images/booking/gold-package.png" alt="gold package wedding" className="w-full h-48 object-cover" />
                    </a>
                    <div className="p-4 text-left bg-dark text-white flex flex-col flex-grow">
                      <h3 className="card-normal-title mb-2">Gold Wedding Package</h3>
                      {/* <p className=" ">
                        Balanced elegance and value, designed for medium-size
                        weddings.
                      </p> */}
                      <a href="https://api.whatsapp.com/send?phone=6282267878880&text=Halo%2C%20Saya%20mau%20booking%20paket%20wedding%20gold" target="_blank" rel="noopener noreferrer" className="terracotaa-btn mt-24 md:text-xl">
                        <span className="text-2xl pr-1">
                          <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
                        </span>
                        Booking
                      </a>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="card bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
                    <a href="/images/booking/royal-package.png" data-fancybox="wedding-gallery" data-caption="Royal Package">
                      <img src="/images/booking/royal-package.png" alt="royal package wedding" className="w-full h-48 object-cover" />
                    </a>
                    <div className="p-4 text-left bg-dark text-white flex flex-col flex-grow">
                      <h3 className="card-normal-title mb-2">Royal Wedding Package</h3>
                      {/* <p className=" ">
                        The ultimate fairy-tale experience with every luxury
                        included.
                      </p> */}
                      <a href="https://api.whatsapp.com/send?phone=6282267878880&text=Halo%2C%20Saya%20mau%20booking%20paket%20wedding%20royal" target="_blank" rel="noopener noreferrer" className="terracotaa-btn mt-24 md:text-xl">
                        <span className="text-2xl pr-1">
                          <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
                        </span>
                        Booking
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            <LazyDiv>
              <div className="w-full flex justify-center items-center mt-12 animate-fade-up">
                <a target="_blank" rel="noreferrer" href="https://instagram.com/sribudaya_resortaceh" className="terracotaa-btn flex items-center">
                  <span>
                    <FontAwesomeIcon icon="fa-brands fa-instagram" className="text-3xl"></FontAwesomeIcon>
                  </span>
                  Lihat foto wedding lainnya di Instagram
                </a>
              </div>
            </LazyDiv>
          </div>
          {/* End of Wedding package list section */}
        </div>

        {/* title for Swimming pool section */}
        <LazyDiv>
          <div className="booking-title relative my-8 w-fit animate-fade-up">
            <h2 className="subtitle text-left">Meeting Room</h2>
            <h1 className="page-title">
              Fasilitas Ruang Meeting <br /> Nyaman dan Profesional
            </h1>
            <span className="absolute left-0 w-1/2 -bottom-4 h-[2px] bg-amber-600"></span>
          </div>
        </LazyDiv>
        {/* Swimming pool section description */}
        <LazyDiv>
          <div className="mb-8 w-fit animate-fade-right">
            <p className="page-title-desc">Ruang meeting yang dilengkapi dengan alat presentasi, tata ruang yang fleksibel, serta suasana kondusif untuk mendukung kelancaran rapat, seminar, atau acara perusahaan.</p>
          </div>
        </LazyDiv>

        {/* Meeting Room Section */}
        <div className="wrapper max-w-6xl mx-auto px-4 py-8">
          <Swiper
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            spaceBetween={30}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            modules={[Pagination]}
            className="myMeetingPackageSwiper"
          >
            <SwiperSlide className="!h-auto">
              <div className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                <div className="p-6 flex-grow flex flex-col">
                  <div className="mb-6">
                    <div className="w-12 h-1 bg-amber-600 mb-4"></div>
                    <h3 className="text-xl md:text-2xl font-bold text-black mb-2">HALF DAY MEETING A PACKAGE</h3>
                    <div className="text-amber-600 font-bold text-lg">IDR 150.000/PAX</div>
                  </div>

                  <ul className="space-y-3 mb-6 flex-grow list-none p-0 m-0">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-amber-600">
                        <FontAwesomeIcon icon="fa-solid fa-check-circle" className="text-lg" />
                      </div>
                      <div className="text-gray-800">
                        <span className="font-medium">Penggunaan ruangan:</span> 5 jam (hingga pukul 22.00 WIB)
                      </div>
                    </li>

                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-amber-600">
                        <FontAwesomeIcon icon="fa-solid fa-mug-hot" className="text-lg" />
                      </div>
                      <div className="text-gray-800">
                        <span className="font-medium">Coffee break:</span> 1 kali + snack
                      </div>
                    </li>

                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-amber-600">
                        <FontAwesomeIcon icon="fa-solid fa-bottle-water" className="text-lg" />
                      </div>
                      <div className="text-gray-800">
                        <span className="font-medium">Air mineral:</span> Gratis
                      </div>
                    </li>

                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-amber-600">
                        <FontAwesomeIcon icon="fa-solid fa-microphone" className="text-lg" />
                      </div>
                      <div className="text-gray-800">
                        <span className="font-medium">Sound system:</span> 2 mikrofon nirkabel
                      </div>
                    </li>

                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-amber-600">
                        <FontAwesomeIcon icon="fa-solid fa-tv" className="text-lg" />
                      </div>
                      <div className="text-gray-800">
                        <span className="font-medium">Smart TV:</span> 1 unit
                      </div>
                    </li>

                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-amber-600">
                        <FontAwesomeIcon icon="fa-solid fa-wifi" className="text-lg" />
                      </div>
                      <div className="text-gray-800">
                        <span className="font-medium">Internet:</span> Wi-Fi
                      </div>
                    </li>

                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-amber-600">
                        <FontAwesomeIcon icon="fa-solid fa-snowflake" className="text-lg" />
                      </div>
                      <div className="text-gray-800">
                        <span className="font-medium">Pendingin ruangan:</span> AC
                      </div>
                    </li>
                  </ul>

                  <div className="mt-auto">
                    <a
                      href="https://api.whatsapp.com/send?phone=6282267878880&text=Halo%2C%20Saya%20mau%20booking%20paket%20meeting%20halfday%20A"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center terracotaa-btn text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      <span className="text-xl mr-2">
                        <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
                      </span>
                      Booking Sekarang
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="!h-auto">
              <div className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                <div className="p-6 flex-grow flex flex-col">
                  <div className="mb-6">
                    <div className="w-12 h-1 bg-amber-600 mb-4"></div>
                    <h3 className="text-xl md:text-2xl font-bold text-black mb-2">HALF DAY MEETING B PACKAGE</h3>
                    <div className="text-amber-600 font-bold text-lg">IDR 200.000/PAX</div>
                  </div>

                  <ul className="space-y-3 mb-6 flex-grow list-none p-0 m-0">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-amber-600">
                        <FontAwesomeIcon icon="fa-solid fa-check-circle" className="text-lg" />
                      </div>
                      <div className="text-gray-800">
                        <span className="font-medium">Penggunaan ruangan:</span> 5 jam (hingga pukul 22.00 WIB)
                      </div>
                    </li>

                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-amber-600">
                        <FontAwesomeIcon icon="fa-solid fa-mug-hot" className="text-lg" />
                      </div>
                      <div className="text-gray-800">
                        <span className="font-medium">Coffee break:</span> 1 kali
                      </div>
                    </li>

                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-amber-600">
                        <FontAwesomeIcon icon="fa-solid fa-utensils" className="text-lg" />
                      </div>
                      <div className="text-gray-800">
                        <span className="font-medium">Makan siang:</span> 1 kali (tanpa snack tambahan)
                      </div>
                    </li>

                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-amber-600">
                        <FontAwesomeIcon icon="fa-solid fa-bottle-water" className="text-lg" />
                      </div>
                      <div className="text-gray-800">
                        <span className="font-medium">Air mineral:</span> Gratis
                      </div>
                    </li>

                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-amber-600">
                        <FontAwesomeIcon icon="fa-solid fa-microphone" className="text-lg" />
                      </div>
                      <div className="text-gray-800">
                        <span className="font-medium">Sound system:</span> 2 mikrofon nirkabel
                      </div>
                    </li>

                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-amber-600">
                        <FontAwesomeIcon icon="fa-solid fa-tv" className="text-lg" />
                      </div>
                      <div className="text-gray-800">
                        <span className="font-medium">Smart TV:</span> 1 unit
                      </div>
                    </li>

                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-amber-600">
                        <FontAwesomeIcon icon="fa-solid fa-wifi" className="text-lg" />
                      </div>
                      <div className="text-gray-800">
                        <span className="font-medium">Internet:</span> Wi-Fi
                      </div>
                    </li>

                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-amber-600">
                        <FontAwesomeIcon icon="fa-solid fa-snowflake" className="text-lg" />
                      </div>
                      <div className="text-gray-800">
                        <span className="font-medium">Pendingin ruangan:</span> AC
                      </div>
                    </li>
                  </ul>

                  <div className="mt-auto">
                    <a
                      href="https://api.whatsapp.com/send?phone=6282267878880&text=Halo%2C%20Saya%20mau%20booking%20paket%20meeting%20halfday%20B"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center terracotaa-btn  text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      <span className="text-xl mr-2">
                        <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
                      </span>
                      Booking Sekarang
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="!h-auto">
              <div className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                <div className="p-6 flex-grow flex flex-col">
                  <div className="mb-6">
                    <div className="w-12 h-1 bg-amber-600 mb-4"></div>
                    <h3 className="text-xl md:text-2xl font-bold text-black mb-2">HALF DAY MEETING C PACKAGE</h3>
                    <div className="text-amber-600 font-bold text-lg">IDR 250.000/PAX</div>
                  </div>

                  <ul className="space-y-3 mb-6 flex-grow list-none p-0 m-0">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-amber-600">
                        <FontAwesomeIcon icon="fa-solid fa-check-circle" className="text-lg" />
                      </div>
                      <div className="text-gray-800">
                        <span className="font-medium">Penggunaan ruangan:</span> 5 jam (hingga pukul 22.00 WIB)
                      </div>
                    </li>

                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-amber-600">
                        <FontAwesomeIcon icon="fa-solid fa-mug-hot" className="text-lg" />
                      </div>
                      <div className="text-gray-800">
                        <span className="font-medium">Coffee break:</span> 1 kali
                      </div>
                    </li>

                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-amber-600">
                        <FontAwesomeIcon icon="fa-solid fa-utensils" className="text-lg" />
                      </div>
                      <div className="text-gray-800">
                        <span className="font-medium">Makan siang:</span> 1 kali + snack
                      </div>
                    </li>

                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-amber-600">
                        <FontAwesomeIcon icon="fa-solid fa-bottle-water" className="text-lg" />
                      </div>
                      <div className="text-gray-800">
                        <span className="font-medium">Air mineral:</span> Gratis
                      </div>
                    </li>

                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-amber-600">
                        <FontAwesomeIcon icon="fa-solid fa-microphone" className="text-lg" />
                      </div>
                      <div className="text-gray-800">
                        <span className="font-medium">Sound system:</span> 2 mikrofon nirkabel
                      </div>
                    </li>

                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-amber-600">
                        <FontAwesomeIcon icon="fa-solid fa-tv" className="text-lg" />
                      </div>
                      <div className="text-gray-800">
                        <span className="font-medium">Smart TV:</span> 1 unit
                      </div>
                    </li>

                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-amber-600">
                        <FontAwesomeIcon icon="fa-solid fa-wifi" className="text-lg" />
                      </div>
                      <div className="text-gray-800">
                        <span className="font-medium">Internet:</span> Wi-Fi
                      </div>
                    </li>

                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-amber-600">
                        <FontAwesomeIcon icon="fa-solid fa-snowflake" className="text-lg" />
                      </div>
                      <div className="text-gray-800">
                        <span className="font-medium">Pendingin ruangan:</span> AC
                      </div>
                    </li>
                  </ul>

                  <div className="mt-auto">
                    <a
                      href="https://api.whatsapp.com/send?phone=6282267878880&text=Halo%2C%20Saya%20mau%20booking%20paket%20meeting%20halfday%20C"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center terracotaa-btn  text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      <span className="text-xl mr-2">
                        <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
                      </span>
                      Booking Sekarang
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="!h-auto">
              <div className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                <div className="p-6 flex-grow flex flex-col">
                  <div className="mb-6">
                    <div className="w-12 h-1 bg-amber-600 mb-4"></div>
                    <h3 className="text-xl md:text-2xl font-bold text-black mb-2">ONE DAY MEETING PACKAGE</h3>
                    <div className="text-amber-600 font-bold text-lg">IDR 400.000/PAX</div>
                  </div>

                  <ul className="space-y-3 mb-6 flex-grow list-none p-0 m-0">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-amber-600">
                        <FontAwesomeIcon icon="fa-solid fa-check-circle" className="text-lg" />
                      </div>
                      <div className="text-gray-800">
                        <span className="font-medium">Penggunaan ruangan:</span> 10 jam (hingga pukul 22.00 WIB)
                      </div>
                    </li>

                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-amber-600">
                        <FontAwesomeIcon icon="fa-solid fa-mug-hot" className="text-lg" />
                      </div>
                      <div className="text-gray-800">
                        <span className="font-medium">Coffee break:</span> 2 kali + snack
                      </div>
                    </li>

                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-amber-600">
                        <FontAwesomeIcon icon="fa-solid fa-utensils" className="text-lg" />
                      </div>
                      <div className="text-gray-800">
                        <span className="font-medium">Makan siang:</span> 1 kali
                      </div>
                    </li>

                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-amber-600">
                        <FontAwesomeIcon icon="fa-solid fa-plate-wheat" className="text-lg" />
                      </div>
                      <div className="text-gray-800">
                        <span className="font-medium">Makan malam:</span> 1 kali
                      </div>
                    </li>

                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-amber-600">
                        <FontAwesomeIcon icon="fa-solid fa-bottle-water" className="text-lg" />
                      </div>
                      <div className="text-gray-800">
                        <span className="font-medium">Air mineral:</span> Gratis untuk 2 kali penyajian
                      </div>
                    </li>

                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-amber-600">
                        <FontAwesomeIcon icon="fa-solid fa-microphone" className="text-lg" />
                      </div>
                      <div className="text-gray-800">
                        <span className="font-medium">Sound system:</span> 2 mikrofon nirkabel
                      </div>
                    </li>

                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-amber-600">
                        <FontAwesomeIcon icon="fa-solid fa-tv" className="text-lg" />
                      </div>
                      <div className="text-gray-800">
                        <span className="font-medium">Smart TV:</span> 1 unit
                      </div>
                    </li>

                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-amber-600">
                        <FontAwesomeIcon icon="fa-solid fa-wifi" className="text-lg" />
                      </div>
                      <div className="text-gray-800">
                        <span className="font-medium">Internet:</span> Wi-Fi
                      </div>
                    </li>

                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-amber-600">
                        <FontAwesomeIcon icon="fa-solid fa-snowflake" className="text-lg" />
                      </div>
                      <div className="text-gray-800">
                        <span className="font-medium">Pendingin ruangan:</span> AC
                      </div>
                    </li>
                  </ul>

                  <div className="mt-auto">
                    <a
                      href="https://api.whatsapp.com/send?phone=6282267878880&text=Halo%2C%20Saya%20mau%20booking%20paket%20meeting%20one%20day"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center terracotaa-btn  text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      <span className="text-xl mr-2">
                        <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
                      </span>
                      Booking Sekarang
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* End of meeting package list section */}
        {/* Swimming pool Section */}
        <div className="wedding-package mt-10">
          {/* title for Swimming pool section */}
          <LazyDiv>
            <div className="booking-title relative my-8 w-fit animate-fade-up">
              <h2 className="subtitle text-left">Swimming pool</h2>
              <h1 className="page-title">
                Kolam Renang Nyaman <br /> Cocok Untuk Keluarga
              </h1>
              <span className="absolute left-0 w-1/2 -bottom-4 h-[2px] bg-amber-600"></span>
            </div>
          </LazyDiv>
          {/* Swimming pool section description */}
          <LazyDiv>
            <div className="mb-8 w-fit animate-fade-right">
              <p className="page-title-desc">Nikmati kolam renang dengan ukuran luas, air yang selalu terjaga kebersihannya, dan area aman dan nyaman bagi anda dan keluarga.</p>
            </div>
          </LazyDiv>

          {/* swimmingpool package list */}
          <div className="wrapper max-w-6xl mx-auto px-4 py-8">
            <Swiper
              pagination={{
                dynamicBullets: true,
                clickable: true,
              }}
              spaceBetween={30}
              breakpoints={{
                320: { slidesPerView: 1 },
                650: { slidesPerView: 2 },
                1000: { slidesPerView: 3 },
              }}
              modules={[Pagination]}
              className="mySwimmingPackageSwiper"
            >
              <SwiperSlide className="!h-auto">
                <div className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="mb-6">
                      <div className="w-12 h-1 bg-amber-600 mb-4 mx-auto"></div>
                      <h3 className="text-xl md:text-2xl font-bold text-black mb-2 text-center">Pool Package</h3>
                      <div className="text-amber-600 font-bold text-2xl text-center">Rp. 100.000/person</div>
                    </div>

                    <ul className="space-y-4 mb-6 flex-grow list-none p-0 m-0">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mt-1 mr-3 text-amber-600">
                          <FontAwesomeIcon icon="fa-solid fa-clock" className="text-lg" />
                        </div>
                        <div className="text-gray-800">
                          <span className="font-medium">Durasi:</span> Berenang selama 3 jam
                        </div>
                      </li>

                      <li className="flex items-start">
                        <div className="flex-shrink-0 mt-1 mr-3 text-amber-600">
                          <FontAwesomeIcon icon="fa fa-bars" className="text-lg " />
                        </div>
                        
                        <div className="text-gray-800">
                          <span className="font-medium">Handuk:</span> Gratis 1 handuk
                        </div>
                      </li>

                      <li className="flex items-start">
                        <div className="flex-shrink-0 mt-1 mr-3 text-amber-600">
                          <FontAwesomeIcon icon="fa-solid fa-utensils" className="text-lg" />
                        </div>
                        <div className="text-gray-800">
                          <span className="font-medium">Makanan:</span> Nasi goreng/Indomie telur/Burger (Pilih salah satu)
                        </div>
                      </li>

                      <li className="flex items-start">
                        <div className="flex-shrink-0 mt-1 mr-3 text-amber-600">
                          <FontAwesomeIcon icon="fa-solid fa-mug-hot" className="text-lg" />
                        </div>
                        <div className="text-gray-800">
                          <span className="font-medium">Minuman:</span> Teh dingin
                        </div>
                      </li>
                    </ul>

                    <div className="mt-auto">
                      <a
                        href="https://api.whatsapp.com/send?phone=6282267878880&text=Halo%2C%20Saya%20mau%20booking%20kolam%20renang%20dengan%20paket%20pool%20package"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center terracotaa-btn  text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                      >
                        <span className="text-xl mr-2">
                          <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
                        </span>
                        Booking Sekarang
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="!h-auto">
                <div className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="mb-6">
                      <div className="w-12 h-1 bg-amber-600 mb-4 mx-auto"></div>
                      <h3 className="text-xl md:text-2xl font-bold text-black mb-2 text-center">Pool Regular</h3>
                      <div className="text-amber-600 font-bold text-2xl text-center">Rp. 70.000/person</div>
                    </div>

                    <ul className="space-y-4 mb-6 flex-grow list-none p-0 m-0">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mt-1 mr-3 text-amber-600">
                          <FontAwesomeIcon icon="fa-solid fa-person-swimming" className="text-lg" />
                        </div>
                        <div className="text-gray-800">
                          <span className="font-medium">Aktivitas:</span> Berenang saja selama 3 jam
                        </div>
                      </li>
                    </ul>

                    <div className="mt-auto">
                      <a
                        href="https://api.whatsapp.com/send?phone=6282267878880&text=Halo%2C%20Saya%20mau%20booking%20kolam%20renang%20dengan%20paket%20pool%20regular"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center terracotaa-btn  text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                      >
                        <span className="text-xl mr-2">
                          <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
                        </span>
                        Booking Sekarang
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="!h-auto">
                <div className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="mb-6">
                      <div className="w-12 h-1 bg-amber-600 mb-4 mx-auto"></div>
                      <h3 className="text-xl md:text-2xl font-bold text-black mb-2 text-center">Pendamping</h3>
                      <div className="text-amber-600 font-bold text-2xl text-center">Rp. 50.000/person</div>
                    </div>

                    <ul className="space-y-4 mb-6 flex-grow list-none p-0 m-0">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mt-1 mr-3 text-amber-600">
                          <FontAwesomeIcon icon="fa-solid fa-user-group" className="text-lg" />
                        </div>
                        <div className="text-gray-800">
                          <span className="font-medium">Peran:</span> Mendampingi saja di area kolam (Tidak boleh berenang)
                        </div>
                      </li>
                    </ul>

                    <div className="mt-auto">
                      <a
                        href="https://api.whatsapp.com/send?phone=6282267878880&text=Halo%2C%20Saya%20mau%20booking%20kolam%20renang%20sebagai%20pendamping"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center terracotaa-btn  text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                      >
                        <span className="text-xl mr-2">
                          <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
                        </span>
                        Booking Sekarang
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        {/* End of swimming package list section */}

        {/* Accordion section */}
        <div className="accordion-container my-16">
          {/* title for FAQ section */}
          <LazyDiv>
            <div className="booking-title relative mt-8 w-fit animate-fade-right">
              <h2 className="subtitle text-left">F.A.Q.</h2>
              <h1 className="page-title">Frequently Asked Questions</h1>
              <span className="absolute left-0 w-1/2  -bottom-4 h-[2px] bg-amber-600"></span>
            </div>
          </LazyDiv>

          <div className="w-full mt-10 rounded-xl">
            {/* Item 1 */}
            <LazyDiv>
              <div className="border mt-2 bg-main rounded-lg border-black animate-fade-left animate-delay-100">
                <button onClick={() => setOpenIndex(openIndex === 0 ? null : 0)} className="flex items-center justify-between w-full p-5 font-medium  hover:bg-gray-100 hover:rounded-t-lg gap-3">
                  <span className="text-left font-semibold">Bagaimana cara booking kamar?</span>
                  <svg className={`w-3 h-3 shrink-0 transition-transform duration-300 ${openIndex === 0 ? "rotate-180" : ""}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${openIndex === 0 ? "max-h-96" : "max-h-0"}`}>
                  <div className="p-5 border-t border-black ">
                    <p className="mb-2 ">Anda bisa langsung klik tombol booking di paket yang anda inginkan dan anda akan langsung diarahkan ke admin kami melalui WhatsApp</p>
                  </div>
                </div>
              </div>
            </LazyDiv>

            {/* Item 2 */}
            <LazyDiv>
              <div className="border mt-2 bg-main rounded-lg border-black animate-fade-right animate-delay-200">
                <button onClick={() => setOpenIndex(openIndex === 1 ? null : 1)} className="flex items-center justify-between w-full p-5 font-medium  hover:bg-gray-100  gap-3">
                  <span className="text-left font-semibold">Apakah tersedia extra bed?</span>
                  <svg className={`w-3 h-3 shrink-0 transition-transform duration-300 ${openIndex === 1 ? "rotate-180" : ""}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${openIndex === 1 ? "max-h-96" : "max-h-0"}`}>
                  <div className="p-5 border-t border-black ">
                    <p className="mb-2 ">Extra bed tersedia dengan biaya tambahan per malam. Silakan hubungi resepsionis untuk informasi harga dan ketersediaan.</p>
                  </div>
                </div>
              </div>
            </LazyDiv>

            {/* Item 3 */}
            <LazyDiv>
              <div className="border mt-2 rounded-lg bg-main border-black animate-fade-left animate-delay-300">
                <button onClick={() => setOpenIndex(openIndex === 2 ? null : 2)} className="flex items-center justify-between w-full p-5 font-medium  hover:bg-gray-100 hover:rounded-b-lg gap-3">
                  <span className="text-left font-semibold">Apakah tersedia parkir untuk tamu?</span>
                  <svg className={`w-3 h-3 shrink-0 transition-transform duration-300 ${openIndex === 2 ? "rotate-180" : ""}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${openIndex === 2 ? "max-h-96" : "max-h-0"}`}>
                  <div className="p-5 border-t border-black ">
                    <p className="mb-2 ">Ya, kami menyediakan area parkir luas dan gratis untuk tamu yang menginap, termasuk parkir motor dan mobil. beserta fasilitas lainnya</p>
                  </div>
                </div>
              </div>
            </LazyDiv>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;

// * Contoh integrasi swiper dengan fancybox

//  <section className="py-16 px-4 sm:px-6 lg:px-8 bg-main">
//       <div className="max-w-7xl mx-auto">
//         <Swiper
//           spaceBetween={20}
//           slidesPerView={1}
//           breakpoints={{
//             640: {
//               slidesPerView: 2,
//               spaceBetween: 20,
//             },
//             768: {
//               slidesPerView: 3,
//               spaceBetween: 30,
//             },
//           }}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//           }}
//           pagination={{
//             clickable: true,
//             dynamicBullets: true,
//           }}
//           modules={[Autoplay, Pagination]}
//           className="gallery-swiper"
//         >
//           {galleryImages.map((image) => (
//             <SwiperSlide key={image.id}>
//               <a
//                 href={image.full}
//                 data-fancybox="gallery-swiper"
//                 data-caption={image.caption}
//                 ref={fancyboxRefGallery}
//                 className="block"
//               >
//                 <img
//                   src={image.thumb}
//                   alt={image.alt}
//                   className="w-full rounded-xl"
//                 />
//               </a>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
