import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LazyDiv from "./misc/LazyDiv";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "../swiper-styles.css";

const Home = () => {
  const images = ["/images/home/home4.jpg", "/images/home/home1.jpg", "/images/home/home2.jpg", "/images/home/home3.jpg", "/images/home/home5.jpeg", "/images/home/home6.jpeg"];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 7000);

    return () => clearInterval(interval);
  }, [images.length]);

  // const goToPrevious = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? images.length - 1 : prevIndex - 1
  //   );
  // };

  // const goToNext = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === images.length - 1 ? 0 : prevIndex + 1
  //   );
  // };

  return (
    <section id="homepage" className="mb-36">
      {/* Hero dengan slider */}
      <section className="relative h-[80vh] bg-cover bg-center transition-all duration-[2000ms] ease-in-out" style={{ backgroundImage: `url(${images[currentIndex]})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white px-6 animate-fade-up">
            <h1 className="title drop-shadow-lg">Selamat Datang di Sribudaya Resort & Homestay</h1>
            <p className="mt-1 title-desc text-white drop-shadow-md">
              Perpaduan alam dan desain bangunan yang menarik membuat Sribudaya resort <br /> jadi pilihan liburan anda
            </p>
            <div className="mt-8">
              <Link to="/booking" className="terracotaa-btn text-white px-6 py-3 rounded-full shadow-md transition">
                Booking Sekarang
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <LazyDiv>
        <section className="px-12 md:px-28 my-20">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            {/* Bagian teks kiri */}
            <div className="text-left animate-fade-right">
              <p className="subtitle">About</p>
              <h2 className="page-title">
                Sribudaya <br /> Resort
              </h2>
              <div className="w-16 h-[3px] bg-amber-600 mb-6"></div>
              <p className="mb-8 page-title-desc">
                Sribudaya Resort dirancang untuk memenuhi kebutuhan para wisatawan masa kini. Kami memahami bahwa setiap perjalanan memiliki keunikan tersendiri, dan telah dengan cermat menggabungkan kehangatan rumah yang tenang dengan
                kemewahan hotel.
              </p>
              <Link to="/about" className="terracotaa-btn text-white px-6 py-3 rounded-full shadow-md  transition">
                Know More
              </Link>
            </div>

            {/* Bagian gambar kanan */}
            <div className="relative max-w-md mx-auto animate-fade-left">
              {/* Border dekoratif di belakang */}
              <div className="absolute top-6 right-6 w-full h-full rounded-lg border-[3px] border-amber-600 "></div>

              {/* Gambar utama */}
              <img src="./images/home/villa.jpg" alt="resort" className="relative z-10 rounded-lg shadow-lg w-full object-cover" />
            </div>
          </div>
        </section>
      </LazyDiv>
      {/* Our Rooms Section */}
      <section className="px-10 py-20 ">
        <LazyDiv>
          <div className="text-center mb-12 animate-fade-up">
            <p className="subtitle">Our Rooms</p>
            <h2 className="page-title mb-[1px]">
              Penginapan yang <br /> Modern dan Elegan
            </h2>
          </div>
        </LazyDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <LazyDiv>
            <div className="relative rounded-lg overflow-hidden shadow-lg animate-fade-right">
              <img src="/images/booking/family-suite01_compressed.jpg" alt="Family Suite" className="w-full h-72 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent"></div>
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-xl font-semibold">Family Suite</h3>
                <p className="mt-2">Suite luas kami menghadirkan kemewahan dan kenyamanan dengan tempat tidur mewah serta Wi-Fi gratis.</p>
                <div className="mt-4 flex space-x-4">
                  <Link to="/booking" className="terracotaa-btn px-4 py-2 rounded-md transition">
                    View Detail
                  </Link>
                </div>
              </div>
            </div>
          </LazyDiv>

          {/* Card 2 */}
          <LazyDiv>
            <div className="relative rounded-lg overflow-hidden shadow-lg animate-fade-left">
              <img src="/images/booking/family-studio02_compressed.jpg" alt="Family Studio" className="w-full h-72 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent"></div>
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-xl font-semibold">Family Studio</h3>
                <p className="mt-2">Suite luas kami menghadirkan kemewahan dan kenyamanan dengan tempat tidur mewah serta Wi-Fi gratis.</p>
                <div className="mt-4 flex space-x-4">
                  <Link to="/booking" className="terracotaa-btn px-4 py-2 rounded-md transition">
                    View Detail
                  </Link>
                </div>
              </div>
            </div>
          </LazyDiv>
        </div>
      </section>
      {/* Our Rooms Section ends*/}
      {/* Partner with section */}
      <section id="social-media" className="mb-8">
        <div className="sosmed-container flex justify-center items-center flex-col py-10 h-auto">
          {/* partner title */}
          <LazyDiv>
            <div className="text-center mb-12 animate-fade-up">
              <h2 className="subtitle">Partner Sites</h2>
              <h2 className="page-title">Anda dapat menemukan kami di situs pemesanan populer.</h2>
            </div>
          </LazyDiv>

          {/* Sosmed Icons */}
          <LazyDiv>
            <div className="social-media-icon h-auto flex justify-center items-center flex-wrap gap-10 px-5 md:gap-24">
              <div className="transition-transform duration-200 hover:scale-125 animate-jump-in animate-delay-100">
                <a href="https://www.booking.com/Share-DlyFsCQ" target="_blank" rel="noreferrer">
                  <img src="bookingcom.png" className="w-14 h-14 md:w-16 md:h-16" alt="bookingcom.png" />
                </a>
              </div>
              <div className="transition-transform duration-200 hover:scale-125 animate-jump-in animate-delay-200">
                <a
                  href="https://www.tiket.com/hotel/indonesia/sribudaya-resort-708001724122959169?checkin=2024-08-26&checkout=2024-08-27&adult=1&room=1&utm_external=organic&utm_medium=hotel_pdp%3Bshare_button"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="tiketcom.png" className="w-40 md:w-56 md:h-16" alt="bookingcom.png" />
                </a>
              </div>
              <div className="transition-transform duration-200 hover:scale-125 animate-jump-in animate-delay-300">
                <a
                  href="https://www.agoda.com/sribudaya-resort/hotel/aceh-id.html?checkin=2024-11-27&checkout=2024-11-28&los=1&rooms=1&adults=1&children=0&cid=1924241&searchrequestid=3609c674-949e-4cd3-a91a-8881b3b76029&tag=op7d38f94ba1cd458aa3f2c809cc92e169SG&ds=AQO4US3VCi%2FiSHag"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="agoda.png" className="w-auto h-16" alt="bookingcom.png" />
                </a>
              </div>
            </div>
          </LazyDiv>
        </div>
      </section>
      {/* Partner with section end */}
      {/* Amenities Section */}
      <section className="py-20 px-6 md:px-12 ">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Bagian teks kiri */}
          <LazyDiv>
            <div className="animate-fade-right">
              <p className="subtitle">Amenities</p>
              <h2 className="page-title">
                Pengalaman Lengkap
                <br /> untuk Anda
              </h2>
              <div className="absoulute left-0 w-1/4 h-[3px] bg-amber-600 mb-4"></div>
              <p className="page-title-desc">Nikmati keindahan dan kenyamanan dengan fasilitas resor eksklusif kami, yang dirancang untuk menciptakan pengalaman tak terlupakan bagi Anda.</p>
            </div>
          </LazyDiv>

          {/* Bagian icon kanan */}
          <LazyDiv>
            <div className="grid grid-cols-2 gap-6 animate-fade-left">
              {/* Wifi */}

              <div className="flex flex-col items-center justify-center  rounded-lg p-6 border-2 border-gray-400 shadow-sm hover:shadow-md transition">
                <FontAwesomeIcon icon="fa-solid fa-wifi" className="w-10 h-10 mb-3 text-amber-600" />
                <p className="text-gray-700 font-medium">Free Wifi</p>
              </div>

              {/* Furnishing */}
              <div className="flex flex-col items-center justify-center rounded-lg p-6 border-2 border-gray-400 shadow-sm hover:shadow-md transition">
                <FontAwesomeIcon icon="fa-solid fa-couch" className="w-10 h-10 mb-3 text-amber-600" />
                <p className="text-gray-700 font-medium">Fine Furnishing</p>
              </div>

              {/* Parking */}
              <div className="flex flex-col items-center justify-center  rounded-lg p-6 border-2 border-gray-400 shadow-sm hover:shadow-md transition">
                <FontAwesomeIcon icon="fa-solid fa-parking" className="w-10 h-10 mb-3 text-amber-600" />
                <p className="text-gray-700 font-medium">Private Parking</p>
              </div>

              {/* AC */}
              <div className="flex flex-col items-center justify-center  rounded-lg p-6 border-2 border-gray-400 shadow-sm hover:shadow-md transition">
                <FontAwesomeIcon icon="fa-solid fa-wind" className="w-10 h-10 mb-3 text-amber-600" />
                <p className="text-gray-700 font-medium">Air Conditioning</p>
              </div>
            </div>
          </LazyDiv>
        </div>
      </section>
      {/* Location Section */}
      <LazyDiv>
        <section id="location" className="py-20 px-5 md:px-20 h-[25rem] md:h-[40rem]">
          {/* location title */}

          <div className="text-center mb-12 animate-fade-up">
            <p className="subtitle">Location</p>
            <h2 className="page-title">Lokasi Resort Kami</h2>
          </div>

          {/* Google Maps */}
          <div className="w-full flex justify-center items-center h-full overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl ">
            <iframe
              title="google-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.3493821911425!2d95.32108227506707!3d5.5150531944649845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3040392caa277e19%3A0xd761fb6d5e2daf74!2sSribudaya%20resort%20%26%20homestay!5e0!3m2!1sen!2sid!4v1757240120401!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </LazyDiv>

      {/* location distance to important places slides*/}
      <section className="mt-32 px-6 md:px-12">
        <LazyDiv>
          <div className="wrapper">
            <h2 className="subtitle text-center animate-fade-right">Strategic Location</h2>
            <h1 className="page-title text-center animate-fade-left">Lokasi Populer Terdekat</h1>
            <p className="page-title-desc text-center animate-fade-right">Sribudaya Resort & Homestay - Akses Mudah ke Berbagai Destinasi Penting</p>
          </div>
        </LazyDiv>

        <div className="wrapper mt-10 flex justify-center items-center gap-5  flex-col md:flex-row ">
          <Swiper
            className="location-swiper"
            pagination={{
              dynamicBullets: true,
            }}
            autoplay={{ delay: 2000 }}
            loop={true}
            speed={3000}
            spaceBetween={20}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
            }}
            modules={[Pagination, Autoplay]}
          >
            <SwiperSlide className="bg-main">
              <div className="card border-2 border-gray-500 p-8 w-full rounded-lg shadow-lg min-h-[260px] md:min-h-[230px]">
                <h1 className="text-2xl font-bold mb-2">Pusat kota Banda Aceh, 5 KM</h1>
                <p className="page-title-desc !text-base  mb-5">
                  Pusat kota dengan berbagai fasilitas perdagangan, perkantoran, dan pusat kuliner khas Aceh. Mudah diakses melalui jalan utama dengan waktu tempuh sekitar 10 menit berkendara.
                </p>
                <a href="https://maps.app.goo.gl/RABqKz5fBiXkG8s58" className="terracotaa-btn" target="_blank" rel="noreferrer">
                  Visit map
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-main">
              <div className="card border-2 border-gray-500 p-8 w-full rounded-lg shadow-lg min-h-[260px] md:min-h-[230px]">
                <h1 className="text-2xl font-bold mb-2">Mesjid Raya Baiturrahman, 5 KM</h1>
                <p className="page-title-desc !text-base  mb-5">Masjid bersejarah dan ikonik Banda Aceh dengan arsitektur yang memukau. Simbol spiritual dan budaya Aceh yang wajib dikunjungi, mudah dijangkau dalam 13 menit perjalanan.</p>
                <a href="https://maps.app.goo.gl/UL6635rYHt7oUsgz7" className="terracotaa-btn" target="_blank" rel="noreferrer">
                  Visit map
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide className="bg-main">
              <div className="card border-2 border-gray-500 p-8 w-full rounded-lg shadow-lg min-h-[260px] md:min-h-[230px]">
                <h1 className="text-2xl font-bold mb-2">Bandara Sultan Iskandar Muda, 12 KM</h1>
                <p className="page-title-desc !text-base  mb-5">Bandara internasional utama Aceh yang melayani penerbangan domestik dan internasional. Perjalanan dari resort memakan waktu sekitar 20 menit melalui jalur lingkar kota.</p>
                <a href="https://maps.app.goo.gl/1q9f7TL25Eypazoy9" className="terracotaa-btn" target="_blank" rel="noreferrer">
                  Visit map
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-main">
              <div className="card border-2 border-gray-500 p-8 w-full rounded-lg shadow-lg min-h-[260px] md:min-h-[230px]">
                <h1 className="text-2xl font-bold mb-2">Pusat Wisata Tsunami Museum, 5 KM</h1>
                <p className="page-title-desc !text-base  mb-5">Museum Tsunami Aceh dan kawasan wisata sejarah terdekat. Lokasi strategis untuk mengunjungi destinasi wisata edukasi dan sejarah yang menawan di Banda Aceh.</p>
                <a href="https://maps.app.goo.gl/s3sP1AsGQC6nWFKv6" className="terracotaa-btn" target="_blank" rel="noreferrer">
                  Visit map
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-main">
              <div className="card border-2 border-gray-500 p-8 w-full rounded-lg shadow-lg min-h-[260px] md:min-h-[230px]">
                <h1 className="text-2xl font-bold mb-2">Pelabuhan Malahayati, 34 KM</h1>
                <p className="page-title-desc !text-base  mb-5">Pelabuhan utama Banda Aceh yang menghubungkan dengan berbagai destinasi di Sumatera dan luar pulau. Akses transportasi laut untuk perjalanan wisata dan bisnis.</p>
                <a href="https://maps.app.goo.gl/7K6R87m3EZfnM9Tq9" className="terracotaa-btn" target="_blank" rel="noreferrer">
                  Visit map
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-main">
              <div className="card border-2 border-gray-500 p-8 w-full rounded-lg shadow-lg min-h-[260px] md:min-h-[230px]">
                <h1 className="text-2xl font-bold mb-2">Pelabuhan Ulee Lheue, 10 KM</h1>
                <p className="page-title-desc !text-base  mb-5">
                  Pelabuhan wisata dan ferry menuju Pulau Weh (Sabang). Gerbang utama untuk menjelajahi keindahan bawah laut dan pantai eksotis Sabang dengan fasilitas transportasi laut yang lengkap.
                </p>
                <a href="https://maps.app.goo.gl/4NLvzB7jvFwFwYa97" className="terracotaa-btn" target="_blank" rel="noreferrer">
                  Visit map
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-main">
              <div className="card border-2 border-gray-500 p-8 w-full rounded-lg shadow-lg min-h-[260px] md:min-h-[230px]">
                <h1 className="text-2xl font-bold mb-2">RSUD dr. Zainoel Abidin, 7 KM</h1>
                <p className="page-title-desc !text-base  mb-5">Rumah sakit rujukan utama Provinsi Aceh dengan fasilitas medis lengkap dan pelayanan 24 jam. Menjadi jaminan keamanan kesehatan selama menginap.</p>
                <a href="https://maps.app.goo.gl/PmzqPoZGvWPUK5y8A" className="terracotaa-btn" target="_blank" rel="noreferrer">
                  Visit map
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Social media section */}
      <section id="social-media" className="mb-44 mt-20 px-6">
        <div className="sosmed-container flex justify-center items-center flex-col py-10 h-auto">
          {/* location title */}
          <LazyDiv>
            <div className="text-center mb-12 animate-fade-up">
              <h2 className="subtitle">Social Media</h2>
              <h2 className="page-title">Follow Akun Media Sosial Kami</h2>
            </div>
          </LazyDiv>

          {/* Sosmed Icons */}
          <div className="social-media-icon h-auto flex justify-center items-center text-6xl gap-14 md:gap-24">
            <LazyDiv>
              <div className="animate-jump-in animate-delay-100">
                <a href="https://instagram.com/sribudaya_resortaceh" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon className="transition-all duration-200 hover:scale-125 hover:text-amber-600 cursor-pointer" icon="fa-brands fa-instagram" />
                </a>
              </div>
            </LazyDiv>
            <LazyDiv>
              <div className="animate-jump-in animate-delay-200">
                <a href="https://www.tiktok.com/@sribudayaresortaceh" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon className="transition-all duration-200 hover:scale-125 hover:text-amber-600 cursor-pointer" icon="fa-brands fa-tiktok" />
                </a>
              </div>
            </LazyDiv>
            <LazyDiv>
              <div className="animate-jump-in animate-delay-300">
                <a href="https://wa.me/6282267878880" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon className="transition-all duration-200 hover:scale-125 hover:text-amber-600 cursor-pointer" icon="fa-brands fa-whatsapp" />
                </a>
              </div>
            </LazyDiv>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
