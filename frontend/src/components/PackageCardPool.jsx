// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../swiper-styles.css";

import { Autoplay, Pagination, Parallax } from "swiper/modules";

const PackageCardPool = () => {
  const PoolSlide = [
    {
      id: 1,
      src: "/images/booking/pool/kolam0.JPG",
      alt: "kolam0.jpg",
      title: "Pintu Masuk Kolam Renang",
      desc: "Desain modern bergaya mediterania dengan dinding putih dan lengkungan khas.",
    },
    {
      id: 2,
      src: "/images/booking/pool/kolam1.jpg",
      alt: "kolam1.jpg",
      title: "Area Kolam Renang",
      desc: "Kolam luas dengan suasana tenang dan payung berwarna hangat untuk bersantai.",
    },
    {
      id: 3,
      src: "/images/booking/pool/kolam2.JPG",
      alt: "kolam2.jpg",
      title: "Area Santai Tepi Kolam",
      desc: "Area duduk nyaman bergaya minimalis, ideal untuk bersantai atau menikmati hidangan ringan.",
    },
    {
      id: 4,
      src: "/images/booking/pool/kolam3.jpg",
      alt: "kolam3.jpg",
      title: "Detail Kolam & Area Duduk",
      desc: "Perpaduan warna biru dan oranye bata menghadirkan kesan segar dan elegan.",
    },
  ];

  return (
    <div className="w-full overflow-hidden rounded-lg">
      <div className="wrapper ">
        <div className="hero-slides h-[30rem] relative">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 5000,
              pauseOnMouseEnter: true,
            }}
            parallax={true}
            speed={1800}
            loop="true"
            modules={[Pagination, Autoplay, Parallax]}
            className="mySwiper "
          >
            {PoolSlide.map((slide, idx) => (
              <SwiperSlide key={idx} className="group">
                <img
                  className="w-full h-full object-cover transition-transform transform duration-700 group-hover:scale-110"
                  src={slide.src}
                  alt={slide.alt}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute left-0 bottom-0  text-left p-5 md:p-8">
                  <h1
                    className="page-title !text-white !mb-2"
                    data-swiper-parallax="-1200"
                  >
                    {slide.title}
                  </h1>
                  <p
                    className="page-title-desc w-full md:w-2/3 text-white "
                    data-swiper-parallax="-600"
                  >
                    {slide.desc}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PackageCardPool;