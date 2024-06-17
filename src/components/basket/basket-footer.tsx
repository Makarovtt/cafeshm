import { Button } from "@nextui-org/react";
import Link from "next/link";

export function BasketFooter({ sumOrder }: { sumOrder?: number }) {
  return (
    <div className="mt-auto pt-5 px-3">
      <div className="text-center text-lg">
        К оплате: <strong>{sumOrder}₽</strong>
      </div>
      <div>
        <Button
          className="mt-3 w-full text-white text-lg"
          as={Link}
          href="/order"
          color="success"
        >
          Оформить заказ
        </Button>
      </div>
    </div>
  );
}
