import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import ImgIconMenu from "@/public/images/header/corner-menu.svg";
import { cn } from "@/lib/utils";

type Props = {
  id: number;
  title: string;
  description?: string;
  href: string;
};

export function HeaderMenu({
  DataMenuItems,
  className,
}: {
  DataMenuItems: Props[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "h-[100%] items-center bg-[rgba(0,0,0,0.7)] shadow-[3px_0_7px_1px_rgba(0,0,0,0.5)]",
        "lg:bg-none lg:shadow-none",
        className,
      )}
    >
      <div className="w-full">
        <h1
          className="text-4xl font-semibold text-white border-b border-white pb-4 mx-5
                    md:mx-20
                     "
        >
          КАФЕ-БАР
        </h1>
        <div className="flex flex-col mt-2 w-full gap-1">
          {/* Item menu */}
          {DataMenuItems?.map((item) => {
            return (
              <Link
                href={item.href}
                key={item.id}
                className="flex justify-between items-center cursor-pointer py-2 pl-5 pr-2
                                      group/item bg-[rgba(255,255,255,0.1)] transition
                                    md:px-20
                                     lg:bg-[rgba(255,255,255,0)] lg:hover:bg-[rgba(255,255,255,0.2)]"
              >
                <div className="flex flex-col gap-1 text-2xl text-white font-light uppercase">
                  {item.title}
                  <span
                    className="text-[#A8A8A8] text-sm normal-case
                                  "
                  >
                    {item.description}
                  </span>
                </div>
                <Button
                  isIconOnly
                  variant="light"
                  className="group-hover/item:translate-x-[-20px] transition"
                >
                  <Image src={ImgIconMenu} alt="" />
                </Button>
              </Link>
            );
          })}
          {/* End Item menu */}
        </div>
      </div>
    </div>
  );
}
