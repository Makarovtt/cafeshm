"use client";

import { cn } from "@/lib/utils";
import { Button } from "@nextui-org/react";
import { List, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { DataMenuItems } from "../data/menu-items";
import { HeaderPhone } from "./header-phone";
import { HeaderLogo } from "./header-logo";
import { HeaderPhoneMobileMenu } from "./header-menu-mob-phone";

export function HeaderMobMenu() {
  const [isShowModalMenu, setIsShowModalMenu] = useState(false);

  if (typeof window !== "undefined") {
    isShowModalMenu
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }
  return (
    <>
      <Button
        onClick={() => setIsShowModalMenu(true)}
        variant="bordered"
        className="flex flex-row gap-1 text-sm text-gray-600 font-semibold border-gray-400 bg-white px-1
                  md:text-lg md:px-4"
      >
        <List className="w-5 md:w-8" />
        Меню
      </Button>

      <div
        className={cn(
          "fixed top-0 bottom-0 right-0 left-0 bg-[rgba(0,0,0,0.6)] z-90 transition w-[100vw] h-[100vh]",
          isShowModalMenu
            ? "visible opacity-100 transition"
            : "invisible opacity-0",
        )}
        onClick={() => setIsShowModalMenu(false)}
      ></div>
      <div
        className={cn(
          "fixed bg-white w-full h-[100vh] z-100 left-0 top-0 pt-14 px-10 shadow-xl transition",
          "md:w-[400px]",
          isShowModalMenu ? "translate-x-0" : "translate-x-[-100%]",
        )}
      >
        <h2>Меню сайта</h2>
        <hr className="mb-5" />
        {DataMenuItems &&
          DataMenuItems.map((item) => {
            return (
              <Button
                as={Link}
                key={item.id}
                href={item.href}
                variant="light"
                className="block my-1 py-2 px-3 mx-2 text-lg"
              >
                {item.title}
              </Button>
            );
          })}
        <div className="mt-10">
          <div>
            <HeaderLogo alignment="vertically" />
          </div>
          <div>
            <HeaderPhoneMobileMenu />
          </div>
        </div>
        <div className="absolute top-2 right-2">
          <Button
            variant="light"
            isIconOnly
            onClick={() => setIsShowModalMenu(false)}
            className="rounded-full"
          >
            <X />
          </Button>
        </div>
      </div>
    </>
  );
}
