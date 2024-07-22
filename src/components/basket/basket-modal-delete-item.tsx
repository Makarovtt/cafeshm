import { cn } from "@/lib/utils";
import { Button } from "@nextui-org/react";

export function BasketModalDeleteItem({
  className,
  setIsShowDeleteItemBasketModal,
  funcDeleteProductFromBasket,
  idDeleteItem,
  titleDeleteItem,
}: {
  className?: string;
  setIsShowDeleteItemBasketModal: (arg0: boolean) => void;
  funcDeleteProductFromBasket: (arg0: number) => void;
  idDeleteItem: number;
  titleDeleteItem: string;
}) {
  function Delete() {
    funcDeleteProductFromBasket(idDeleteItem);
    setIsShowDeleteItemBasketModal(false);
  }
  return (
    <div className={cn(className, " h-full flex flex-col")}>
      <h2 className="flex justify-center items-center h-full font-semibold text-xl">
        Удалить: &nbsp; <b>{titleDeleteItem}</b> ?
      </h2>
      <div className="flex justify-end items-center w-full mt-auto gap-5">
        <Button onClick={() => setIsShowDeleteItemBasketModal(false)}>
          Отмена
        </Button>
        <Button color="danger" onClick={Delete}>
          Удалить
        </Button>
      </div>
    </div>
  );
}
