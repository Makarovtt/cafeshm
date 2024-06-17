import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import { OrderDeliveryAddress } from "./order-delivery-address";
import { OrderDeliverySelf } from "./order-delivery-self";
import { IDataDelivery } from "./type";

export function OrderStep2({
  dataDelivery,
  setDataDelivery,
  selected,
  setSelected,
  setDataDeliverySelf,
}: {
  dataDelivery: IDataDelivery;
  setDataDelivery: (arg0: IDataDelivery) => void;
  selected: string | number;
  setSelected: (arg0: string | number) => void;
  setDataDeliverySelf: (arg0: string) => void;
}) {
  return (
    <>
      <div className="flex justify-start items-start gap-5">
        <div
          className="bg-white w-[25px] h-[25px] rounded-[50%] flex justify-center items-center
		shadow-[0_0_8px_0_rgba(0,0,0,0.3)] mt-[2px]"
        >
          2
        </div>
        <h2 className="text-xl font-semibold mb-5">Способ получения</h2>
      </div>
      <div
        className="flex justify-start items-start border-l-gray-300 pl-0 ml-0 border-none
                       md:pl-8 md:ml-3 md:border-l"
      >
        <div className="flex w-full flex-col">
          <Tabs
            aria-label="Options"
            key="deliveryMethod"
            selectedKey={selected}
            onSelectionChange={setSelected}
          >
            <Tab key="self" title="Самовывоз">
              <Card>
                <CardBody>
                  <OrderDeliverySelf
                    setDataDeliverySelf={setDataDeliverySelf}
                  />
                </CardBody>
              </Card>
            </Tab>
            <Tab key="delivery" title="Доставка">
              <Card>
                <CardBody>
                  <OrderDeliveryAddress
                    dataDelivery={dataDelivery}
                    setDataDelivery={setDataDelivery}
                  />
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
}
