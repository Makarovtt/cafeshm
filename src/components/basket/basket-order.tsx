import { Button } from "@nextui-org/react";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import { BasketFooter } from "./basket-footer";
import { useState } from "react";

type BasketOrder = {
  id: number;
  image: string;
  title: string;
  quantity: number;
  price: number;
  description: string;
};
export function BasketOrder({
  basketInfo,
  funcDeleteItemFromBasket,
  funcAddItemFromBasket,
  setIsShowDeleteItemBasketModal,
  setIdDeleteItem,
  setTitleDeleteItem,
  showFooter = false,
}: {
  basketInfo: BasketOrder[];
  funcDeleteItemFromBasket: (arg0: number) => void;
  funcAddItemFromBasket: (arg0: number) => void;
  setIsShowDeleteItemBasketModal: (arg0: boolean) => void;
  setIdDeleteItem: (arg0: number) => void;
  setTitleDeleteItem: (arg0: string) => void;
  showFooter?  : boolean;
}) {
  // const [sumOrder, setSumOrder] = useState<number>(0);
  let sumOrder = 0;

  function setInfoDeleteItem(id: number, title: string) {
    setIdDeleteItem(id);
    setTitleDeleteItem(title);
    setIsShowDeleteItemBasketModal(true);
  }
  return (
    <>
      <div className="flex flex-col gap-3 flex-grow scrollbar overflow-auto">
        <div className="overflow-y-auto flex flex-col gap-3 pl-3 pr-5">
          {basketInfo &&
            basketInfo.map((item, index) => {
              // setSumOrder((prev) => prev + Number(item.price * item.quantity));
              sumOrder += item.price * item.quantity;
              return (
                <div key={item.id}>
                  <div className="flex gap-3">
                    <div className="relative w-[120px] h-[75px]">
                      <Image
                        src={item.image}
                        fill
                        alt=""
                        className="rounded-lg object-cover object-center h-full"
                      />
                    </div>
                    <div className="flex flex-col justify-between w-full">
                      {item.title}
                      <div className="flex justify-between items-center">
                        <div className="text-md">
                          {item.price}₽{" "}
                          <span className="text-gray-500 text-sm italic">
                            * {item.description}
                          </span>
                        </div>

                        <span className="font-semibold text-md text-gray-700">
                          {item.price * item.quantity}₽
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full mx-auto rounded-xl flex items-center justify-between my-1">
                    <div className="mr-5">
                      <Button
                        isIconOnly
                        variant="light"
                        onClick={() => setInfoDeleteItem(item.id, item.title)}
                      >
                        <Trash2 color="red" />
                      </Button>
                    </div>
                    <div className="w-full mx-auto rounded-xl bg-gray-200 flex items-center justify-between my-1">
                      <div>
                        <Button
                          isIconOnly
                          variant="light"
                          onClick={() => funcDeleteItemFromBasket(item.id)}
                          isDisabled={item.quantity <= 2}
                        >
                          <Minus />
                        </Button>
                      </div>
                      <div>{item.quantity}</div>
                      <div>
                        <Button
                          isIconOnly
                          variant="light"
                          onClick={() => funcAddItemFromBasket(item.id)}
                        >
                          <Plus />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
              );
            })}
        </div>
      </div>
      <BasketFooter sumOrder={sumOrder} showFooter={showFooter} />
    </>
  );
}
