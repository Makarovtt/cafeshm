"use client";

import {
  clearBasket,
  addCountProductToBasket,
  removeCountProductToBasket,
  removeToBasket,
} from "@/redux/features/basket-slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useState } from "react";
import { BasketHeader } from "../basket/basket-header";
import { BasketOrder } from "../basket/basket-order";
import { BasketEmpty } from "../basket/basket-empty";
import { ModalWindow } from "../ui/modal-window";
import { BasketModalClear } from "../basket/basket-modal-clear";
import { cn } from "@/lib/utils";
import { BasketModalDeleteItem } from "../basket/basket-modal-delete-item";

export function VitrinaBasket({ className }: { className?: string }) {
  const [isShowClearBasketModal, setIsShowClearBasketModal] = useState(false);
  const [isShowDeleteItemBasketModal, setIsShowDeleteItemBasketModal] =
    useState(false);
  const [idDeleteItem, setIdDeleteItem] = useState<number>(0);
  const [titleDeleteItem, setTitleDeleteItem] = useState<string>("");
  const dispatch = useAppDispatch();
  const basketInfo = useAppSelector((state) => state.basketReducer);
  // Очистить корзину
  function funcClearBasket() {
    dispatch(clearBasket());
    setIsShowClearBasketModal(false);
  }
  // Уменьшить количество
  function funcDeleteItemFromBasket(id: number) {
    dispatch(removeCountProductToBasket(id));
  }
  // Удалить позицию
  function funcDeleteProductFromBasket(id: number) {
    dispatch(removeToBasket(id));
    setIsShowDeleteItemBasketModal(false);
  }
  // Добавить количество
  function funcAddItemFromBasket(id: number) {
    dispatch(addCountProductToBasket(id));
  }
  return (
    <div
      className={cn(
        "bg-white rounded-lg py-3 sticky top-[90px] flex flex-col justify-between basket-right-class",
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
          setIsShowDeleteItemBasketModal={setIsShowDeleteItemBasketModal}
          setIdDeleteItem={setIdDeleteItem}
          setTitleDeleteItem={setTitleDeleteItem}
          showFooter={true}
        />
      ) : (
        <BasketEmpty />
      )}

      <ModalWindow
        isShow={isShowDeleteItemBasketModal}
        setIsShow={setIsShowDeleteItemBasketModal}
        widthModal="500px"
        heightModal="200px"
      >
        <BasketModalDeleteItem
          className=""
          setIsShowDeleteItemBasketModal={setIsShowDeleteItemBasketModal}
          funcDeleteProductFromBasket={funcDeleteProductFromBasket}
          idDeleteItem={idDeleteItem}
          titleDeleteItem={titleDeleteItem}
        />
      </ModalWindow>

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
