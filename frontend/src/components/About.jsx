import Testimonial from "./Testimonial";
import React from "react";
import LazyDiv from "./misc/LazyDiv";
//import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";

//import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Icon panah
const About = () => {
  return (
    <section>
      {/* Hero section */}
      <div
        className="relative h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/about/about1.jpg" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white flex justify-center animate-fade-up">
            <h1 className="title drop-shadow-lg">
              Sribudaya Resort & Homestay
            </h1>
          </div>
        </div>
      </div>
      {/* end of hero section */}

      <div className="w-full min-h-screen relative">
        {/* Clean Background */}
        <div className="absolute inset-0">
          <div
            className="w-full h-full md:bg-cover lg:bg-contain bg-center bg-no-repeat"
            style={{
              // backgroundImage: "url(/images/about/logo-sribudaya-full.png)",
            }}
          >
            <div className="absolute inset-0  opacity-90"></div>
            <div className="absolute inset-0  opacity-90"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen pt-16 pb-8 md:py-20 px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <LazyDiv>
              <div className="text-center mb-16">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-800 mb-4 tracking-tight animate-fade-right">
                  Sribudaya Resort
                </h1>
                <div className="w-12 h-px bg-gray-400 mx-auto mb-6"></div>
                <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto animate-fade-left">
                  Tempat yang damai dikelilingi pepohonan dan bangunan elegan
                </p>
              </div>
            </LazyDiv>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
              {/* Left Content */}
              <LazyDiv>
                <div className="space-y-12 animate-fade-right">
                  <div>
                    <h2 className="text-3xl font-light text-gray-800 mb-6 tracking-wide">
                      Tentang kami
                    </h2>
                    <p className="text-justify text-gray-600 leading-loose text-lg mb-6">
                      <strong>Sribudaya Resort</strong> Aceh adalah resor unik
                      yang memadukan arsitektur bergaya Skandinavia dengan
                      nuansa alam yang menyegarkan, menciptakan tempat
                      peristirahatan yang tenang dan modern bagi para tamu kami.
                      Terletak strategis dekat pusat kota, bandara, pasar
                      tradisional, dan pantai-pantai indah, resor kami
                      menawarkan kenyamanan dan ketenangan.
                    </p>
                    <p className="text-justify text-gray-600 leading-loose text-lg mb-6">
                      Kami menyediakan berbagai fasilitas, termasuk kamar yang
                      nyaman untuk menginap bersama keluarga, kolam renang,
                      ruang serbaguna yang luas untuk acara, ruang pertemuan
                      khusus, area pernikahan yang indah, area parkir gratis,
                      serta kafe indoor dan outdoor yang dirancang untuk
                      relaksasi dan pertemuan sosial. Sribudaya Resort adalah
                      destinasi sempurna untuk liburan, bisnis, dan perayaan
                      yang berkesan di Aceh.
                    </p>
                  </div>

                  {/* Philosophy */}
                  <div className="border-l-2 border-gray-200 pl-8">
                    <h3 className="text-xl font-light text-gray-800 mb-4">
                      Filosofi kami
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Filosofi kami adalah menghadirkan kemewahan yang
                      berkelanjutan, dengan mengutamakan kenyamanan tamu
                      sekaligus menjaga kelestarian lingkungan sekitar.
                    </p>
                  </div>
                </div>
              </LazyDiv>

              {/* Right Content - Features */}
              <LazyDiv>
                <div className="space-y-8">
                  {/* Feature 1 */}
                  <div className="group hover:bg-gray-50 p-6 rounded-lg transition-all duration-300 cursor-pointer animate-jump-in animate-delay-[100ms]">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-800 group-hover:text-white transition-all duration-300">
                        <span className="text-xl">🏔</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-800 mb-2">
                          Pemandangan Alam
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Pemandangan gunung dan pepohonan di Sribudaya Resort
                          yang indah yang memanjakan mata pengunjung kami
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="group hover:bg-gray-50 p-6 rounded-lg transition-all duration-300 cursor-pointer animate-jump-in animate-delay-[200ms]">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-800 group-hover:text-white transition-all duration-300">
                        <span className="text-xl">🧘</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-800 mb-2">
                          Suasana Nyaman dan Tenang
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Suasana yang membuat pengunjung merasa betah, rileks,
                          dan jauh dari hiruk pikuk perkotaan.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="group hover:bg-gray-50 p-6 rounded-lg transition-all duration-300 cursor-pointer animate-jump-in animate-delay-[300ms]">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-800 group-hover:text-white transition-all duration-300">
                        <span className="text-xl">🍃</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-800 mb-2">
                          Taman yang asri
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Taman kami yang indah dan asri di Sribudaya Resort
                          membuat pengunjung betah untuk berlama-lama dan cocok
                          untuk photoshoot.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Feature 4 */}
                  <div className="group hover:bg-gray-50 p-6 rounded-lg transition-all duration-300 cursor-pointer animate-jump-in animate-delay-[400ms]">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-800 group-hover:text-white transition-all duration-300">
                        <span className="text-xl">🌅</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-800 mb-2">
                          Perpaduan budaya
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Desain arsitektur Sribudaya Resort dirancang
                          sedemikian rupa dengan memadukan budaya Aceh dan gaya
                          arsitektur Scandinavia.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </LazyDiv>
            </div>

            {/* Stats Section */}
            <LazyDiv className="bg-white shadow-lg">
              <div className="items-center justify-center"></div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-16 animate-fade-up">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  {[
                    { number: "2000+", label: "Kepuasan Tamu" },
                    { number: "24/7", label: "Layanan personal " },
                    { number: "4,6★", label: "Standar Pelayanan Terbaik" },
                    { number: "40+", label: "Profesional staff" },
                  ].map((stat, index) => (
                    <div key={index} className="group">
                      <div className="text-3xl md:text-4xl font-light text-gray-800 mb-2 group-hover:text-gray-900 transition-colors">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-500 font-light tracking-wide uppercase">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </LazyDiv>
          </div>
        </div>
      </div>
      <Testimonial />
    </section>
  );
};
export default About;
