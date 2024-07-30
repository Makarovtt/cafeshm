import { Button } from "@nextui-org/react";
import Link from "next/link";

export function BasketFooter({
  sumOrder,
  showFooter,
}: {
  sumOrder?: number;
  showFooter: boolean;
}) {
  return (
    <div
      className="mt-auto py-5 px-3 sticky bottom-0 bg-white border-t-1 border-gray-200 
                      rounded-bl-lg rounded-br-lg border-solid"
    >
      <div className="text-center text-lg">
        К оплате: <strong>{sumOrder}₽</strong>
      </div>
      {Number(sumOrder) < 1000 ? (
        <span className="text-sm italic text-red-700">
          Сумма заказа должна быть не менее 1000р
        </span>
      ) : null}
      {showFooter && (
        <div>
          <Button
            className="mt-3 w-full text-white text-lg"
            as={Link}
            href="/order"
            color="success"
            isDisabled={Number(sumOrder) < 1000 ? true : false}
          >
            Оформить заказ
          </Button>
        </div>
      )}
    </div>
  );
}
