"use client";

import { addToBasket } from "@/redux/features/basket-slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { VitrinaItemProduct } from "./vitrina-item-product";
import { VitrinaMobileMenu } from "./vitrina-mobile-menu";

type CatGoods = {
  id: string;
  title: string;
  url: string;
  order_categories: string;
};
type Goods = {
  id: string;
  category: string;
  category_url: string;
  picture: string;
  picture_big?: string;
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

export function VitrinaProducts({ data }: { data: getData }) {
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
        Доставка шашлыка и готовых блюд в Астрахани
      </h1>
      <VitrinaMobileMenu catGoods={data.catGoods} title="Меню на вынос" />
      <div className="">
        {data?.catGoods.map((item) => {
          const sectionProducts = data.goods.filter(
            (itemCat) => itemCat.category === item.id,
          );
          return (
            <>
              <hr className="pb-10" id={`cat-${item.id}`} key={item.id} />
              <div className="pt-4 tablet:pt-10">
                <h2
                  className="text-xl my-4 font-semibold text-gray-700 mx-3
                              md:mx-0"
                >
                  {item.title}
                </h2>
                <div
                  className="grid grid-cols-2 gap-1
                          md:gap-4
                              lg:grid-cols-3
                              xl:grid-cols-2
                              1/2xl:grid-cols-3
                              3xl:grid-cols-4"
                >
                  {sectionProducts?.map((itemproduct) => {
                    const check = basketInfo.some(
                      (i) => Number(i.id) === Number(itemproduct.id),
                    );
                    return (
                      <VitrinaItemProduct
                        key={itemproduct.id}
                        itemProduct={itemproduct}
                        putToBasket={putToBasket}
                        check={check}
                      />
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
