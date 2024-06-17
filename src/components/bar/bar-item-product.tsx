import { cn } from "@/lib/utils";
import { Button, CircularProgress } from "@nextui-org/react";
import { Plus } from "lucide-react";
import Image from "next/image";
import { ModalWindow } from "../ui/modal-window";
import { useState } from "react";

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

export function BarItemProduct({
  itemProduct,
  putToBasket,
  check,
}: {
  itemProduct: Goods;
  putToBasket: (arg0: Goods) => void;
  check: boolean;
}) {
  const [isShowModalImageProduct, setIsShowModalImageProduct] = useState(false);

  return (
    <div className="w-full odd:bg-gray-50 px-2 py-1">
      <div className="flex flex-row justify-between items-center w-full flex-wrap lg:flex-nowrap">
        <div>
          <div className="text-md lg:text-lg my-1 whitespace-nowrap">
            {itemProduct.title}
          </div>
        </div>
        <div className="w-full "></div>
        <div className="mt-auto">
          <div className=" text-sm lg:text-md my-1 text-gray-800 font-light flex justify-between gap-3 items-center">
            <span className="whitespace-nowrap">
              {itemProduct.portion} {itemProduct.unit}
              {" /"}
            </span>
            <span className="text-lg lg:text-xl font-semibold text-gray-600 whitespace-nowrap">
              {itemProduct.price}₽
            </span>
          </div>
        </div>
      </div>
      <div className="text-md text-gray-600 font-light w-1/2">
        {itemProduct.description}
      </div>
      {/* <hr /> */}
    </div>
  );
}
