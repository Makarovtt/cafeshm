"use client";

import { Button } from "@nextui-org/react";
import { HeaderMobMenu } from "../header/header-mob-menu";
import { HeaderBasket } from "../header/header-basket";
import { HeaderPhone } from "../header/header-phone";
import { FooterMenuSocial } from "./footer-menu-social";

export function FooterMenu() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 h-[80px] bg-gray-100 py-4 shadow-[0_-10px_10px_2px_rgba(0,0,0,0.3)] z-50
                            flex justify-between items-center px-5
                            sm:px-4
                            tablet:hidden"
    >
      <div>
        <HeaderMobMenu />
      </div>
      <div>
        <HeaderBasket />
      </div>
      <div className="">
        <FooterMenuSocial />
      </div>
    </div>
  );
}
