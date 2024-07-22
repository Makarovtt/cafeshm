"use client";
import { useAppDispatch } from "@/redux/hooks";
import { clearBasket } from "@/redux/features/basket-slice";
import { OrderBasket } from "./order-basket";
import { useRouter } from "next/navigation";

export function OrderFalsekPay() {
  const dispatch = useAppDispatch();
  //   dispatch(clearBasket());

  const router = useRouter();
  function onCloseModal() {
    router.push("/");
  }
  //   setTimeout(onCloseModal, 5000);
  return (
    <section className="bg-[#F5F4F2] pb-16 pt-0.5">
      <div
        className="w-full max-w-maxWidth mx-auto items-baseline px-0.5 block
                  
                  xl:grid-cols-[minmax(200px,_1fr)_300px] xl:grid"
      >
        <div className="bg-white mt-20 p-4 max-w-[1200px] mx-auto w-full">
          <h1 className="border-l-4 border-red-700 pl-4 uppercase text-2xl font-normal mb-5">
            Оформление заказа
          </h1>
          <p className="text-lg text-red-800">
            К сожалению, что-то пошло не так!
          </p>
          <p className="text-lg">
            Попробуйте оформить заказ еще раз. Или заказать по телефону.
          </p>
        </div>
        <div
          className="h-full hidden
                        xl:block"
        >
          <OrderBasket className="mt-10" showFooter={true} />
        </div>
      </div>
    </section>
  );
}
