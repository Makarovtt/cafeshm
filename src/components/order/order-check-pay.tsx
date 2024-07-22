"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { clearBasket } from "@/redux/features/basket-slice";
import { OrderBasket } from "./order-basket";
import { useRouter } from "next/navigation";
import axios from "axios";
const URLSendMail = "https://server.cafeshm.ru/mailto/app.php";

export function OrderCheckPay() {
  const dispatch = useAppDispatch();
  //   dispatch(clearBasket());

  const clientInfo = useAppSelector((state) => state.clientReducer);

  const router = useRouter();
  function onCloseModal() {
    router.push("/");
  }
  function sendOrder(clientInfo: any) {
    const formSend = new FormData();

    formSend.append("phone", String(clientInfo.phone));
    formSend.append("deliveryType", String(clientInfo.deliveryType));
    switch (clientInfo.deliveryType) {
      case "self":
        formSend.append("deliverySelfAddress", clientInfo?.deliverySelfAddress);
        break;

      case "delivery":
        formSend.append("street", String(clientInfo?.street));
        formSend.append("build", String(clientInfo?.home));
        formSend.append("privateHome", String(clientInfo.build));
        formSend.append("apartment", String(clientInfo.apartment));
        formSend.append("podyezd", String(clientInfo.podyezd));
        formSend.append("floor", String(clientInfo.floor));
        formSend.append("comment", String(clientInfo.comment));
        break;

      default:
        console.log("Error SwitchCase delivery");
    }

    switch (clientInfo.time) {
      case "now":
        formSend.append("time", "now");
        break;

      case "later":
        formSend.append("time", "later");
        formSend.append("order_day", String(clientInfo.order_day));
        formSend.append("order_time", String(clientInfo.order_time));
        break;

      default:
        console.log("Error SwitchCase selectedTime");
    }
    formSend.append("payType", String(clientInfo.payType));
    formSend.append("order", clientInfo.order);

    axios.post(URLSendMail, formSend).then((res) => {
      console.log(res.data);
      if (res.data === 1) {
        dispatch(clearBasket());
        setTimeout(onCloseModal, 5000);
      } else {
      }
    });
  }
  // sendOrder(clientInfo);
  setTimeout(onCloseModal, 5000);
  return (
    <section className="bg-[#F5F4F2] pb-16 pt-0.5">
      <div
        className="w-full max-w-maxWidth mx-auto items-baseline px-0.5 block
                  
                  xl:grid-cols-[minmax(200px,_1fr)_300px] xl:grid"
      >
        <div className="bg-white mt-20 p-4 max-w-[1200px] mx-auto w-full">
          <h1 className="border-l-4 border-red-700 pl-4 uppercase text-2xl font-normal mb-5">
            Оформление заказа
          </h1>
          <p className="text-lg text-green-800">
            Оплата прошла успешно. Заказ скоро будет готов!
          </p>
          <p className="text-lg ">
            Вы будете перенаправлены на главную страницу через 5 секунд
          </p>
        </div>
        <div
          className="h-full hidden
                        xl:block"
        >
          <OrderBasket className="mt-10" showFooter={true} />
        </div>
      </div>
    </section>
  );
}
