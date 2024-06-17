import { Button } from "@nextui-org/react";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import { BasketOrder } from "./type";

export function OrderBasketOrder({
  basketInfo,
  funcDeleteItemFromBasket,
  funcAddItemFromBasket,
}: {
  basketInfo: BasketOrder[];
  funcDeleteItemFromBasket: (arg0: number) => void;
  funcAddItemFromBasket: (arg0: number) => void;
}) {
  let sumOrder = 0;
  return (
    <>
      <div className="flex flex-col gap-3 basket-order">
        <div className="overflow-y-auto flex flex-col gap-3 pl-3 pr-5">
          {basketInfo &&
            basketInfo.map((item) => {
              sumOrder += item.price * item.quantity;

              return (
                <>
                  <div key={item.id} className="flex gap-3">
                    <Image
                      src={item.image}
                      width={100}
                      height={75}
                      alt=""
                      className="rounded-lg"
                    />
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
                  <div className="w-full mx-auto rounded-xl bg-gray-200 flex items-center justify-between">
                    <div>
                      <Button
                        isIconOnly
                        variant="light"
                        onClick={() => funcDeleteItemFromBasket(item.id)}
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
                  <hr />
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}
