// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../swiper-styles.css";

import { Autoplay, Pagination, Parallax } from "swiper/modules";

const PackageCardMeeting = () => {
  const MeetingSlide = [
    {
      id: 1,
      src: "/images/booking/meeting/meeting0.jpeg",
      alt: "meeting.jpg",
      title: "Meeting Room",
      desc: "Ruang rapat modern dengan desain minimalis, dilengkapi TV, papan tulis, dan pencahayaan alami yang nyaman.",
    },
    {
      id: 2,
      src: "/images/booking/meeting/meeting.jpeg",
      alt: "meeting0.jpg",
      title: "Meeting Room Setup",
      desc: "Tata ruang fleksibel untuk berbagai kebutuhan pertemuan, dari diskusi kecil hingga acara formal.",
    }
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
            {MeetingSlide.map((slide, idx) => (
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

export default PackageCardMeeting;
