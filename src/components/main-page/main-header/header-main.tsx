"use client";

import { NextUIProvider } from "@nextui-org/react";
import { DataMenuItemsMain } from "../../data/menu-items";
import { HeaderTop } from "./header-top";
import { HeaderMainLogo } from "./header-main-logo";
import { HeaderMenuTemp } from "./HeaderMenuTemp";

export function HeaderMain() {
  return (
    <NextUIProvider>
      <header className="h-screen flex flex-col relative">
        <div
          className="bg-[url(/images/header/bg-header-top.jpg)] flex items-center justify-end h-auto
                        md:h-[135px]"
        >
          {/* <div className="w-full max-w-maxWidth mx-auto"> */}
          <div
            className="w-full max-w-maxWidth mx-auto
            
                    700:flex items-center justify-between pt-5"
          >
            {/* <HeaderTop className="block md:hidden" /> */}
            <HeaderTop className="block" />
          </div>
        </div>
        <div className="h-[70px] bg-black hidden tablet:block">
          <HeaderMenuTemp DataMenuItems={DataMenuItemsMain} className="flex" />
        </div>
        <div
          className="bg-[black] bg-[url(/images/banners/newyear_vertical.jpg)]
                     bg-center bg-contain bg-no-repeat h-[100%]
                     tablet:bg-[url(/images/banners/newyear_gorizontal.jpg)]"
        >
          {/* <HeaderMenu
            DataMenuItems={DataMenuItemsMain}
            className="flex md:hidden"
          /> */}
        </div>
        <div className="bg-[url(/images/header/bg-header-top.jpg)] h-[100px] mt-auto"></div>

        {/* Блок меню  */}
        {/* <div className="absolute h-screen top-0 bottom-0 left-0 right-0 z-10 min-h-[800px] hidden md:block">
          <div className="max-w-maxWidth mx-auto h-[100%] 2xl:pl-40">
            <div
              className="w-full h-[100%] flex flex-col text-white 
                            lg:w-[750px]
                            lg:bg-[rgba(0,0,0,0.7)] lg:shadow-[0_0px_13px_3px_rgba(0,0,0,0.5)]"
            >
              <HeaderMainLogo className={"hidden md:flex"} />
              <HeaderMenu
                DataMenuItems={DataMenuItemsMain}
                className="hidden md:flex"
              />
              <div className="h-[60px] mt-auto"></div>
            </div>
          </div>
        </div> */}
        {/* Блок меню  */}
      </header>
      <div className="h-20"></div>
    </NextUIProvider>
  );
}
