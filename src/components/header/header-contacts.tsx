import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { HeaderBasket } from "./header-basket";
import { HeaderPhone } from "./header-phone";
import { List } from "lucide-react";
import { HeaderMobMenu } from "./header-mob-menu";

export function HeaderContacts({ className }: { className?: string }) {
  return (
    <div className="flex gap-4 items-end">
      <div className="hidden tablet:block">
        <HeaderMobMenu />
      </div>
      <div className="hidden h-full tablet:block xl:hidden">
        <HeaderBasket />
      </div>
      <div
        className={cn(
          "max-w-maxWidth h-auto flex justify-center gap-3 items-end relative px-5",
          "mb-4 flex-row-reverse",
          "md:flex-col md:mb-0",

          "xl:flex-row xl:gap-12 xl:items-center xl:justify-end",
          className,
        )}
      >
        <Button
          as={Link}
          href="/menu-out-side"
          className="bg-[red] shadow text-white text-md font-semibold px-2
                        md:text-xl md:px-5"
        >
          Онлайн заказ
        </Button>
        <div className="hidden tablet:block">
          <HeaderPhone />
        </div>
      </div>
    </div>
  );
}
