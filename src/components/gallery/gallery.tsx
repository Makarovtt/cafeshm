"use client";

import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import { DataGallery, DataGallery2 } from "../data/data-gallery";
import Image from "next/image";

type Picture = {
  id: string;
  src: string;
  category: string;
};
type CatGallery = {
  id: string;
  title: string;
};
type GetData = {
  pictures: Picture[];
  catGallery: CatGallery[];
};

export function Gallery({ dataGallery }: { dataGallery: GetData }) {
  const onInit = () => {
    // console.log("lightGallery has been initialized");
  };
  return (
    <section className="max-w-maxWidth mx-auto px-2 sm:px-5 md:px-10 mt-10 mb-20">
      <h1 className="border-l-4 border-red-700 pl-4 uppercase text-2xl font-normal mt-10 mb-5">
        Галерея кафе «Шашлычный мир»
      </h1>

      {dataGallery &&
        dataGallery.catGallery.map((item) => {
          const sectionGallery = dataGallery.pictures.filter(
            (itemCat) => itemCat.category === item.id,
          );
          return (
            <>
              <div className="text-center uppercase text-2xl font-normal mt-20 mb-12 text-gay-700 border-b-2 border-red-700 mx-auto">
                {item.title}
              </div>

              <LightGallery
                onInit={onInit}
                speed={500}
                // plugins={[lgThumbnail, lgZoom]}
                elementClassNames="grid grid-cols-2 gap-2
          sm:grid-cols-3 
          lg:grid-cols-4 lg:gap-5"
              >
                {sectionGallery?.map((item) => {
                  return (
                    <a
                      href={item.src}
                      key={item.id}
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
            </>
          );
        })}
    </section>
  );
}
