"use client";

import ImgMoto from "@/public/images/delivery-section/icon-moto.svg";
import ImgWatch from "@/public/images/delivery-section/watch.png";
import ImgCar from "@/public/images/delivery-section/car.svg";
import { Button } from "@nextui-org/react";
import Image from "next/image";

export function DeliverySection() {
  return (
    <section className="bg-[url(/images/delivery-section/bg.jpg)]">
      <div className="max-w-maxWidth mx-auto relative flex flex-col justify-center py-12">
        <div className="flex justify-center">
          <h2
            className="my-12 py-6 px-16 text-[#FF0000] text-7xl font-black
                     bg-[rgba(255,255,255,0.7)] uppercase flex gap-10 items-center"
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
        <div className="flex flex-row gap-16 justify-between items-center max-w-[700px] mx-auto my-16">
          <div className="font-bold text-2xl uppercase">
            Доставим по городу <br />в течение{" "}
            <span className="text-red-700">часа</span>
            <Image src={ImgWatch} alt="" className="block ml-12" />
          </div>
          <div>
            <Button
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
