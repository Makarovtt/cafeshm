import { Button } from "@nextui-org/react";

export function YUKassaBtn({
  sumOrder,
  isLoading,
  isCheckOrder,
  funcAddClientIfo,
  checkResultTime,
}: {
  sumOrder: number;
  isLoading: boolean;
  isCheckOrder: boolean;
  funcAddClientIfo: () => void | Promise<number>;
  checkResultTime: boolean;
}) {
  const handleSubmitBtn = async () => {
    await funcAddClientIfo();
  };
  return (
    <>
      <div className="flex w-full flex-col ">
        <Button
          data-text="Заплатить"
          className="ym-btn-pay ym-result-price w-full !max-w-full text-center !rounded-xl !py-3
                        !bg-[#006fee] !font-normal"
          color="primary"
          isLoading={isLoading}
          size="lg"
          isDisabled={
            isCheckOrder && sumOrder >= 1000 && checkResultTime ? false : true
          }
          onClick={handleSubmitBtn}
        >
          <span className="ym-text-crop !text-center !text-[16px] !my-10 !block">
            Оплатить онлайн
          </span>
          <span className="ym-price-output"></span>
        </Button>
      </div>
    </>
  );
}
