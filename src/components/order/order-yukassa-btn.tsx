import { Button } from "@nextui-org/react";
import axios from "axios";
import { redirect } from "next/navigation";
import { FormEvent, FormHTMLAttributes, useRef } from "react";

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
  const data = `<script src="https://yookassa.ru/integration/simplepay/js/yookassa_construct_form.js"></script>`;
  const formRef = useRef<any>(null);

  const handleSubmitBtn = async (event: FormEvent) => {
    const resultRequest = await funcAddClientIfo();
    if (resultRequest === 1) {
      formRef.current && formRef.current.submit();
    }
  };
  return (
    <>
      <link
        rel="stylesheet"
        href="https://yookassa.ru/integration/simplepay/css/yookassa_construct_form.css"
      />

      <form
        // onSubmit={handleSubmit(onSubmit)}
        ref={formRef}
        className="yoomoney-payment-form w-full !max-w-full !px-0"
        action="https://yookassa.ru/integration/simplepay/payment"
        method="post"
        accept-charset="utf-8"
      >
        <div className="ym-hidden-inputs">
          <input
            name="shopSuccessURL"
            type="hidden"
            value="https://cafeshm.ru/order/checkpay/"
          />
          <input
            name="shopFailURL"
            type="hidden"
            value="https://cafeshm.ru/order/falsepay/"
          />
        </div>

        <div className="ym-payment-btn-block !mt-0 !h-auto">
          <div className="ym-input-icon-rub ym-display-none">
            <input
              name="sum"
              placeholder="0.00"
              className="ym-input ym-sum-input ym-required-input"
              type="number"
              step="any"
              value={sumOrder}
            />
          </div>
        </div>
        <input name="shopId" type="hidden" value="397450" />
      </form>
      <div dangerouslySetInnerHTML={{ __html: data }} />
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
          // type="submit"
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
