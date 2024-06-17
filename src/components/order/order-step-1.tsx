import { OrderInputPhone } from "./order-input-phone";
import { DataHumanErrors, IDataUser } from "./type";

export function OrderStep1({
  dataUserErrors,
  setDataUserErrors,
  dataUser,
  setDataUser,
  setIsCheckOrder,
}: {
  dataUserErrors: DataHumanErrors;
  setDataUserErrors: (arg0: DataHumanErrors) => void;
  dataUser: IDataUser;
  setDataUser: (arg0: IDataUser) => void;
  setIsCheckOrder: (arg0: boolean) => void;
}) {
  return (
    <>
      <div className="flex justify-start items-start gap-5">
        <div
          className="bg-white w-[25px] h-[25px] rounded-[50%] flex justify-center items-center
        shadow-[0_0_8px_0_rgba(0,0,0,0.3)] mt-[2px]"
        >
          1
        </div>
        <h2 className="text-xl font-semibold mb-5">Данные покупателя</h2>
      </div>
      <div
        className="flex justify-start items-start border-l-gray-300 pl-0 ml-0 border-none
                       md:pl-8 md:ml-3 md:border-l"
      >
        <OrderInputPhone
          dataUserErrors={dataUserErrors}
          setDataUserErrors={setDataUserErrors}
          dataUser={dataUser}
          setDataUser={setDataUser}
          setIsCheckOrder={setIsCheckOrder}
        />
      </div>
    </>
  );
}
