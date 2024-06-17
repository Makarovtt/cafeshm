import { Button } from "@nextui-org/react";
import Link from "next/link";

export function OrderSubmit({
  isCheckOrder,
  sendOrder,
  isLoading,
  errorText,
}: {
  isCheckOrder: boolean;
  sendOrder: () => void;
  isLoading: boolean;
  errorText: string;
}) {
  return (
    <>
      {errorText && (
        <div className="text-red-700 text-lg font-semibold">{errorText}</div>
      )}
      <div
        className="flex justify-start items-start border-l-gray-300 pl-0 ml-0 border-none
                       md:pl-8 md:ml-3 md:border-l"
      >
        <div className="flex w-full flex-col">
          <Button
            color="primary"
            isLoading={isLoading}
            size="lg"
            isDisabled={isCheckOrder}
            onClick={sendOrder}
          >
            Заказать
          </Button>
        </div>
      </div>
      <div className="pl-8 ml-3 mt-3 text-sm">
        * Заполните все необходимые поля
      </div>
      <div className="pl-8 ml-3 mt-3 text-sm">
        * Подтверждая заказ, Вы соглашаетесь с условиями{" "}
        <Link href="#" className="underline hover:no-underline">
          <strong>политики конфиденциальности</strong>
        </Link>{" "}
        и{" "}
        <Link href="#" className="underline hover:no-underline">
          <strong>правилами продажи</strong>
        </Link>
        .
      </div>
    </>
  );
}
