import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import IconPhone from "@/public/images/header/icon_phone-header.svg";
import { cn } from "@/lib/utils";
import { HeaderMainLogo } from "./header-main-logo";

export function HeaderTop({ className }: { className?: string }) {
  return (
    <>
      <HeaderMainLogo className={cn(className)} />
      <div
        className="max-w-maxWidth h-auto flex justify-center gap-3 items-end relative z-[5] px-5
                    mb-4 flex-row-reverse
                           md:flex-col md:h-full
                          
                          xl:flex-row xl:gap-20 xl:items-center xl:justify-end"
      >
        <Button
          as={Link}
          href="/menu-out-side"
          className="bg-[red] shadow text-white text-md font-semibold px-2
                        md:text-xl md:px-5"
        >
          Онлайн заказ
        </Button>
        <Link
          href={"tel:999696"}
          className="flex flex-row items-center gap-2 text-2xl font-bold whitespace-nowrap
                          lg:text-3xl"
        >
          <Image
            src={IconPhone}
            alt=""
            className="w-[28px] 
                           lg:w-[35px]"
          />
          999-696
        </Link>
      </div>
    </>
  );
}
