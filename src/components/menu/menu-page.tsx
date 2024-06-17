"use client";

import { VitrinaMenu } from "../vitrina/vitrina-menu";
import { VitrinaProducts } from "../vitrina/vitrina-products";
import { MenuProducts } from "./menu-products";

export type Goods = {
  id: string;
  category: string;
  category_url: string;
  picture: string;
  description: string;
  title: string;
  price: string;
  portion: string;
  min_portion: string;
  unit: string;
  order_goods: string;
};
export type CatGoods = {
  id: string;
  category_id: string;
  title: string;
  url: string;
  order_categories: string;
}[];

export type getData = {
  goods: Goods[];
  catGoods: CatGoods;
};

export function MenuVitrina({ data }: { data: getData }) {
  return (
    <section className="bg-[#F5F4F2] pb-16 pt-0.5">
      <div
        className="w-full max-w-maxWidth mx-auto items-baseline px-0.5 block
                  md:grid-cols-[250px_minmax(200px,_1fr)] md:grid md:px-5 md:gap-5
                  xl:grid-cols-[300px_minmax(200px,_1fr)]"
      >
        <div className="sticky top-[50px] hidden md:block">
          <VitrinaMenu catGoods={data?.catGoods} />
        </div>
        <div className="w-full">
          <MenuProducts data={data} />
        </div>
      </div>
    </section>
  );
}
