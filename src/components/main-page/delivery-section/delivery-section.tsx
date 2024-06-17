"use client";

import ImgMoto from "@/public/images/delivery-section/icon-moto.svg";
import ImgWatch from "@/public/images/delivery-section/watch.png";
import ImgCar from "@/public/images/delivery-section/car.svg";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export function DeliverySection() {
  return (
    <section className="bg-[url(/images/delivery-section/bg.jpg)]">
      <div
        className="max-w-maxWidth mx-auto relative flex flex-col justify-center py-0
                        sm:py-12"
      >
        <div className="flex justify-center">
          <h2
            className="my-12 py-6 px-2 text-[#FF0000] text-5xl font-black
                     bg-[rgba(255,255,255,0.7)] uppercase flex flex-col gap-10 items-center
                        sm:flex-row sm:text-7xl sm:px-10 md:px-16"
          >
            Доставка <Image src={ImgMoto} alt="" />
          </h2>
        </div>
        <div className="inline-block text-center text-2xl font-light uppercase mt-10">
          <span>шашлыка, а также остальных блюд</span>
          <div className="font-semibold text-gray-600">
            со скидкой до{" "}
            <span className="text-[#FF0000] text-6xl font-black">30%</span>
          </div>
        </div>
        <div
          className="flex flex-col gap-16 justify-between items-center max-w-[700px] mx-auto my-16
                        sm:flex-row"
        >
          <div
            className="text-center font-bold text-2xl uppercase
                          sm:text-left"
          >
            Доставим по городу <br />в течение{" "}
            <span className="text-red-700">часа</span>
            <Image
              src={ImgWatch}
              alt=""
              className="mx-auto block 
                                                    sm:ml-12 sm:mr-auto"
            />
          </div>
          <div>
            <Button
              as={Link}
              href="/menu-out-side"
              className=" bg-[#EC1C20] font-normal text-white text-lg px-5 shadow-md py-4"
              endContent={<Image src={ImgCar} alt="" />}
            >
              Заказать online
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
