export function OrderBasketFooter({ sumOrder }: { sumOrder?: number }) {
  return (
    <div className="mt-auto pt-5 px-3">
      <div className="text-center text-lg">
        К оплате: <strong>{sumOrder}₽</strong>
      </div>
    </div>
  );
}
