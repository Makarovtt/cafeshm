import { addToBasket } from "@/redux/features/basket-slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { MenuItemProduct } from "./menu-item-product";
import { VitrinaMobileMenu } from "../vitrina/vitrina-mobile-menu";
// import { Goods, getData } from "./meny-type";
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
export function MenuProducts({ data }: { data: getData }) {
  const dispatch = useAppDispatch();
  const basketInfo = useAppSelector((state) => state.basketReducer);
  function putToBasket(data: Goods) {
    dispatch(addToBasket(data));
  }
  return (
    <>
      <h1 className="border-l-4 border-red-700 pl-4 uppercase text-2xl font-normal mt-10 mb-5">
        Меню кафе «Шашлычный мир»
      </h1>
      {/* <VitrinaMobileMenu catGoods={data.catGoods} /> */}
      <VitrinaMobileMenu catGoods={data.catGoods} title="Меню кафе" />
      <div className="">
        {data?.catGoods.map((item) => {
          const sectionProducts = data.goods.filter(
            (itemCat: Goods) => itemCat.category === item.id,
          );
          return (
            <div
              key={item.id}
              className="pt-4 tablet:pt-20"
              id={`cat-${item.id}`}
            >
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
                              1/2xl:grid-cols-4
                              3xl:grid-cols-5"
              >
                {sectionProducts?.map((itemproduct: Goods) => {
                  const check = basketInfo.some(
                    (i) => Number(i.id) === Number(itemproduct.id),
                  );
                  return (
                    <MenuItemProduct
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
