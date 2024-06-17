"use client";

import { Input } from "@nextui-org/react";
import { useEffect, useRef, useState } from "react";
import IMask from "imask";
import { DataHumanErrors, IDataUser } from "./type";

const maskOptions = {
  mask: "(000) 000-00-00",
};

export function OrderInputPhone({
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
  const refPhoneInput = useRef<HTMLInputElement | null>(null);
  if (refPhoneInput && refPhoneInput.current) {
    const mask = IMask(refPhoneInput.current!, maskOptions);
  }
  function funcChangePhone(symbol: string) {
    setDataUser({ ...dataUser, phone: symbol });
  }
  useEffect(() => {
    if (dataUser.phone.length === 15) {
      setDataUserErrors({ ...dataUserErrors, phone: "" });
      setIsCheckOrder(false);
    } else {
      setDataUserErrors({ ...dataUserErrors, phone: "некорректно заполнено" });
      setIsCheckOrder(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataUser]);

  return (
    <>
      <Input
        ref={refPhoneInput}
        type="tel"
        label="Телефон"
        variant="bordered"
        className="max-w-xs"
        startContent={
          <div className="pointer-events-none flex items-center">
            <span className="text-default-600 text-small">+7</span>
          </div>
        }
        classNames={{
          label: "text-black/50 dark:text-white/90",
          input: [
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
          innerWrapper: "bg-transparent",
          base: [""],
          inputWrapper: [
            "shadow-xl",
            "bg-white",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-white",
            "dark:hover:bg-default/70",
            "group-data-[focused=true]:bg-default-200/50",
            "group-data-[focus=true]:border-cyan-500",
            "dark:group-data-[focused=true]:bg-default/60",
            "!cursor-text",
          ],
        }}
        onChange={(e) => funcChangePhone(e.target.value)}
      />
    </>
  );
}
