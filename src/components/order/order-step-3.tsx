import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";

export function OrderStep3({
  selected2,
  setSelected2,
  sumOrder,
}: {
  selected2: string | number;
  setSelected2: (arg0: string | number) => void;
  sumOrder: number;
}) {
  return (
    <>
      <div className="flex justify-start items-start gap-5">
        <div
          className="bg-white w-[25px] h-[25px] rounded-[50%] flex justify-center items-center
                      shadow-[0_0_8px_0_rgba(0,0,0,0.3)] mt-[2px]"
        >
          4
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
            // disabledKeys={["online"]}
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
                  <div className=" p-5">
                    <p className="my-5">Оплата онлайн</p>
                    <p className="my-5"></p>
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
