"use client";

import Image from "next/image";
import ImgArrow from "@/public/images/about-us/arrow.svg";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { DataGallery } from "../data/data-gallery";
import { UiMyButton } from "../ui/my-button";

export function GallerySection() {
  const [showModal, setShowModal] = useState<Boolean>(false);
  const [indexImage, setIndexImage] = useState<number>(1);

  function ShowModal(index: number) {
    setShowModal(true);
    setIndexImage(index);
  }
  function NextImgGallery() {
    if (indexImage + 1 < DataGallery.length) {
      setIndexImage(indexImage + 1);
    } else {
      setIndexImage(0);
    }
  }

  function PrevImgGallery() {
    if (indexImage == 0) {
      setIndexImage(DataGallery.length - 1);
    } else {
      setIndexImage(indexImage - 1);
    }
  }
  return (
    <section>
      <div className="max-w-maxWidth mx-auto py-20">
        <h2 className="border-l-4 border-red-700 pl-4 uppercase text-2xl font-normal mb-16">
          Галерея
        </h2>
        <div className="grid grid-cols-4 gap-5">
          {DataGallery?.map((item, index) => {
            return (
              <div
                className="max-h-[300px] bg-black cursor-zoom-in"
                key={index}
                onClick={() => ShowModal(index)}
              >
                <Image
                  src={item}
                  alt=""
                  className="object-cover w-full h-full hover:opacity-50 transition"
                />
              </div>
            );
          })}
        </div>
        <div className="my-10 flex justify-center items-center">
          <UiMyButton text="Все фотографии" />
        </div>
      </div>

      <div
        className={cn(
          "top-0 bottom-0 right-0 left-0 bg-[rgba(0,0,0,0.9)] z-50 flex items-center justify-center",
          showModal ? "fixed" : "hidden",
        )}
      >
        <div className="shadow-lg">
          <Image
            src={DataGallery[indexImage]}
            alt=""
            className="my-10 object-contain"
          />
        </div>
        <div
          className="absolute w-60 hover:bg-[rgba(0,0,0,0.5)] top-0 bottom-0 left-0 flex items-center justify-center
                          text-white tex-7xl font-black cursor-pointer transition opacity-30 hover:opacity-100"
          onClick={PrevImgGallery}
        >
          <Image src={ImgArrow} alt="" className="w-20 ml-5" />
        </div>

        <div
          className="absolute w-60 hover:bg-[rgba(0,0,0,0.5)] top-0 bottom-0 right-0 flex items-center justify-center
                          text-white tex-7xl font-black cursor-pointer transition opacity-30 hover:opacity-100"
          onClick={NextImgGallery}
        >
          <Image src={ImgArrow} alt="" className=" w-20 scale-x-[-1] mr-5" />
        </div>
        <div
          className=" absolute w-14 h-14 rounded-full bg-red-500 text-white font-normal top-10 right-20 cursor-pointer
                        flex items-center justify-center text-3xl hover:opacity-90"
          onClick={() => setShowModal(false)}
        >
          X
        </div>
        <div className="absolute flex justify-center items-center gap-3 bottom-24">
          {DataGallery?.map((item, index) => {
            let show = false;
            if (index == indexImage) show = true;
            return (
              <span
                key={index}
                className={cn(
                  "rounded-full w-6 h-6 block",
                  show ? "bg-white" : "bg-gray-500 ",
                )}
              ></span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
