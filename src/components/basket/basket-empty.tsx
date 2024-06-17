import Image from "next/image";
import ImgEmptyBasket from "@/public/images/empty-basket.svg";

export function BasketEmpty() {
  return (
    <div className="h-full flex flex-col gap-5 items-center justify-center">
      <Image src={ImgEmptyBasket} alt="" />
      Корзина пуста
    </div>
  );
}
