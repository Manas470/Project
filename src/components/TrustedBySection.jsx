import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const logos = [
  "/partners/1.png",
  "/partners/2.png",
  "/partners/3.png",
  "/partners/4.png",
  "/partners/5.png",
  "/partners/6.png",
  "/partners/1.png",
  "/partners/2.png",
  "/partners/3.png",
];

const TrustedBySection = () => {
  return (
    <div className="bg-gray-900 py-10 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-indigo-400 mb-6 md:mb-8">
        Trusted by Industry Leaders
      </h2>
      <div className="max-w-6xl mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 10 },  // Small mobile
            480: { slidesPerView: 3, spaceBetween: 15 },  // Larger mobile
            640: { slidesPerView: 4, spaceBetween: 20 },  // Tablets
            768: { slidesPerView: 5, spaceBetween: 20 },  // Small desktops
            1024: { slidesPerView: 6, spaceBetween: 30 }, // Large screens
          }}
          className="px-4 sm:px-6"
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="bg-gray-800 p-3 sm:p-4 rounded-xl shadow-md flex items-center justify-center h-20 sm:h-24 w-24 sm:w-32">
                <img src={logo} alt="Trusted company logo" className="h-14 sm:h-16 w-auto object-contain" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TrustedBySection;
