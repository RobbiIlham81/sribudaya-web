//

import React, { useState, useEffect } from "react";
import LazyDiv from "./misc/LazyDiv";

const facilities = [
  {
    title: "Kolam Renang Outdoor",
    description: "Segarkan diri di kolam renang bergaya modern dengan suasana estetik. Cocok untuk relaksasi, olahraga ringan, atau sekadar bersantai bersama keluarga.",
    image: "images/facility/kolam_renang.jpg",
    category: "Recreation",
  },
  {
    title: "Indoor Coffee Shop",
    description:
      "Nikmati racikan Coffee dan aneka minuman segar, dan hidangan lainnya. Dengan suasana nyaman dan estetik tempat ideal untuk bersantai dan menikmati kebersamaan.",
    image: "images/facility/coffee shop.jpeg",
    category: "eating and drinking",
  },
  {
    title: "Outdoor Coffee Shop",
    description:
      "Nikmati secangkir kopi di tengah kesegaran alam terbuka. Suasana santai di luar ruangan ini adalah tempat yang pas untuk bertemu teman atau menikmati hidangan kami dengan pemandangan yang menyejukkan.",
    image: "images/facility/outdoor_caffe.jpeg",
    category: "eating and drinking",
  },
  {
    title: "Homestay & Kamar Nyaman",
    description: "Rasakan kenyamanan istirahat di kamar dengan desain modern dan fasilitas lengkap. Ideal untuk keluarga, pasangan, maupun perjalanan pribadi.",
    image: "images/facility/kamar.jpg",
    category: "Accommodation",
  },
  {
    title: "Musholla",
    description: "Tempat ibadah yang bersih, tenang, dan nyaman, dengan ruang terpisah untuk laki-laki dan perempuan agar ibadah lebih khusyuk.",
    image: "images/facility/musholla.jpg",
    category: "Spiritual",
  },
  {
    title: "Meeting room",
    description: "Ruang pertemuan modern untuk rapat, seminar, atau workshop. Suasana profesional yang mendukung kegiatan lebih efektif dan lancar.",
    image: "images/facility/meetingroom.jpeg",
    category: "Facilities",
  },
  {
    title: "Parking Area",
    description: "Area parkir yang luas dan aman. Memberi kenyamanan sejak pertama kali Anda tiba.",
    image: "images/facility/parkir.jpg",
    category: "Convenience",
  },
  {
    title: "Wedding Venue",
    description: "Rayakan momen sakral dengan suasana magis dan layanan terbaik di venue mewah yang akan membuat pernikahan Anda tak terlupakan",
    image: "images/facility/acara_nikah.jpeg",
    category: "Special Events",
  },
];

const heroImages = ["images/facility/sribudaya.jpg", "images/facility/swimming.jpg", "images/facility/ruanggan.jpeg", "images/facility/caffe.jpeg"];

const Facility = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  // for smooth scrolling specific page
  useEffect(() => {
    document.documentElement.classList.add("smooth-scroll"); // add to <html>

    return () => {
      document.documentElement.classList.remove("smooth-scroll"); // clean up
    };
  }, []);

  return (
    <div className="min-h-screen  smooth-scroll">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}>
              <img src={image} alt={`Hero ${index + 1}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        {/* <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button> */}

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {heroImages.map((_, index) => (
            <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-white scale-110" : "bg-white/50 hover:bg-white/75"}`} />
          ))}
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-6">
            <div className="opacity-0 animate-pulse" style={{ animation: "fadeIn 1s ease-out forwards" }}>
              {/* <div className="flex items-center justify-center mb-6">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-400"></div>
                <svg
                  className="w-8 h-8 mx-4 text-amber-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-400"></div>
              </div> */}

              <h1 className="title !mb-4">
                <span className=" bg-clip-text">Fasilitas Unggulan</span>
              </h1>

              <p className="title-desc mb-8">
                Selamat datang di <span className="font-semibold text-amber-200">Sribudaya Resort & Homestay</span>, tempat nyaman untuk beristirahat dan menikmati suasana yang tenang.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#facilities" className="flex flex-col sm:flex-row gap-4 justify-center items-center terracotaa-btn">
                  Jelajahi Fasilitas
                </a>
                {/* <a
                  href="#booking"
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center terracotaa-btn"
                >
                  Book Now
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Title */}

      <section id="facilities" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <LazyDiv>
            <div className="text-center mb-16 animate-fade-right">
              {/* <div className="flex items-center justify-center mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-400"></div>
              <svg
                className="w-8 h-8 mx-6 text-amber-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9.5 2A1.5 1.5 0 008 3.5v1A1.5 1.5 0 009.5 6h5A1.5 1.5 0 0016 4.5v-1A1.5 1.5 0 0014.5 2h-5zM12 7a8 8 0 108 8 8 8 0 00-8-8zm0 2a6 6 0 016 6 6 6 0 01-6 6 6 6 0 01-6-6 6 6 0 016-6z" />
              </svg>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400"></div>
            </div> */}

              <h2 className="subtitle">Facilities</h2>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-left animate-delay-100">
                <span className="page-title">Signature Facilities</span>
              </h1>

              <p className="page-title-desc animate-fade-left animate-delay-200">Setiap fasilitas di Sribudaya Resort kami hadirkan agar Anda merasakan pengalaman menginap yang menyenangkan dan penuh cerita.</p>
            </div>
          </LazyDiv>

          {/* Facilities Grid */}

          <div className="space-y-20 ">
            {facilities.map((facility, index) => {
              if (facility.title === "Wedding Venue") {
                return (
                  <div key={index} className="relative">
                    {/* Wedding Venue Title */}
                    <div className="text-center mb-12">
                      <div className="flex items-center justify-center mb-6 aniamate-fade-down animate-delay-100">
                        <div className="h-px w-16 bg-gradient-to-r from-transparent to-rose-400"></div>
                        <svg className="w-8 h-8 mx-6 text-rose-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                        <div className="h-px w-16 bg-gradient-to-l from-transparent to-rose-400"></div>
                      </div>

                      <LazyDiv>
                        <h3 className="text-4xl font-bold mb-4 animate-fade-down">
                          <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">Wedding Hall</span>
                        </h3>
                      </LazyDiv>

                      <LazyDiv>
                        <p className="text-lg max-w-2xl mx-auto page-title-desc animate-fade-down animate-delay-100">Rayakan momen sakral di tempat pernikahan istimewa yang membuat hari Anda tak terlupakan</p>
                      </LazyDiv>
                    </div>

                    {/* Wedding Venue Card */}
                    <div className="relative h-96 md:h-[36rem] rounded-3xl overflow-hidden group shadow-2xl transform transition-all duration-700 hover:scale-[1.02]">
                      <img src={facility.image} alt={facility.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 page-title-desc" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                        <div className="flex items-center mb-4">
                          <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                          </svg>
                          <span className="text-sm font-medium text-rose-300">{facility.category}</span>
                        </div>
                        <LazyDiv>
                          <h4 className="text-3xl font-bold mb-4 anamate-fade-down ">{facility.title}</h4>
                          <p className="text-lg text-whaite-200 leading-relaxed page-title-desc animate-fade-down animate-delay-100 ">{facility.description}</p>
                        </LazyDiv>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 transform transition-all duration-700 hover:scale-[1.02] ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  {/* Image */}

                  <div className="lg:w-1/2 relative group">
                    <LazyDiv>
                      <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl animate-fade-right">
                        <img src={facility.image} alt={facility.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 " />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </LazyDiv>
                    {/* Floating Badge */}
                    {/* <div className="absolute -top-4 -right-4 w-16 h-16 bg-amber-600 rounded-2xl flex items-center justify-center text-white shadow-xl transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </div> */}
                  </div>

                  {/* Content */}
                  <div className="lg:w-1/2 space-y-6">
                    <LazyDiv>
                      <div className="flex items-center gap-3 animate-fade-right">
                        <span className="px-3 py-1 bg-amber-600 text-white rounded-full text-sm font-medium">{facility.category}</span>
                      </div>

                      <h3 className="page-title animate-fade-up">{facility.title}</h3>

                      <p className="page-title-desc animate-fade-up">{facility.description}</p>
                    </LazyDiv>
                    {/* 
                    <div className="flex items-center text-blue-600 hover:text-blue-700 cursor-pointer font-medium group">
                      <span>Pelajari lebih lanjut</span>
                      <svg
                        className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <LazyDiv>
        <section id="booking" className="py-36  animate-fade-up">
          <div className="max-w-4xl mx-auto text-center px-6">
            {/* <svg
            className="w-16 h-16 mx-auto mb-8 text-blue-600"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg> */}
            <h2 className="page-title">Ready for an Unforgettable Experience?</h2>
            <p className="page-title-desc mb-8">Rasakan kemewahan dan kenyamanan yang tak tertandingi di Sribudaya Resort & Homestay</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center ">
              <a href="/booking" className="terracotaa-btn  ">
                Book Your Stay Now
              </a>
              {/* <a href="#contact" className="terracotaa-btn">
              Contact Us
            </a> */}
            </div>
          </div>
        </section>
      </LazyDiv>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Facility;
