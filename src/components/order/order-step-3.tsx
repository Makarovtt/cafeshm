import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import { Wrench } from "lucide-react";

export function OrderStep3({
  selected2,
  setSelected2,
}: {
  selected2: string | number;
  setSelected2: (arg0: string | number) => void;
}) {
  return (
    <>
      <div className="flex justify-start items-start gap-5">
        <div
          className="bg-white w-[25px] h-[25px] rounded-[50%] flex justify-center items-center
        shadow-[0_0_8px_0_rgba(0,0,0,0.3)] mt-[2px]"
        >
          3
        </div>
        <h2 className="text-xl font-semibold mb-5">Способ оплаты</h2>
      </div>
      <div
        className="flex justify-start items-start border-l-gray-300 pl-0 ml-0 border-none
                       md:pl-8 md:ml-3 md:border-l"
      >
        <div className="flex w-full flex-col">
          <Tabs
            aria-label="Options2"
            disabledKeys={["online"]}
            key="payMethod"
            selectedKey={selected2}
            onSelectionChange={setSelected2}
          >
            <Tab key="cash" title="Наличными">
              <Card>
                <CardBody>
                  <div className=" p-5">
                    <p className="my-5">Оплата наличными при получении</p>
                  </div>
                </CardBody>
              </Card>
            </Tab>
            <Tab key="online" title="Онлайн">
              <Card>
                <CardBody>
                  <div className=" p-5 flex justify-between items-center">
                    <p className="my-5">В разработке</p>
                    <Wrench
                      strokeWidth={1}
                      size={35}
                      className="text-gray-400"
                    />
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
