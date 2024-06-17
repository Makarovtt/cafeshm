"use client";

import {
  clearBasket,
  addCountProductToBasket,
  removeCountProductToBasket,
} from "@/redux/features/basket-slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useState } from "react";
import { BasketHeader } from "../basket/basket-header";
import { BasketOrder } from "../basket/basket-order";
import { BasketEmpty } from "../basket/basket-empty";
import { ModalWindow } from "../ui/modal-window";
import { BasketModalClear } from "../basket/basket-modal-clear";
import { cn } from "@/lib/utils";

export function VitrinaBasket({ className }: { className?: string }) {
  const [isShowClearBasketModal, setIsShowClearBasketModal] = useState(false);
  const dispatch = useAppDispatch();
  const basketInfo = useAppSelector((state) => state.basketReducer);
  function funcClearBasket() {
    dispatch(clearBasket());
    setIsShowClearBasketModal(false);
  }
  function funcDeleteItemFromBasket(id: number) {
    dispatch(removeCountProductToBasket(id));
  }
  function funcAddItemFromBasket(id: number) {
    dispatch(addCountProductToBasket(id));
  }
  return (
    <div
      className={cn(
        "bg-white h-[80vh] rounded-lg py-3 sticky top-[90px] flex flex-col justify-between",
        className,
      )}
    >
      <BasketHeader
        basketInfo={basketInfo}
        setIsShowClearBasketModal={setIsShowClearBasketModal}
      />

      {basketInfo.length ? (
        <BasketOrder
          basketInfo={basketInfo}
          funcDeleteItemFromBasket={funcDeleteItemFromBasket}
          funcAddItemFromBasket={funcAddItemFromBasket}
        />
      ) : (
        <BasketEmpty />
      )}

      <ModalWindow
        isShow={isShowClearBasketModal}
        setIsShow={setIsShowClearBasketModal}
        widthModal="500px"
        heightModal="200px"
      >
        <BasketModalClear
          className=""
          setIsShowClearBasketModal={setIsShowClearBasketModal}
          funcClearBasket={funcClearBasket}
        />
      </ModalWindow>
    </div>
  );
}
