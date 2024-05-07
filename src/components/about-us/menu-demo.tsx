"use client";

import Image from "next/image";
import ImgCesarChicken from "@/public/images/menu/cesar_chicken.webp";
import ImgSalatTeplyi from "@/public/images/menu/salat-teplyi.webp";
import ImgArrow from "@/public/images/about-us/arrow.svg";
import ImgIconCoockie from "@/public/images/about-us/icon-coockie.svg";

import { useCallback, useRef, useState } from "react";
import { useSwiper, Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { cn } from "@/lib/utils";
import { Button } from "@nextui-org/react";

export function MenuDemo() {
  return (
    <div className="flex flex-row gap-8">
      <div className="w-[500px]">
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          className="mySwiper"
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          <SwiperSlide className="mySwiper flex">
            <div className="flex flex-col max-w-[300px] w-full border">
              <div className="">
                <Image src={ImgCesarChicken} alt="" />
              </div>
              <div className="p-2">
                <div className="font-semibold my-3 text-center">
                  Салат «Цезарь» с курицей
                </div>
                <div className="text-sm text-gray-500 mb-4">
                  яйцо, куриное филе, микс салата, черри, соус цезарь, пармезан,
                  специи
                </div>
                <div className="flex flex-row justify-between items-end mt-auto">
                  <span className="font-semibold text-gray-500">250 гр</span>
                  <span className="text-xl font-semibold text-red-700">
                    380 ₽
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mySwiper flex">
            <div className="flex flex-col max-w-[300px] w-full border">
              <div className="">
                <Image src={ImgSalatTeplyi} alt="" />
              </div>
              <div className="p-2">
                <div className="font-semibold my-3 text-center">
                  Салат «Тёплый» из баклажанов
                </div>
                <div className="text-sm text-gray-500 mb-4">
                  баклажаны, кинза, микс салата, черри, гранат, кунжут, соус
                  чили-сладкий
                </div>
                <div className="flex flex-row justify-between items-end mt-auto">
                  <span className="font-semibold text-gray-500">300 гр</span>
                  <span className="text-xl font-semibold text-red-700">
                    420 ₽
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mySwiper flex">
            <div className="flex flex-col max-w-[300px] w-full border">
              <div className="">
                <Image src={ImgCesarChicken} alt="" />
              </div>
              <div className="p-2">
                <div className="font-semibold my-3 text-center">
                  Салат «Цезарь» с курицей
                </div>
                <div className="text-sm text-gray-500 mb-4">
                  яйцо, куриное филе, микс салата, черри, соус цезарь, пармезан,
                  специи
                </div>
                <div className="flex flex-row justify-between items-end mt-auto">
                  <span className="font-semibold text-gray-500">250 гр</span>
                  <span className="text-xl font-semibold text-red-700">
                    380 ₽
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mySwiper flex">
            <div className="flex flex-col max-w-[300px] w-full border">
              <div className="">
                <Image src={ImgSalatTeplyi} alt="" />
              </div>
              <div className="p-2">
                <div className="font-semibold my-3 text-center">
                  Салат «Тёплый» из баклажанов
                </div>
                <div className="text-sm text-gray-500 mb-4">
                  баклажаны, кинза, микс салата, черри, гранат, кунжут, соус
                  чили-сладкий
                </div>
                <div className="flex flex-row justify-between items-end mt-auto">
                  <span className="font-semibold text-gray-500">300 гр</span>
                  <span className="text-xl font-semibold text-red-700">
                    420 ₽
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* <div className={cn("dots")} id="dots-block" data-slider-dots></div> */}
      </div>
      <div className="flex flex-col ml-20">
        <div className="relative flex items-start gap-3">
          <Button
            isIconOnly
            variant="light"
            className="rounded-full border border-gray-300 h-14 w-14"
          >
            <Image src={ImgArrow} alt="" />
          </Button>
          <Button
            isIconOnly
            variant="light"
            className="rounded-full border border-gray-300 h-14 w-14"
          >
            <Image src={ImgArrow} alt="" className="scale-x-[-1]" />
          </Button>
        </div>
        <div className="mt-20">
          <span className="block"></span>
          <Button
            className=" bg-[#EC1C20] font-normal text-white text-lg px-5 shadow-md my-4"
            endContent={<Image src={ImgIconCoockie} alt="" />}
          >
            Смотреть все меню
          </Button>
        </div>
      </div>
    </div>
  );
}
