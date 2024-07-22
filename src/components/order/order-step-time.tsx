import {
  Tabs,
  Tab,
  Card,
  CardBody,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { ORDER_DAY, ORDER_TIME } from "../data/data-order-time";

export function OrderStepTime({
  selectedTime,
  setSelectedTime,
  selectDay,
  setSelectDay,
  setSelectTime,
  selectTime,
}: {
  selectedTime: string | number;
  setSelectedTime: (arg0: string | number) => void;
  selectDay: string;
  setSelectDay: (arg0: any) => void;
  selectTime: string;
  setSelectTime: (arg0: any) => void;
}) {
  const date = new Date();
  const hour = date.getHours();
  const today = hour < 18;

  return (
    <>
      <div className="flex justify-start items-start gap-5">
        <div
          className="bg-white w-[25px] h-[25px] rounded-[50%] flex justify-center items-center
		shadow-[0_0_8px_0_rgba(0,0,0,0.3)] mt-[2px]"
        >
          3
        </div>
        <h2 className="text-xl font-semibold mb-5">Время получения</h2>
      </div>
      <div
        className="flex justify-start items-start border-l-gray-300 pl-0 ml-0 border-none
                       md:pl-8 md:ml-3 md:border-l"
      >
        <div className="flex w-full flex-col">
          <Tabs
            aria-label="Options"
            key="deliveryMethod"
            selectedKey={selectedTime}
            onSelectionChange={setSelectedTime}
          >
            <Tab key="now" title="Быстро">
              <Card>
                <CardBody>
                  <div className="py-5">
                    Мы приготовим Ваш заказ как можно быстрее
                  </div>
                </CardBody>
              </Card>
            </Tab>
            <Tab key="later" title="Ко времени">
              <Card>
                <CardBody>
                  <div className="py-5">
                    Укажите время когда Вы хотите получить заказ:
                    <div className="mt-5 flex gap-5 items-center">
                      <Select
                        name="SelectDay"
                        className="max-w-xs"
                        placeholder=""
                        label="день"
                        selectedKeys={[selectDay]}
                        disabledKeys={today ? [] : ["1"]}
                        onChange={(e) => setSelectDay(e.target.value)}
                      >
                        {ORDER_DAY.map((item) => (
                          <SelectItem key={item}>{item}</SelectItem>
                        ))}
                      </Select>

                      <Select
                        name="SelectTime"
                        className="max-w-xs"
                        placeholder=""
                        label="время"
                        selectedKeys={[selectTime]}
                        disabledKeys={today ? [] : ["1"]}
                        onChange={(e) => setSelectTime(e.target.value)}
                      >
                        {ORDER_TIME.map((item) => (
                          <SelectItem key={item}>{item}</SelectItem>
                        ))}
                      </Select>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
}
