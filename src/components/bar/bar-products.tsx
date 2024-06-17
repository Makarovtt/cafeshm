"use client";

import { addToBasket } from "@/redux/features/basket-slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
// import { VitrinaMobileMenu } from "./vitrina-mobile-menu";
import { BarItemProduct } from "./bar-item-product";
import Image from "next/image";
import { VitrinaMobileMenu } from "../vitrina/vitrina-mobile-menu";

type CatGoods = {
  id: string;
  category_id: string;
  title: string;
  picture: string;
  url: string;
  order_categories: string;
};
type Goods = {
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
type getData = {
  goods: Goods[];
  catGoods: CatGoods[];
};

export function BarProducts({ data }: { data: getData }) {
  const dispatch = useAppDispatch();
  const basketInfo = useAppSelector((state) => state.basketReducer);
  function putToBasket(data: Goods) {
    dispatch(addToBasket(data));
  }
  return (
    <>
      <h1
        className="text-4xl font-semibold mb-10 mt-6 mx-3
                      md:mx-0"
      >
        Карта Бара кафе «Шашлычный мир» в Астрахани
      </h1>
      <VitrinaMobileMenu catGoods={data.catGoods} title="Меню Бар" />
      <div className="px-2">
        {data?.catGoods.map((item) => {
          const sectionProducts = data.goods.filter(
            (itemCat) => itemCat.category === item.id,
          );
          return (
            <div
              key={item.id}
              className="pt-20 tablet:pt-20 flex gap-10 flex-col lg:flex-row"
              id={`cat-${item.id}`}
            >
              <div className="w-full lg:w-1/3 bg-white p-10 flex flex-col justify-center items-center">
                <div className="w-full text-center relative p-3 rounded-lg h-[200px]">
                  <Image
                    src={item.picture}
                    alt=""
                    unoptimized
                    fill
                    className=" object-contain w-full h-full"
                  />
                </div>
                <h2
                  className="text-center text-xl my-4 font-semibold text-gray-700 mx-3
                              md:mx-0"
                >
                  {item.title}
                </h2>
              </div>
              <div className="w-full lg:w-2/3 flex justify-center items-start flex-col">
                {sectionProducts?.map((itemproduct) => {
                  const check = basketInfo.some(
                    (i) => Number(i.id) === Number(itemproduct.id),
                  );
                  return (
                    <BarItemProduct
                      key={itemproduct.id}
                      itemProduct={itemproduct}
                      putToBasket={putToBasket}
                      check={check}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
