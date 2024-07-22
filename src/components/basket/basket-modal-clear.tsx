import { cn } from "@/lib/utils";
import { Button } from "@nextui-org/react";

export function BasketModalClear({
  className,
  setIsShowClearBasketModal,
  funcClearBasket,
}: {
  className?: string;
  setIsShowClearBasketModal: (arg0: boolean) => void;
  funcClearBasket: () => void;
}) {
  return (
    <div className={cn(className, " h-full flex flex-col")}>
      <h2 className="flex justify-center items-center h-full font-semibold text-xl">
        Очистить корзину?
      </h2>
      <div className="flex justify-end items-center w-full mt-auto gap-5">
        <Button onClick={() => setIsShowClearBasketModal(false)}>Отмена</Button>
        <Button color="danger" onClick={funcClearBasket}>
          Очистить
        </Button>
      </div>
    </div>
  );
}
