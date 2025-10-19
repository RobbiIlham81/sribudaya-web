// src/components/misc/Wedding.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

// font awesome icon import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import LazyDiv from "./misc/LazyDiv";

// Import AOS
import AOS from "aos";
import "aos/dist/aos.css";

const Wedding = () => {
  // daftar gambar dari folder public/images
  const images = ["/images/wedding/wedding1.jpeg", "/images/wedding/wedding2.jpg", "/images/wedding/wedding3.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  //Untuk gambar di gelery bisa di zoom
  const [selectedImg, setSelectedImg] = useState(null);
  // Tutup modal dengan tombol ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedImg(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // ganti gambar otomatis tiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Inisialisasi AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div className="bg-white text-gray-800">
      <section className="relative h-[80vh] w-full overflow-hidden">
        {/* background image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: `url(${images[currentIndex]})`,
          }}
        ></div>

        {/* overlay gelap biar teks kelihatan */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* teks hero */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">Celebrate Your Love at SriBudaya Resort</h1>
          <p className="text-lg md:text-xl max-w-2xl">experience the perfect wedding destination in harmony with nature</p>
        </div>

        {/* tombol manual (opsional) */}
        <div className="absolute bottom-5 flex w-full justify-center gap-3 z-10">
          {images.map((_, index) => (
            <button key={index} onClick={() => setCurrentIndex(index)} className={`h-3 w-3 rounded-full transition-all ${currentIndex === index ? "bg-white" : "bg-gray-400"}`}></button>
          ))}
        </div>
      </section>

      {/* Wedding Package list */}
      <div className="max-w-6xl mx-auto px-6 py-16 ">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-4 text-amber-600">Wedding Packages</h2>
          <p className="text-gray-600">Choose your perfect celebration plan</p>
        </div>

        {/* Wedding Package Daisy */}
        <div data-aos="fade-up" data-aos-delay="100">
          <h1 className="font-bold text-2xl text-amber-600 mb-2">Sribudaya X Daisy</h1>
        </div>
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
          modules={[Autoplay, Pagination]} // Tambahkan Autoplay di sini
          autoplay={{
            delay: 3000, // Waktu delay antar slide (dalam ms)
            disableOnInteraction: false, // Agar autoplay tetap berjalan meskipun user interaksi
            pauseOnMouseEnter: true, // Berhenti saat mouse hover
          }}
          className="myMeetingPackageSwiper"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* SILVER Daisy */}
          <SwiperSlide className="!h-auto">
            <div className="bg-white h-full rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-transform transform hover:scale-105">
              <div>
                <img src="/images/wedding/daisy-silver-package.png" alt="Silver Package" className="w-full h-full object-cover cursor-pointer" onClick={() => setSelectedImg("/images/wedding/daisy-silver-package.png")} />
                <div className="p-6">
                  <div className="mb-6">
                    <div className="w-12 h-1 bg-amber-600 mb-4"></div>
                    <h3 className="text-xl md:text-2xl font-bold text-black mb-2">Silver Package (1000 Pax)</h3>
                    <div className="text-amber-600 font-bold text-lg">Rp 135.000.000,-</div>
                  </div>
                  <p className="text-gray-600 mb-4">Solusi hemat dengan fasilitas lengkap.</p>

                  <div className="mt-auto">
                    <a
                      href="https://api.whatsapp.com/send?phone=6282172004960&text=Halo%2C%20Saya%20mau%20booking%20Silver%20Package%20(1000 Pax)%20Daisy"
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
            </div>
          </SwiperSlide>

          {/* MODAL FULLSCREEN */}
          {selectedImg && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={() => setSelectedImg(null)}>
              <img src={selectedImg} alt="Preview" className="max-w-4xl w-full max-h-[90vh] object-contain" />
            </div>
          )}
          {/* END SILVER Daisy */}

          {/* PLATINUM Daisy */}
          <SwiperSlide className="!h-auto">
            <div className="bg-white h-full rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-transform transform hover:scale-105">
              <div>
                <img src="/images/wedding/daisy-platinum-package.png" alt="Platinum Package" className="w-full h-full object-cover cursor-pointer" onClick={() => setSelectedImg("/images/wedding/daisy-platinum-package.png")} />
                <div className="p-6">
                  <div className="mb-6">
                    <div className="w-12 h-1 bg-amber-600 mb-4"></div>
                    <h3 className="text-xl md:text-2xl font-bold text-black mb-2">Platinum Package (1000 Pax)</h3>
                    <div className="text-amber-600 font-bold text-lg">Rp155.000.000,-</div>
                  </div>
                  <p className="text-gray-600 mb-4">Level premium untuk kesan lebih mewah.</p>

                  <div className="mt-auto">
                    <a
                      href="https://api.whatsapp.com/send?phone=6282172004960&text=Halo%2C%20Saya%20mau%20booking%20Platinum%20Package%20(1000 Pax)%20Daisy"
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
            </div>
          </SwiperSlide>

          {/* MODAL FULLSCREEN */}
          {selectedImg && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={() => setSelectedImg(null)}>
              <img src={selectedImg} alt="Preview" className="max-w-4xl w-full max-h-[90vh] object-contain" />
            </div>
          )}

          {/* END PLATINUM Daisy */}

          {/* GOLD Daisy */}

          <SwiperSlide className="!h-auto">
            <div className="bg-white h-full rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-transform transform hover:scale-105">
              <div>
                <img src="/images/wedding/daisy-gold-package.png" alt="Gold Package" className="w-full h-full object-cover cursor-pointer" onClick={() => setSelectedImg("/images/wedding/daisy-gold-package.png")} />
                <div className="p-6">
                  <div className="mb-6">
                    <div className="w-12 h-1 bg-amber-600 mb-4"></div>
                    <h3 className="text-xl md:text-2xl font-bold text-black mb-2">Gold Package (1500 Pax)</h3>
                    <div className="text-amber-600 font-bold text-lg">Rp 182.500.000,-</div>
                  </div>
                  <p className="text-gray-600 mb-4">Lebih besar, lebih meriah, tetap elegan.</p>

                  <div className="mt-auto">
                    <a
                      href="https://api.whatsapp.com/send?phone=6282172004960&text=Halo%2C%20Saya%20mau%20booking%20Gold%20Package%20(1500 Pax)%20Daisy"
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
            </div>
          </SwiperSlide>

          {/* MODAL FULLSCREEN */}
          {selectedImg && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={() => setSelectedImg(null)}>
              <img src={selectedImg} alt="Preview" className="max-w-4xl w-full max-h-[90vh] object-contain" />
            </div>
          )}

          {/* END GOLD Daisy */}

          {/* ROYAL Daisy */}
          <SwiperSlide className="!h-auto">
            <div className="bg-white h-full rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-transform transform hover:scale-105">
              <div>
                <img src="/images/wedding/daisy-royal-package.png" alt="Royal Package" className="w-full h-full object-cover cursor-pointer" onClick={() => setSelectedImg("/images/wedding/daisy-royal-package.png")} />
                <div className="p-6">
                  <div className="mb-6">
                    <div className="w-12 h-1 bg-amber-600 mb-4"></div>
                    <h3 className="text-xl md:text-2xl font-bold text-black mb-2">Royal Package (2000 Pax)</h3>
                    <div className="text-amber-600 font-bold text-lg">Rp 210.000.000,-</div>
                  </div>
                  <p className="text-gray-600 mb-4">Paket paling eksklusif untuk perayaan megah.</p>

                  <div className="mt-auto">
                    <a
                      href="https://api.whatsapp.com/send?phone=6282172004960&text=Halo%2C%20Saya%20mau%20booking%20Royal%20Package%20(2000 Pax)%20Daisy"
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
            </div>
          </SwiperSlide>

          {/* MODAL FULLSCREEN */}
          {selectedImg && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={() => setSelectedImg(null)}>
              <img src={selectedImg} alt="Preview" className="max-w-4xl w-full max-h-[90vh] object-contain" />
            </div>
          )}
          {/* END Royal Daisy */}
        </Swiper>

        {/* Wedding Package ZR */}
        <div data-aos="fade-up" data-aos-delay="300">
          <h1 className="font-bold text-2xl text-amber-600 mb-2 mt-12">Sribudaya X ZR </h1>
        </div>
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
          modules={[Autoplay, Pagination]} // Tambahkan Autoplay di sini
          autoplay={{
            delay: 3000, // Waktu delay antar slide (dalam ms)
            disableOnInteraction: false, // Agar autoplay tetap berjalan meskipun user interaksi
            pauseOnMouseEnter: true, // Berhenti saat mouse hover
          }}
          className="myMeetingPackageSwiper"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {/* Outdoor ZR */}
          <SwiperSlide className="!h-auto">
            <div className="bg-white h-full rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-transform transform hover:scale-105">
              <div>
                <img src="/images/wedding/zr-outdoor.png" alt="Outdoor Package" className="w-full h-full object-cover cursor-pointer" onClick={() => setSelectedImg("/images/wedding/zr-outdoor.png")} />
                <div className="p-6">
                  <div className="mb-6">
                    <div className="w-12 h-1 bg-amber-600 mb-4"></div>
                    <h3 className="text-xl md:text-2xl font-bold text-black mb-2">Outdoor Package (500 Pax)</h3>
                    <div className="text-amber-600 font-bold text-lg">Rp 110.000.000,-</div>
                  </div>
                  <p className="text-gray-600 mb-4">Dekorasi cantik, tenda, hiburan, dokumentasi, dan planner profesional untuk suasana romantis di alam terbuka.</p>

                  <div className="mt-auto">
                    <a
                      href="https://api.whatsapp.com/send?phone=6282172004960&text=Halo%2C%20Saya%20mau%20booking%20Outdoor%20Package%20(500 Pax)%20ZR"
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
            </div>
          </SwiperSlide>
          {/* MODAL FULLSCREEN */}
          {selectedImg && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={() => setSelectedImg(null)}>
              <img src={selectedImg} alt="Preview" className="max-w-4xl w-full max-h-[90vh] object-contain" />
            </div>
          )}

          {/* END ZR Outdoor */}

          {/* Indoor ZR */}
          <SwiperSlide className="!h-auto">
            <div className="bg-white h-full rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-transform transform hover:scale-105">
              <div>
                <img src="/images/wedding/zr-indoor.png" alt="Indoor Package" className="w-full h-full object-cover cursor-pointer" onClick={() => setSelectedImg("/images/wedding/zr-indoor.png")} />
                <div className="p-6">
                  <div className="mb-6">
                    <div className="w-12 h-1 bg-amber-600 mb-4"></div>
                    <h3 className="text-xl md:text-2xl font-bold text-black mb-2">Indoor Package (1000 Pax)</h3>
                    <div className="text-amber-600 font-bold text-lg">Rp178.000.000,-</div>
                  </div>
                  <p className="text-gray-600 mb-4">Venue ber-AC, dekorasi elegan, dokumentasi, hiburan, dan wedding planner untuk acara mewah dan tertata rapi.</p>

                  <div className="mt-auto">
                    <a
                      href="https://api.whatsapp.com/send?phone=6282172004960&text=Halo%2C%20Saya%20mau%20booking%20Indoor%20Package%20(1000 Pax)%20ZR"
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
            </div>
          </SwiperSlide>
        </Swiper>

        {/* MODAL FULLSCREEN */}
        {selectedImg && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={() => setSelectedImg(null)}>
            <img src={selectedImg} alt="Preview" className="max-w-4xl w-full max-h-[90vh] object-contain" />
          </div>
        )}

        {/* END ZR Indoor */}

        {/* Wedding Package Hadrah */}
        <div data-aos="fade-up" data-aos-delay="500">
          <h1 className="font-bold text-2xl text-amber-600 mb-2 mt-12">Sribudaya X Hadrah</h1>
        </div>
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
          modules={[Autoplay, Pagination]} // Tambahkan Autoplay di sini
          autoplay={{
            delay: 3000, // Waktu delay antar slide (dalam ms)
            disableOnInteraction: false, // Agar autoplay tetap berjalan meskipun user interaksi
            pauseOnMouseEnter: true, // Berhenti saat mouse hover
          }}
          className="myMeetingPackageSwiper"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          {/* hadrah-silver */}
          <SwiperSlide className="!h-auto">
            <div className="bg-white h-full rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-transform transform hover:scale-105">
              <div>
                <img src="/images/wedding/hadrah-silver.png" alt="Silver Package" className="w-full h-full object-cover cursor-pointer" onClick={() => setSelectedImg("/images/wedding/hadrah-silver.png")} />
                <div className="p-6">
                  <div className="mb-6">
                    <div className="w-12 h-1 bg-amber-600 mb-4"></div>
                    <h3 className="text-xl md:text-2xl font-bold text-black mb-2">Silver Package (500 Pax)</h3>
                    <div className="text-amber-600 font-bold text-lg">Rp 107.000.000,-</div>
                  </div>
                  <p className="text-gray-600 mb-4">Paket lengkap + sound, MC, dekorasi pelaminan, catering 500 pax, harga paling bersahabat!</p>

                  <div className="mt-auto">
                    <a
                      href="https://api.whatsapp.com/send?phone=6282172004960&text=Halo%2C%20Saya%20mau%20booking%20Silver%20Package%20(500 Pax)%20Hadrah"
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
            </div>
          </SwiperSlide>

          {/* MODAL FULLSCREEN */}
          {selectedImg && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={() => setSelectedImg(null)}>
              <img src={selectedImg} alt="Preview" className="max-w-4xl w-full max-h-[90vh] object-contain" />
            </div>
          )}

          {/* END hadrah-silver */}

          {/* hadrah-silverstart */}
          <SwiperSlide className="!h-auto">
            <div className="bg-white h-full rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-transform transform hover:scale-105">
              <div>
                <img src="/images/wedding/hadrah-silverstart.png" alt="Silver Package" className="w-full h-full object-cover cursor-pointer" onClick={() => setSelectedImg("/images/wedding/hadrah-silverstart.png")} />
                <div className="p-6">
                  <div className="mb-6">
                    <div className="w-12 h-1 bg-amber-600 mb-4"></div>
                    <h3 className="text-xl md:text-2xl font-bold text-black mb-2">Silver Start Package (500 Pax)</h3>
                    <div className="text-amber-600 font-bold text-lg">Rp 110.000.000,-</div>
                  </div>
                  <p className="text-gray-600 mb-4">Rayakan pernikahan cantik dan hemat dengan dekorasi elegan + 500 tamu terpenuhi!</p>

                  <div className="mt-auto">
                    <a
                      href="https://api.whatsapp.com/send?phone=6282172004960&text=Halo%2C%20Saya%20mau%20booking%20Silver%20Start%20Package%20(500 Pax)%20Hadrah"
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
            </div>
          </SwiperSlide>
          {/* MODAL FULLSCREEN */}
          {selectedImg && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={() => setSelectedImg(null)}>
              <img src={selectedImg} alt="Preview" className="max-w-4xl w-full max-h-[90vh] object-contain" />
            </div>
          )}

          {/* END hadrah-silverstart */}

          {/* hadrah-silver 800 */}
          <SwiperSlide className="!h-auto">
            <div className="bg-white h-full rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-transform transform hover:scale-105">
              <div>
                <img src="/images/wedding/hadrah-silver800.png" alt="Silver Package" className="w-full h-full object-cover cursor-pointer" onClick={() => setSelectedImg("/images/wedding/hadrah-silver800.png")} />
                <div className="p-6">
                  <div className="mb-6">
                    <div className="w-12 h-1 bg-amber-600 mb-4"></div>
                    <h3 className="text-xl md:text-2xl font-bold text-black mb-2">Silver Package (800 Pax)</h3>
                    <div className="text-amber-600 font-bold text-lg">Rp 120.000.000,-</div>
                  </div>
                  <p className="text-gray-600 mb-4">Lebih banyak tamu, tetap mewah! Dekorasi megah + hiburan + 800 pax catering!</p>

                  <div className="mt-auto">
                    <a
                      href="https://api.whatsapp.com/send?phone=6282172004960&text=Halo%2C%20Saya%20mau%20booking%20Silver%20Package%20(800 Pax)%20Hadrah"
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
            </div>
          </SwiperSlide>
          {/* MODAL FULLSCREEN */}
          {selectedImg && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={() => setSelectedImg(null)}>
              <img src={selectedImg} alt="Preview" className="max-w-4xl w-full max-h-[90vh] object-contain" />
            </div>
          )}

          {/* END hadrah-silver 800 */}

          {/* hadrah-silver 1000 */}
          <SwiperSlide className="!h-auto">
            <div className="bg-white h-full rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-transform transform hover:scale-105">
              <div>
                <img src="/images/wedding/hadrah-silver1000.png" alt="Silver Package" className="w-full h-full object-cover cursor-pointer" onClick={() => setSelectedImg("/images/wedding/hadrah-silver1000.png")} />
                <div className="p-6">
                  <div className="mb-6">
                    <div className="w-12 h-1 bg-amber-600 mb-4"></div>
                    <h3 className="text-xl md:text-2xl font-bold text-black mb-2">Silver Package (1000 Pax)</h3>
                    <div className="text-amber-600 font-bold text-lg">Rp 130.000.000,-</div>
                  </div>
                  <p className="text-gray-600 mb-4">Venue luas + dekorasi besar + hiburan + 1000 pax catering, cocok untuk pesta meriah!</p>

                  <div className="mt-auto">
                    <a
                      href="https://api.whatsapp.com/send?phone=6282172004960&text=Halo%2C%20Saya%20mau%20booking%20Silver%20Package%20(1000 Pax)%20Hadrah"
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
            </div>
          </SwiperSlide>
          {/* MODAL FULLSCREEN */}
          {selectedImg && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={() => setSelectedImg(null)}>
              <img src={selectedImg} alt="Preview" className="max-w-4xl w-full max-h-[90vh] object-contain" />
            </div>
          )}

          {/* END hadrah-silver 1000 */}

          {/* hadrah-silver 1000 all in */}
          <SwiperSlide className="!h-auto">
            <div className="bg-white h-full rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-transform transform hover:scale-105">
              <div>
                <img src="/images/wedding/hadrah-silver1000-all.png" alt="Silver Package" className="w-full h-full object-cover cursor-pointer" onClick={() => setSelectedImg("/images/wedding/hadrah-silver1000-all.png")} />
                <div className="p-6">
                  <div className="mb-6">
                    <div className="w-12 h-1 bg-amber-600 mb-4"></div>
                    <h3 className="text-xl md:text-2xl font-bold text-black mb-2">Silver Package (1000 Pax) All In</h3>
                    <div className="text-amber-600 font-bold text-lg">Rp 150.000.000,-</div>
                  </div>
                  <p className="text-gray-600 mb-4">Semua diurus! WO, MUA, foto/video, photobooth, dekorasi, hiburan & catering 1000 pax!</p>

                  <div className="mt-auto">
                    <a
                      href="https://api.whatsapp.com/send?phone=6282172004960&text=Halo%2C%20Saya%20mau%20booking%20Silver%20Package%20(1000 Pax)%20All%20In%20Hadrah"
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
            </div>
          </SwiperSlide>
          {/* MODAL FULLSCREEN */}
          {selectedImg && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={() => setSelectedImg(null)}>
              <img src={selectedImg} alt="Preview" className="max-w-4xl w-full max-h-[90vh] object-contain" />
            </div>
          )}

          {/* END hadrah-silver 1000 All In */}

          {/* hadrah-gold 1500  */}
          <SwiperSlide className="!h-auto">
            <div className="bg-white h-full rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-transform transform hover:scale-105">
              <div>
                <img src="/images/wedding/hadrah-gold1500.png" alt="Gold Package" className="w-full h-full object-cover cursor-pointer" onClick={() => setSelectedImg("/images/wedding/hadrah-gold1500.png")} />
                <div className="p-6">
                  <div className="mb-6">
                    <div className="w-12 h-1 bg-amber-600 mb-4"></div>
                    <h3 className="text-xl md:text-2xl font-bold text-black mb-2">Gold Package (1500 Pax)</h3>
                    <div className="text-amber-600 font-bold text-lg">Rp 180.000.000,-</div>
                  </div>
                  <p className="text-gray-600 mb-4">Paket premium dengan dekorasi megah, dokumentasi, band, MUA, photobooth & 1500 pax catering!</p>

                  <div className="mt-auto">
                    <a
                      href="https://api.whatsapp.com/send?phone=6282172004960&text=Halo%2C%20Saya%20mau%20booking%20Gold%20Package%20(1500 Pax)%20Hadrah"
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
            </div>
          </SwiperSlide>
          {/* MODAL FULLSCREEN */}
          {selectedImg && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={() => setSelectedImg(null)}>
              <img src={selectedImg} alt="Preview" className="max-w-4xl w-full max-h-[90vh] object-contain" />
            </div>
          )}

          {/* END hadrah-gold 1500 */}

          {/* hadrah-royal 2000 */}
          <SwiperSlide className="!h-auto">
            <div className="bg-white h-full rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-transform transform hover:scale-105">
              <div>
                <img src="/images/wedding/hadrah-royal2000.png" alt="Royal Package" className="w-full h-full object-cover cursor-pointer" onClick={() => setSelectedImg("/images/wedding/hadrah-royal2000.png")} />
                <div className="p-6">
                  <div className="mb-6">
                    <div className="w-12 h-1 bg-amber-600 mb-4"></div>
                    <h3 className="text-xl md:text-2xl font-bold text-black mb-2">Royal Package (2000 Pax)</h3>
                    <div className="text-amber-600 font-bold text-lg">Rp 235.000.000,-</div>
                  </div>
                  <p className="text-gray-600 mb-4">Pengalaman pernikahan mewah ala kerajaan: dekorasi royal, full WO, lighting, dokumentasi lengkap & 2000 pax catering!</p>

                  <div className="mt-auto">
                    <a
                      href="https://api.whatsapp.com/send?phone=6282172004960&text=Halo%2C%20Saya%20mau%20booking%20Royal%20Package%20(2000 Pax)%20Hadrah"
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
            </div>
          </SwiperSlide>

          {/* MODAL FULLSCREEN */}
          {selectedImg && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={() => setSelectedImg(null)}>
              <img src={selectedImg} alt="Preview" className="max-w-4xl w-full max-h-[90vh] object-contain" />
            </div>
          )}

          {/* END hadrah royal 2000*/}
        </Swiper>
      </div>

      {/* End of wedding package list section */}

      {/* Features Section */}
      <section className="py-16 bg-amber-50" data-aos="fade-up" data-aos-delay="700">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-amber-600">Why Choose SriBudaya Resort</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our resort offers the perfect blend of natural beauty and exceptional service for your special day</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm" data-aos="fade-up" data-aos-delay="800">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Scenic Venue</h3>
              <p className="text-gray-600">Breathtaking natural landscapes provide the perfect backdrop for your wedding photos</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm" data-aos="fade-up" data-aos-delay="900">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">Our experienced wedding planners will ensure every detail of your day is perfect</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm" data-aos="fade-up" data-aos-delay="1000">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Cultural Experience</h3>
              <p className="text-gray-600">Incorporate authentic local traditions into your wedding ceremony</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 max-w-6xl mx-auto px-6" data-aos="fade-up" data-aos-delay="1100">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-amber-600">Wedding Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Explore our gallery of beautiful weddings hosted at SriBudaya Resort</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="relative group overflow-hidden rounded-xl shadow-md cursor-pointer" onClick={() => setSelectedImg(`/images/wedding/gallery-${i}.jpg`)} data-aos="zoom-in" data-aos-delay={100 * i}>
              <img src={`/images/wedding/gallery-${i}.jpg`} alt={`Wedding ${i}`} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-lg font-semibold">Wedding Ceremony</h3>
                  <p className="text-sm">SriBudaya Resort</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Preview */}
        {selectedImg && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={() => setSelectedImg(null)}>
            <img src={selectedImg} className="max-w-4xl w-full max-h-[90vh] object-contain" alt="Preview" />
          </div>
        )}

        <LazyDiv>
          <div className="w-full flex justify-center items-center mt-12 animate-fade-up" data-aos="fade-up" data-aos-delay="1200">
            <a target="_blank" rel="noreferrer" href="https://instagram.com/sribudaya_resortaceh" className="terracotaa-btn flex items-center">
              <span>
                <FontAwesomeIcon icon="fa-brands fa-instagram" className="text-3xl"></FontAwesomeIcon>
              </span>
              Lihat foto wedding lainnya di Instagram
            </a>
          </div>
        </LazyDiv>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-amber-50" data-aos="fade-up" data-aos-delay="1300">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-amber-600">Happy Couples</h2>
            <p className="text-gray-600">Hear from couples who celebrated their special day at SriBudaya Resort</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="flex items-center mb-6">
              <img src="/images/testimonial-couple.jpg" alt="Testimonial" className="w-16 h-16 rounded-full object-cover mr-4" />
              <div>
                <h3 className="text-xl font-semibold">Sarah & Michael</h3>
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "Our wedding at SriBudaya Resort was absolutely magical. The team took care of every detail, allowing us to fully enjoy our special day. The venue was breathtaking and our guests are still talking about the experience!"
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-amber-600 text-white py-16 text-center" data-aos="fade-up" data-aos-delay="1400">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Plan Your Perfect Wedding</h2>
          <p className="mb-6 text-lg max-w-2xl mx-auto">Contact our wedding specialist today to discuss your dream wedding at SriBudaya Resort</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="mailto:info@sribudayaresort.com" className="bg-white text-amber-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition flex items-center justify-center" data-aos="zoom-in" data-aos-delay="1500">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              Email Us
            </a>
            <a href="tel:+1234567890" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition flex items-center justify-center" data-aos="zoom-in" data-aos-delay="1600">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                ></path>
              </svg>
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wedding;
