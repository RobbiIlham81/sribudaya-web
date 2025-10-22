import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote, Camera, Eye } from "lucide-react";
import LazyDiv from "./misc/LazyDiv";
import { Fancybox } from "@fancyapps/ui";

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

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

  // Data Gallery Resort
  const galleryData = {
    description: {
      title: "Pengalaman Memukau",
      subtitle: "Jelajahi Keindahan Resort Kami",
      text: "Rasakan keindahan memukau di resort kami. Dari akomodasi mewah hingga fasilitas berkelas dunia, setiap sudut menghadirkan kisah tentang kenyamanan dan keanggunan. Tim kami yang berdedikasi siap memastikan setiap momen masa inap Anda penuh dengan kehangatan serta pelayanan yang istimewa.",
      highlights: ["Akomodasi Mewah", "Fasilitas Kelas Dunia", "Staff Profesional", "Pemandangan Alam"],
    },
    images: [
      {
        id: 1,
        src: "/images/about/coffeshop.jpg",
        alt: "coffe shop sribudaya yang Instagramable",
        category: "Accommodations",
        title: "Coffee Shop",
        position: "top-left",
      },
      {
        id: 2,
        src: "/images/about/hall.jpeg",
        alt: "Aula serbaguna. Bisa dipakai untuk meeting atau untuk acara pernikahan",
        category: "Facilities",
        title: "Hall",
        position: "bottom-center-wide",
      },
      {
        id: 3,
        src: "/images/about/resepsionis.jpg",
        alt: "Pelayanan resepsionis profesional dan ramah",
        category: "Staff",
        title: "Receptionist",
        position: "left",
      },
      {
        id: 4,
        src: "/images/about/kolam.jpg",
        alt: "Kolam renang bersih dan nyaman di sribudaya resort. Cocok untuk anak-anak dan dewasa",
        category: "swimming pool",
        title: "Swimming pool",
        position: "right-top",
      },
      {
        id: 5,
        src: "/images/about/indoor.jpeg",
        alt: "Foto bagian dalam Sribudaya coffee shop",
        category: "Dining",
        title: "indoor coffeshop",
        position: "bottom-left",
      },
      {
        id: 6,
        src: "/images/about/about2.jpg",
        alt: "Pemandangan indah dari Sribudaya Resort",
        category: "View",
        title: "Amazing View",
        position: "right-bottom",
      },
      {
        id: 7,
        src: "/images/booking/wedding-slide3.jpg",
        alt: "Wedding hall mewah untuk hari spesial pengantin",
        category: "Accommodations",
        title: "Wedding Hall",
        position: "bottom-right",
      },
      {
        id: 8,
        src: "/images/about/homestay.jpg",
        alt: "Sribudaya homestay. Cocok untuk staycation anda dan keluarga",
        category: "Facilities",
        title: "Homestay",
        position: "left-bottom",
      },
    ],
  };

  // Data testimonial
  const testimonials = [
    {
      id: 1,
      name: "Riskia Nanda",
      location: "Aceh, Indonesia",
      rating: 5,
      comment: "Lokasi yang sangat strategis, makanannya enak enak ditambah design coffeshopnya yang sangat estetik, apalagi pempeknya best bgt, next aku nginap sini deh penasaran bgt",
      image: "/testimonial/cewe1.png",
      stayType: "CoffeShop",
    },
    {
      id: 2,
      name: "Indra",
      location: "Aceh, Indonesia",
      rating: 5,
      comment:
        "Tempat yg baru dan masih masuk dalam kawasan perkotaan, namun dengan  area yg sangat luas rasanya seperti jauh dari kebisingan kota, cocok utk tamu jauh yg ingin staycation, selain itu terdapat musholla, kolam ikan, parkiran luas, hall, cafe, dan juga kolam renang, complete dech",
      image: "/testimonial/cowo1.png",
      stayType: "Homestay",
    },
    {
      id: 3,
      name: "Haryanti Huthoria",
      location: "Aceh, Indonesia",
      rating: 5,
      comment:
        "pengalaman menginap di sribudaya resort selama 2 malam bersama keluarga tercinta. untuk konsep resortnya sungguh baik, mulai dari bangunan serta interiornya didalamnya sangat menarik. Tersedia kolam berenang dan cafe disini jadi tidak perlu kemana mana lagi bisa staycation disini. Sribudaya juga menyediakan sarapan pagi, bisa request di antar ke kamar atau makan di restaurant langsung. Ini saya request untuk di antar ke kamar, untuk menunya setiap hari berbeda dan makanannya cocok dilidah saya.",
      image: "/testimonial/cewe1.png",
      stayType: "Family Resort",
    },
    {
      id: 4,
      name: "Teuku vedi",
      location: "Aceh, Indonesia",
      rating: 5,
      comment: "Tempatnya sangat nyaman. Makanannya enak2. Pelayanannya cepat. Tempatnya bersih. Sangat cocok bawa keluarga. Pengalaman baru untuk menginap dan santai  di sini. Pasti akan sering kembali kesini.",
      image: "/testimonial/cowo1.png",
      stayType: "Resort",
    },
    {
      id: 5,
      name: "Nur Asiah",
      location: "Jakarta, Indonesia",
      rating: 5,
      comment: "Pesen makan di sribudaya ayam cobek bakar paling enak di Banda aceh. Udah rasa sambal dimanapun ngga ada lawan selain di sribudaya. Kemarin sampe bawa pulang untuk oleh2 bawa ke jakarta, tempat nya nyaman banget",
      image: "/testimonial/cewe1.png",
      stayType: "CoffeShop",
    },
    {
      id: 6,
      name: "Sayed Ulil Aqbar",
      location: "Aceh, Indonesia",
      rating: 5,
      comment: "Pelayanannya sangat bagus dan karyawannya sangat ramah dan pengantaran makanan tidak lama",
      image: "/testimonial/cowo1.png",
      stayType: "Profesional staff",
    },
    {
      id: 7,
      name: "Kintan Kirani",
      location: "Aceh, Indonesia",
      rating: 5,
      comment: "Bulan lalu temen aku nikah disini, ga espek bakal secakep itu view nya, ditambah nginap juga semalam di sini sangat oke bgt!!!!",
      image: "/testimonial/cewe1.png",
      stayType: "Wedding Hall",
    },
  ];

  // Auto slide functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => <Star key={i} className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />);
  };

  return (
    <div className="">
      {/* Gallery Section */}

      <section className=" md:py-20  overflow-hidden mt-16 animate-fade-up">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Gallery Layout */}
          <div className="relative ">
            {/* Desktop Layout */}
            <LazyDiv className="hidden lg:block" placeholderHeight="1000px" threshold={0.5}>
              <div className="hidden lg:block">
                <div className="relative min-h-[900px]">
                  {/* Center Description - Fixed Position */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-12 max-w-2xl text-center border border-gray-200">
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-100 rounded-full mb-8 animate-jump-in">
                        <Camera className="w-10 h-10 text-amber-600" />
                      </div>
                      <h3 className="text-2xl text-amber-600 font-semibold mb-6 animate-fade-right">
                        {galleryData.description.subtitle}
                      </h3>
                      <h2 className="text-5xl font-bold text-amber-700 mb-4 animate-fade-left">
                        {galleryData.description.title}
                      </h2>
                      <p className="text-gray-600 leading-relaxed mb-8 text-lg animate-fade-right">
                        {galleryData.description.text}
                      </p>
                      <div className="grid grid-cols-2 gap-6">
                        {galleryData.description.highlights.map(
                          (highlight, index) => (
                            <div
                              key={index}
                              className="flex items-center text-base animate-jump-in"
                            >
                              <div className="w-3 h-3 bg-amber-600 rounded-full mr-4"></div>
                              <span className="text-gray-700 font-medium">
                                {highlight}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Top Left - Large 0*/}
                  <a className="absolute top-0 left-0 w-80 h-60 group cursor-pointer animate-jump-in" href={galleryData.images[0].src} data-fancybox="about-gallery" data-caption={galleryData.images[0].alt}>
                    <div className="relative h-full rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                      <img
                        src={galleryData.images[0].src}
                        alt={galleryData.images[0].alt}
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop";
                        }}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                        <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <Eye className="w-10 h-10 text-white mb-3 mx-auto" />
                          <p className="text-white text-lg font-semibold text-center">{galleryData.images[0].title}</p>
                        </div>
                      </div>
                    </div>
                  </a>

                  {/* Top Center wide - Optional 100*/}
                  <a
                    className="absolute -top-16 left-1/3 transform -translate-x-1/2 w-[28rem] h-60 group cursor-pointer animate-jump-in animate-delay-100"
                    href={galleryData.images[7].src}
                    data-fancybox="about-gallery"
                    data-caption={galleryData.images[7].alt}
                  >
                    <div className="relative h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                      <img
                        src={galleryData.images[7].src}
                        alt={galleryData.images[7].alt}
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop";
                        }}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                        <div className="transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <Eye className="w-6 h-6 text-white mb-1 mx-auto" />
                          <p className="text-white text-lg font-semibold text-center px-2">{galleryData.images[7].title}</p>
                        </div>
                      </div>
                    </div>
                  </a>

                  {/* Top Right - Large 200*/}
                  <a className="absolute top-0 right-0 w-80 h-60 group cursor-pointer animate-jump-in animate-delay-200" href={galleryData.images[2].src} data-fancybox="about-gallery" data-caption={galleryData.images[2].alt}>
                    <div className="relative h-full rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                      <img
                        src={galleryData.images[2].src}
                        alt={galleryData.images[2].alt}
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop";
                        }}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                        <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <Eye className="w-10 h-10 text-white mb-3 mx-auto" />
                          <p className="text-white text-lg font-semibold text-center">{galleryData.images[2].title}</p>
                        </div>
                      </div>
                    </div>
                  </a>

                  {/* Right Side - tall 300*/}
                  <a className="absolute top-72 right-0 w-64 h-80 group cursor-pointer animate-jump-in animate-delay-300" href={galleryData.images[5].src} data-fancybox="about-gallery" data-caption={galleryData.images[5].alt}>
                    <div className="relative h-full rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:translate-x-2">
                      <img
                        src={galleryData.images[5].src}
                        alt={galleryData.images[5].alt}
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop";
                        }}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                        <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <Eye className="w-7 h-7 text-white mb-2 mx-auto" />
                          <p className="text-white text-lg font-semibold text-center px-2">{galleryData.images[5].title}</p>
                        </div>
                      </div>
                    </div>
                  </a>

                  {/* Bottom Right - Large 400*/}
                  <a className="absolute bottom-0 right-0 w-80 h-60 group cursor-pointer animate-jump-in animate-delay-[400ms]" href={galleryData.images[6].src} data-fancybox="about-gallery" data-caption={galleryData.images[6].alt}>
                    <div className="relative h-full rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:translate-y-2">
                      <img
                        src={galleryData.images[6].src}
                        alt={galleryData.images[6].alt}
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=400&fit=crop";
                        }}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                        <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <Eye className="w-10 h-10 text-white mb-3 mx-auto" />
                          <p className="text-white text-lg font-semibold text-center">{galleryData.images[6].title}</p>
                        </div>
                      </div>
                    </div>
                  </a>

                  {/* Bottom Center wide - Optional 500*/}
                  <a
                    className="absolute -bottom-16 left-1/3 transform -translate-x-1/2 w-[28rem] h-60 group cursor-pointer animate-jump-in animate-delay-[500ms]"
                    href={galleryData.images[1].src}
                    data-fancybox="about-gallery"
                    data-caption={galleryData.images[1].alt}
                  >
                    <div className="relative h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:translate-y-1">
                      <img
                        src={galleryData.images[1].src}
                        alt={galleryData.images[1].alt}
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop";
                        }}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                        <div className="transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <Eye className="w-6 h-6 text-white mb-1 mx-auto" />
                          <p className="text-white text-lg font-semibold text-center px-2">{galleryData.images[1].title}</p>
                        </div>
                      </div>
                    </div>
                  </a>

                  {/* Bottom Left - Large 600*/}
                  <a className="absolute bottom-0 left-0 w-80 h-60 group cursor-pointer animate-jump-in animate-delay-[600ms]" href={galleryData.images[4].src} data-fancybox="about-gallery" data-caption={galleryData.images[4].alt}>
                    <div className="relative h-full rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:translate-y-2">
                      <img
                        src={galleryData.images[4].src}
                        alt={galleryData.images[4].alt}
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop";
                        }}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                        <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <Eye className="w-10 h-10 text-white mb-3 mx-auto" />
                          <p className="text-white text-lg font-semibold text-center">{galleryData.images[4].title}</p>
                        </div>
                      </div>
                    </div>
                  </a>

                  {/* Left Side - Tall 700*/}
                  <a className="absolute top-72 left-0 w-64 h-80 group cursor-pointer animate-jump-in animate-delay-[700ms]" href={galleryData.images[3].src} data-fancybox="about-gallery" data-caption={galleryData.images[3].alt}>
                    <div className="relative h-full rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:translate-x-2">
                      <img
                        src={galleryData.images[3].src}
                        alt={galleryData.images[3].alt}
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop";
                        }}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                        <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <Eye className="w-7 h-7 text-white mb-2 mx-auto" />
                          <p className="text-white text-lg font-semibold text-center px-2">{galleryData.images[3].title}</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </LazyDiv>

            {/* Mobile & Tablet Layout */}
            <LazyDiv>
              <div className="lg:hidden animate-fade-up">
                {/* Description Section */}
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6">
                    <Camera className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="subtitle mb-6">{galleryData.description.subtitle}</h3>
                  <h2 className="page-title mb-4">{galleryData.description.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">{galleryData.description.text}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                    {galleryData.description.highlights.map(
                      (highlight, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-amber-600 rounded-full mr-2"></div>
                          <span className="text-gray-700">{highlight}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Mobile Gallery Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {galleryData.images.slice(0, 6).map((image) => (
                    <a key={image.id} className="group cursor-pointer" href={image.src} data-fancybox="about-gallery-mobile" data-caption={image.alt}>
                      <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                        <img
                          src={image.src}
                          alt={image.alt}
                          onError={(e) => {
                            e.target.src = "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=400&fit=crop";
                          }}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                          <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <Eye className="w-6 h-6 text-white mb-1 mx-auto" />
                            <p className="text-white text-xs font-medium text-center px-2">{image.title}</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* View More Button */}
                {/* <div className="text-center mt-8">
                  <button
                    onClick={() => openModal(galleryData.images[0])}
                    className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 inline-flex items-center"
                  >
                    <Camera className="w-5 h-5 mr-2" />
                    View All Photos
                  </button>
                </div> */}
              </div>
            </LazyDiv>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}

      <section className="py-16 bg-gradient-to-br  overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header Section */}
          <LazyDiv>
            <div className="text-center mb-16 animate-fade-up">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6">
                <Quote className="w-8 h-8 text-amber-600" />
              </div>
              <h2 className="page-title animate-fade-up">Penilaian Dari Para Tamu</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-up">Inilah mengapa banyak para wisatawan memilih resort dan homestay kami untuk liburan dan detinasi mereka</p>
            </div>
          </LazyDiv>

          {/* Testimonial Slider */}
          <LazyDiv>
            <div className="relative animate-fade-up">
              {/* Main Slider Container */}
              <div className="relative overflow-hidden rounded-2xl">
                <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }} onMouseEnter={() => setIsAutoPlay(false)} onMouseLeave={() => setIsAutoPlay(true)}>
                  {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="w-full flex items-center justify-center flex-shrink-0">
                      <div className="bg-white mx-4 rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                        <div className="p-8 md:p-12">
                          {/* Quote Icon */}
                          <div className="mb-6">
                            <Quote className="w-12 h-12 text-amber-400" />
                          </div>

                          {/* Rating */}
                          <div className="flex items-center mb-6">
                            <div className="flex space-x-1 mr-4">{renderStars(testimonial.rating)}</div>
                            <span className="text-gray-600 text-sm">{testimonial.rating}/5 Stars</span>
                          </div>

                          {/* Testimonial Content */}
                          <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">"{testimonial.comment}"</blockquote>

                          {/* Customer Info */}
                          <div className="flex items-center justify-between flex-wrap gap-4">
                            <div className="flex items-center space-x-4">
                              <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                onError={(e) => {
                                  e.target.src = "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face";
                                }}
                                className="w-16 h-16 rounded-full object-cover border-4 border-amber-100"
                              />
                              <div>
                                <h4 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h4>
                                <p className="text-gray-600">{testimonial.location}</p>
                              </div>
                            </div>

                            <div className="bg-amber-50 px-4 py-2 rounded-full">
                              <span className="text-amber-700 font-medium text-sm">
                                {testimonial.stayType}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-amber-50 text-gray-700 hover:text-amber-600 p-3 rounded-full shadow-lg border border-gray-200 transition-all duration-300 z-10 group"
              >
                <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-amber-50 text-gray-700 hover:text-amber-600 p-3 rounded-full shadow-lg border border-gray-200 transition-all duration-300 z-10 group"
              >
                <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </LazyDiv>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-3 mt-4 md:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-amber-600 scale-125"
                    : "bg-gray-300 hover:bg-amber-400"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
