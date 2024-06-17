"use client";

import { NextUIProvider } from "@nextui-org/react";
import { HeaderLogo } from "./header-logo";
import { HeaderContacts } from "./header-contacts";
import { HeaderBasket } from "./header-basket";
import { HeaderDop } from "../header-dop/header-dop";

export function Header() {
  return (
    <NextUIProvider>
      <header className="flex flex-col relative bg-[url(/images/header/bg-header-top.jpg)] bg-repeat-x">
        <div
          className="max-w-maxWidth w-full mx-auto h-auto flex flex-col items-center py-2 gap-3
                        md:h-auto md:flex-row md:justify-between md:items-center"
        >
          <HeaderLogo className="" />
          <HeaderContacts className="" />
        </div>
      </header>
      <HeaderDop />
    </NextUIProvider>
  );
}
