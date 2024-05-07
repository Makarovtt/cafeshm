"use client";

import ImgLogotype from "@/public/images/header/logotype-header.png";
import ImgIconMenu from "@/public/images/header/corner-menu.svg";
import IconPhone from "@/public/images/header/icon_phone-header.svg";
import Image from "next/image";
import Link from "next/link";

import { Button, NextUIProvider } from "@nextui-org/react";
import { DataMenuItems } from "./menu-items";

export function HeaderMain() {
  return (
    <NextUIProvider>
      <header className="h-screen flex flex-col relative">
        <div className="bg-[url(/images/header/bg-header-top.jpg)] h-[135px]">
          <div className="max-w-maxWidth mx-auto h-full flex justify-end gap-20 items-center relative z-20">
            <Button
              as={Link}
              href="https://github.com/nextui-org/nextui"
              className="bg-[red] shadow text-white text-xl font-semibold"
            >
              Онлайн заказ
            </Button>
            <Link
              href={"#"}
              className="flex flex-row items-center gap-2 text-3xl font-bold"
            >
              <Image src={IconPhone} alt="" />
              999-696
            </Link>
          </div>
        </div>
        <div className="bg-[black] bg-[url(/images/header/bg-cafe.jpg)] bg-center bg-cover bg-no-repeat h-[100%]"></div>
        <div className="bg-[url(/images/header/bg-header-top.jpg)] h-[60px] mt-auto"></div>

        {/* Блок меню  */}
        <div className="absolute h-screen top-0 bottom-0 left-0 right-0 z-10">
          <div className="max-w-maxWidth mx-auto h-[100%] pl-40">
            <div
              className="bg-[rgba(0,0,0,0.7)] w-[745px] h-[100%] flex flex-col text-white 
                            shadow-[0_0px_13px_3px_rgba(0,0,0,0.5)]"
            >
              <div className="h-[135px] flex items-center pl-16">
                <Link href={"/"} className="hover:opacity-90">
                  <Image src={ImgLogotype} alt="" />
                </Link>
              </div>
              <div className="h-[100%] flex items-center">
                <div className="w-full">
                  <h1 className="text-7xl font-black border-b border-white pb-4 mx-20">
                    КАФЕ-БАР
                  </h1>
                  <div className="flex flex-col gap-6 mt-20 w-full">
                    {/* Item menu */}
                    {DataMenuItems?.map((item) => {
                      return (
                        <div
                          key={item.id}
                          className="flex justify-between items-center cursor-pointer py-2 px-20
                                      group/item hover:bg-[rgba(255,255,255,0.2)] transition"
                        >
                          <div className="flex flex-col gap-1 text-4xl font-light uppercase">
                            {item.title}
                            <span className="text-[#A8A8A8] text-lg normal-case">
                              {item.description}
                            </span>
                          </div>
                          <div className="group-hover/item:translate-x-[-20px] transition">
                            <Button
                              isIconOnly
                              variant="light"
                              as={Link}
                              href={item.description}
                            >
                              <Image src={ImgIconMenu} alt="" />
                            </Button>
                          </div>
                        </div>
                      );
                    })}
                    {/* End Item menu */}
                  </div>
                </div>
              </div>
              <div className="h-[60px] mt-auto"></div>
            </div>
          </div>
        </div>
        {/* Блок меню  */}
      </header>
    </NextUIProvider>
  );
}
