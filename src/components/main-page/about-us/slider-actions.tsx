"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Button } from "@nextui-org/react";
import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";
import { arrImages } from "@/components/data/data-actions";

export function SliderActions() {
  return (
    <div
      className="max-w-xl relative mx-auto
                    lg:max-w-[1600px] lg:px-0 lg:mx-auto 
                    xl:mx-10
                    2xl:mx-auto 2xl:px-10"
    >
      {/* <h2 className="border-l-4 border-red-700 pl-4 uppercase text-2xl font-normal mb-9">
        Наши акции
      </h2> */}
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        // navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper2"
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {arrImages?.map((item, index) => {
          return (
            <SwiperSlide className="mySwiper2" key={item.id}>
              <div
                className="flex flex-col-reverse justify-center gap-7
                          lg:flex-row
                          2xl:flex-col-reverse"
              >
                <div className="text-center">
                  <h2
                    className="text-3xl font-semibold text-gray-600 mt-5 mb-5
                                  sm:text-5xl"
                  >
                    {item.title}
                  </h2>
                  <div
                    className="text-lg font-light text-left ml-0
                                xl:ml-12"
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  ></div>
                  <div className="mt-4">{item.ps}</div>
                </div>
                <img
                  src={item.img}
                  className="max-h-[700px] w-full max-w-[500px] mx-auto"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div
        className="swiper-button-prev absolute !top-auto bottom-[-40px] 2xl:!left-0
                      sm:!left-[-50px] sm:!top-[var(--swiper-navigation-top-offset,50%)]"
      >
        <Button isIconOnly variant="light">
          <ChevronLeftCircle />
        </Button>
      </div>
      <div
        className="swiper-button-next absolute !top-auto bottom-[-40px] 2xl:!right-0
                      sm:!right-[-50px] sm:!top-[var(--swiper-navigation-top-offset,50%)]"
      >
        <Button isIconOnly variant="light">
          <ChevronRightCircle />
        </Button>
      </div>
    </div>
  );
}
