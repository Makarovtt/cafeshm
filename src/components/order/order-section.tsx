"use client";

import { useState } from "react";
import { OrderStep1 } from "./order-step-1";
import { OrderStep2 } from "./order-step-2";
import { OrderStep3 } from "./order-step-3";
import { OrderSubmit } from "./order-submit";
import { DataHumanErrors, IDataDelivery, IDataUser } from "./type";
import { useDisclosure } from "@nextui-org/react";
import { OrderBasket } from "./order-basket";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import axios from "axios";
import { ModalResultOrder } from "./modal-result-order";
import { clearBasket } from "@/redux/features/basket-slice";
import { OrderStepTime } from "./order-step-time";
import { addToClient } from "@/redux/features/info-client-slice";
import { useRouter } from "next/navigation";

const URLSendMail = "https://server.cafeshm.ru/mailto/test_pay.php";
let items = {};
type DefaultState = {
  phone: string;
  deliveryType: string;
  deliverySelfAddress: string;
  street: string;
  home: string;
  privateHome: string;
  apartment: string;
  podyezd: string;
  floor: string;
  comment: string;
  time: string;
  order_day: string;
  order_time: string;
  payType: string;
  order: string;
};
let initialState = items as DefaultState;

export function OrderSection() {
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isCheckOrder, setIsCheckOrder] = useState<boolean>(true);
  const [selected, setSelected] = useState<string | number>("self");
  const [selected2, setSelected2] = useState<string | number>("cash");
  const [selectedTime, setSelectedTime] = useState<string | number>("now");
  const [dataUser, setDataUser] = useState<IDataUser>({
    phone: "",
  });
  const [selectDay, setSelectDay] = useState<string>("");
  const [orderCheck, setOrderCheck] = useState<boolean>(false);
  const [selectTime, setSelectTime] = useState<string>("");
  const [dataUserErrors, setDataUserErrors] = useState<DataHumanErrors>({
    phone: "некорректно заполнено",
  });
  const [dataDeliverySelf, setDataDeliverySelf] = useState<string>("tatysheva");
  const [dataDelivery, setDataDelivery] = useState<IDataDelivery>({
    street: "",
    home: "",
    privateHome: false,
    apartment: "",
    podyezd: "",
    floor: "",
    comment: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string>("");
  const [checkResultOrder, setCheckResultOrder] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const basketInfo = useAppSelector((state) => state.basketReducer);

  let sumOrder = 0;
  {
    basketInfo &&
      basketInfo.map((item, index) => {
        sumOrder += item.price * item.quantity;
      });
  }
  async function sendOrder() {
    setIsLoading(true);
    const formSend = new FormData();

    formSend.append("phone", String(dataUser.phone));
    formSend.append("deliveryType", String(selected));
    switch (selected) {
      case "self":
        formSend.append("deliverySelfAddress", dataDeliverySelf);
        break;

      case "delivery":
        formSend.append("street", String(dataDelivery?.street));
        formSend.append("build", String(dataDelivery?.home));
        formSend.append("privateHome", String(dataDelivery.privateHome));
        formSend.append("apartment", String(dataDelivery.apartment));
        formSend.append("podyezd", String(dataDelivery.podyezd));
        formSend.append("floor", String(dataDelivery.floor));
        formSend.append("comment", String(dataDelivery.comment));
        break;

      default:
        console.log("Error SwitchCase delivery");
    }

    switch (selectedTime) {
      case "now":
        formSend.append("time", "now");
        break;

      case "later":
        formSend.append("time", "later");
        formSend.append("order_day", String(selectDay));
        formSend.append("order_time", String(selectTime));
        break;

      default:
        console.log("Error SwitchCase selectedTime");
    }
    formSend.append("payType", String(selected2));
    formSend.append("order", JSON.stringify(basketInfo));
    await axios.post(URLSendMail, formSend).then((res) => {
      if (res.data.code === "1") {
        setErrorText("");
        setCheckResultOrder(true);
        dispatch(clearBasket());
        if (selected2 === "cash") {
          onOpen();
          setIsLoading(false);
        } else if (selected2 === "online") {
          router.push(res.data.url);
        }
        setOrderCheck(true);
      } else {
        setErrorText(res.data);
        setIsLoading(false);
        onOpen();
      }
      setIsLoading(false);
    });
  }

  return (
    <section className="bg-[#F5F4F2] pb-16 pt-0.5">
      <div
        className="w-full max-w-maxWidth mx-auto items-baseline px-0.5 block
                  
                  xl:grid-cols-[minmax(200px,_1fr)_300px] xl:grid"
      >
        <div className="bg-white p-4 max-w-[1200px] mx-auto w-full">
          <h1 className="border-l-4 border-red-700 pl-4 uppercase text-2xl font-normal mb-5">
            Оформление заказа
          </h1>

          <div>
            <div className="my-2 mb-5">
              <OrderStep1
                dataUserErrors={dataUserErrors}
                setDataUserErrors={setDataUserErrors}
                dataUser={dataUser}
                setDataUser={setDataUser}
                setIsCheckOrder={setIsCheckOrder}
              />
            </div>
            <div className="mb-5">
              <OrderStep2
                dataDelivery={dataDelivery}
                setDataDelivery={setDataDelivery}
                selected={selected}
                setSelected={setSelected}
                setDataDeliverySelf={setDataDeliverySelf}
              />
            </div>
            <div className="mb-5">
              <OrderStepTime
                selectedTime={selectedTime}
                setSelectedTime={setSelectedTime}
                selectDay={selectDay}
                setSelectDay={setSelectDay}
                setSelectTime={setSelectTime}
                selectTime={selectTime}
              />
            </div>
            <div className="mb-5">
              <OrderStep3
                selected2={selected2}
                setSelected2={setSelected2}
                sumOrder={sumOrder}
              />
            </div>
          </div>

          <div className="mb-5">
            <OrderSubmit
              isCheckOrder={isCheckOrder}
              sendOrder={sendOrder}
              isLoading={isLoading}
              errorText={errorText}
              sumOrder={sumOrder}
              selected2={selected2}
              checkResultOrder={checkResultOrder}
              phoneErrors={dataUserErrors.phone}
              selectDay={selectDay}
              selectTime={selectTime}
              selectedTime={selectedTime}
            />
          </div>
        </div>

        <div
          className="h-full hidden
                        xl:block"
        >
          <OrderBasket className="mt-10" />
        </div>

        <ModalResultOrder
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          checkResultOrder={checkResultOrder}
          errorText={errorText}
        />
      </div>
    </section>
  );
}
