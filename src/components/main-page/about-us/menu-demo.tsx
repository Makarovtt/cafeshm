"use client";

import Image from "next/image";
import ImgCesarChicken from "@/public/images/menu/cesar_chicken.webp";
import ImgSalatTeplyi from "@/public/images/menu/salat-teplyi.webp";
import ImgArrow from "@/public/images/about-us/arrow.svg";
import ImgIconCoockie from "@/public/images/about-us/icon-coockie.svg";

import { useCallback, useEffect, useRef, useState } from "react";
import { useSwiper, Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { cn } from "@/lib/utils";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { Domain } from "domain";
import axios from "axios";

const urlGetMenuMainPage = `https://server.cafeshm.ru/get/get_menu_main_page.php`;

type MenuItem = {
  id: string;
  title: string;
  picture: string;
  price: string;
  description: string;
  portion: string;
  unit: string;
};
export function MenuDemo() {
  const [dataMenu, setDataMenu] = useState<MenuItem[]>();

  useEffect(() => {
    axios
      .get(urlGetMenuMainPage)
      .then((res) => {
        setDataMenu(res.data);
      })
      .catch((error) => {
        console.log("catch error: " + error);
      });
  }, []);

  return (
    <div
      className="flex gap-8 flex-col mx-auto w-[320px] sm:w-[400px] md:w-[550px] 1000px:w-[700px] 2xl:w-[500px]
                    "
    >
      <div className="">
        <Swiper
          slidesPerView={1}
          breakpoints={{
            1536: {
              slidesPerView: 2,
            },
            500: {
              slidesPerView: 2,
            },
            767: {
              slidesPerView: 3,
            },
            900: {
              slidesPerView: 4,
            },
          }}
          spaceBetween={10}
          grabCursor={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          navigation={{
            nextEl: ".swiper-button-next-2",
            prevEl: ".swiper-button-prev-2",
          }}
        >
          {dataMenu &&
            dataMenu.map((item) => {
              return (
                <SwiperSlide className="mySwiper flex" key={item.id}>
                  <div className="flex flex-col max-w-[300px] w-full border ">
                    <div className="max-w-[300px] w-full h-[200px] relative">
                      <Image
                        src={item.picture}
                        fill
                        alt=""
                        className=" object-cover w-full h-full"
                      />
                    </div>
                    <div className="p-2">
                      <div className="font-semibold my-3 text-center">
                        {item.title}
                      </div>
                      <div className="text-sm text-gray-500 mb-4 min-h-[50px]">
                        {item.description}
                      </div>
                      <div className="flex flex-row justify-between items-end mt-auto">
                        <span className="font-semibold text-gray-500">
                          {item.portion} {item.unit}
                        </span>
                        <span className="text-xl font-semibold text-red-700">
                          {item.price} ₽
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>

        {/* <div className={cn("dots")} id="dots-block" data-slider-dots></div> */}
      </div>
      <div
        className="flex flex-col ml-5 items-center justify-between
                      md:flex-row"
      >
        <div className="relative flex items-start gap-3">
          <Button
            isIconOnly
            variant="light"
            className="swiper-button-prev-2 rounded-full border border-gray-300 h-14 w-14"
          >
            <Image src={ImgArrow} alt="" />
          </Button>
          <Button
            isIconOnly
            variant="light"
            className="swiper-button-next-2 rounded-full border border-gray-300 h-14 w-14"
          >
            <Image src={ImgArrow} alt="" className="scale-x-[-1]" />
          </Button>
        </div>
        <div className="mt-4">
          <span className="block"></span>
          <Button
            as={Link}
            href="/menu"
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
