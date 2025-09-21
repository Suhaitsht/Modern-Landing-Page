import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../App.css";
// import required modules
import { Navigation } from "swiper/modules";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { testimonials } from "../../utils/data";

export default function TestimonialsSection() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto" id="testimonials">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold md:text-4xl mb-4">
          What our happy Client says
        </h2>
        <p className="text-gray-600">
          {" "}
          Things that make it the best place to start trading
        </p>
      </div>
      {/* Testimonials cards */}
      <div className="relative">
        {/* swiper cards */}
        <Swiper
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Navigation]}
          className="testimonial-swiper md:mb-12"
        >
          {testimonials.map((data, index) => (
            <SwiperSlide key={index} className="h-full md:py-12 sm:py-4">
              <div className="text-center bg-white p-4 rounded-lg shadow-md h-full flex-col">
                <div className="w-24 h-24 mx-auto">
                  <img
                    src={data.image}
                    alt={data.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="flex justify-center items-center mb-2">
                  {[...Array(5)].map((_, starIndex) => (
                    <span key={starIndex} className="text-yellow-400">
                      🌟
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-3">{data.name}</h3>
                <p className="text-gray-600">{data.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Navigation button */}
        <div className="flex justify-center gap-4 mt-8">
          <button className=" swiper-button-next-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white  transition-all cursor-pointer">
            <BsChevronLeft className="size-6" />
          </button>
          <button className=" swiper-button-prev-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all cursor-pointer">
            <BsChevronRight className="size-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
