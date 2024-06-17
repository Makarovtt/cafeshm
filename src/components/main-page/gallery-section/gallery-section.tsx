"use client";

import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import Image from "next/image";
import ImgArrow from "@/public/images/about-us/arrow.svg";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { DataGallery, DataGallery2 } from "../../data/data-gallery";
import { UiMyButton } from "../../ui/my-button";

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

  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  return (
    <section>
      <div
        className="max-w-maxWidth mx-auto py-20 px-3
                       sm:px-10"
      >
        <h2 className="border-l-4 border-red-700 pl-4 uppercase text-2xl font-normal mb-16">
          Галерея
        </h2>
        <hr />
        <LightGallery
          onInit={onInit}
          speed={500}
          // plugins={[lgThumbnail, lgZoom]}
          elementClassNames="grid grid-cols-2 gap-2
          sm:grid-cols-3 
          lg:grid-cols-4 lg:gap-5"
        >
          {DataGallery2?.map((item, index) => {
            return (
              <a
                href={item}
                key={index}
                className="h-[300px] w-full bg-black cursor-zoom-in relative"
              >
                <Image
                  src={item}
                  alt=""
                  fill
                  className="object-cover w-full h-full hover:opacity-50 transition"
                />
              </a>
            );
          })}
        </LightGallery>
        <hr />
        {/* <div
          className="grid grid-cols-2 gap-2
                        sm:grid-cols-3 
                        lg:grid-cols-4 lg:gap-5"
        >
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
        </div> */}
        <div className="my-10 flex justify-center items-center">
          <UiMyButton text="Все фотографии" href={"main-gallery"} />
        </div>
      </div>

      {/* Модальное окно */}
      <div
        className={cn(
          "top-0 bottom-0 right-0 left-0 bg-[rgba(0,0,0,0.9)] z-50 flex items-center justify-center",
          showModal ? "fixed" : "hidden",
        )}
      >
        <div
          className="shadow-lg px-4 h-auto w-[1500px]
                        lg:px-0"
        >
          <Image
            src={DataGallery[indexImage]}
            alt=""
            className="my-10 object-contain"
          />
        </div>
        {/* <div
          className="absolute w-60 hover:bg-[rgba(0,0,0,0.5)] top-0 bottom-0 left-0 hidden items-center justify-center
                          text-white tex-7xl font-black cursor-pointer transition opacity-30 hover:opacity-100
                          lg:flex"
          onClick={PrevImgGallery}
        >
          <Image src={ImgArrow} alt="" className="w-20 ml-5" />
        </div>

        <div
          className="absolute w-60 hover:bg-[rgba(0,0,0,0.5)] top-0 bottom-0 right-0 hidden items-center justify-center
                          text-white tex-7xl font-black cursor-pointer transition opacity-30 hover:opacity-100
                          lg:flex"
          onClick={NextImgGallery}
        >
          <Image src={ImgArrow} alt="" className=" w-20 scale-x-[-1] mr-5" />
        </div> */}

        <div
          className="absolute w-10 h-10 rounded-full bg-red-500 text-white font-normal top-5 right-5 cursor-pointer
                        flex items-center justify-center text-xl hover:opacity-90
                        xl:right-20 xl:top-10 xl:w-14 xl:h-14 xl:text-3xl"
          onClick={() => setShowModal(false)}
        >
          X
        </div>
        {/* <div className="absolute flex justify-center items-center gap-3 bottom-24">
          {DataGallery?.map((item, index) => {
            let show = false;
            if (index == indexImage) show = true;
            return (
              <span
                key={index}
                className={cn(
                  "rounded-full w-2 h-2 block",
                  "lg:w-3 lg:h-3",
                  show ? "bg-white" : "bg-gray-500 ",
                )}
              ></span>
            );
          })}
        </div> */}
      </div>
    </section>
  );
}
