type BasketState = {
  id: number;
  image: string;
  title: string;
  quantity: number;
  price: number;
  description: string;
};

export function BasketHeader({
  basketInfo,
  setIsShowClearBasketModal,
}: {
  basketInfo: BasketState[];
  setIsShowClearBasketModal: (arg0: boolean) => void;
}) {
  return (
    <div className="flex justify-between items-center my-3 mx-3">
      <h2 className="text-2xl font-semibold">Корзина</h2>
      {basketInfo.length ? (
        <span
          className="text-gray-500 text-lg cursor-pointer hover:text-gray-700"
          onClick={() => setIsShowClearBasketModal(true)}
        >
          Очистить
        </span>
      ) : null}
    </div>
  );
}
