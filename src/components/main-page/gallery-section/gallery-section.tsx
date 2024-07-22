"use client";

import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import Image from "next/image";
import { useEffect, useState } from "react";
import { DataGallery2 } from "../../data/data-gallery";
import { UiMyButton } from "../../ui/my-button";
import axios from "axios";

const urlGetGalleryMainPage = `https://server.cafeshm.ru/get/get_gallery_main_page.php`;
type GalleryItem = {
  id: string;
  src: string;
  src_big?: string;
};

export function GallerySection() {
  const [dataGallery, setDataGallery] = useState<GalleryItem[]>();
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  useEffect(() => {
    axios
      .get(urlGetGalleryMainPage)
      .then((res) => {
        setDataGallery(res.data);
      })
      .catch((error) => {
        console.log("catch error: " + error);
      });
  }, []);

  return (
    <section>
      <div
        className="max-w-maxWidth mx-auto py-20 px-3
                       sm:px-10"
      >
        <h2 className="border-l-4 border-red-700 pl-4 uppercase text-2xl font-normal mb-16">
          Галерея
        </h2>
        <LightGallery
          onInit={onInit}
          speed={500}
          // plugins={[lgThumbnail, lgZoom]}
          elementClassNames="grid grid-cols-2 gap-2
          sm:grid-cols-3 
          lg:grid-cols-4 lg:gap-5"
        >
          {dataGallery &&
            dataGallery?.map((item, index) => {
              return (
                <a
                  href={item.src_big ? item.src_big : item.src}
                  key={index}
                  className="h-[300px] w-full bg-black cursor-zoom-in relative"
                >
                  <Image
                    src={item.src}
                    alt=""
                    fill
                    className="object-cover w-full h-full hover:opacity-50 transition"
                  />
                </a>
              );
            })}
        </LightGallery>

        <div className="my-10 flex justify-center items-center">
          <UiMyButton text="Все фотографии" href={"main-gallery"} />
        </div>
      </div>
    </section>
  );
}
