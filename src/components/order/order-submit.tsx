import { Button } from "@nextui-org/react";
import Link from "next/link";
import { YUKassaBtn } from "./order-yukassa-btn";

export function OrderSubmit({
  isCheckOrder,
  sendOrder,
  isLoading,
  errorText,
  sumOrder,
  selected2,
  checkResultOrder,
  phoneErrors,
  selectDay,
  selectTime,
  selectedTime,
}: {
  isCheckOrder: boolean;
  sendOrder: () => void;
  isLoading: boolean;
  errorText: string;
  sumOrder: number;
  selected2: string | number;
  checkResultOrder: boolean;
  phoneErrors: string;
  selectDay: string;
  selectTime: string;
  selectedTime: string | number;
}) {
  let checkResultTime = false;
  if (selectedTime === "now") {
    checkResultTime = true;
  } else if (selectedTime === "later" && selectDay && selectTime) {
    checkResultTime = true;
  }
  return (
    <>
      {errorText && (
        <div className="text-red-700 text-lg font-semibold">{errorText}</div>
      )}
      {sumOrder < 1000 && !checkResultOrder && (
        <div className="text-red-700 text-md font-semibold pl-0 ml-0 md:pl-8 md:ml-3 mb-3">
          Сумма заказа должна быть не менее 1000 рублей
        </div>
      )}
      {phoneErrors != "" && !checkResultOrder && (
        <div className="text-red-700 text-md font-semibold pl-0 ml-0 md:pl-8 md:ml-3 mb-3">
          Не указан телефон
        </div>
      )}
      {!checkResultTime && (
        <div className="text-red-700 text-md font-semibold pl-0 ml-0 md:pl-8 md:ml-3 mb-3">
          Не указано время получения заказа
        </div>
      )}
      <div
        className="flex justify-start items-start border-l-gray-300 pl-0 ml-0 border-none
                       md:pl-8 md:ml-3 md:border-l"
      >
        <div className="flex w-full flex-col">
          {selected2 === "cash" && (
            <Button
              color="primary"
              isLoading={isLoading}
              size="lg"
              isDisabled={
                isCheckOrder && sumOrder >= 1000 && checkResultTime
                  ? false
                  : true
              }
              onClick={sendOrder}
            >
              Заказать
            </Button>
          )}
          {selected2 === "online" && (
            <YUKassaBtn
              sumOrder={sumOrder}
              isLoading={isLoading}
              isCheckOrder={isCheckOrder}
              funcAddClientIfo={sendOrder}
              checkResultTime={checkResultTime}
            />
          )}
        </div>
      </div>

      <div className="pl-8 ml-3 mt-3 text-sm">
        * Сумма заказа должна быть не менее 1000 рублей
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
