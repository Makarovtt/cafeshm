import { cn } from "@/lib/utils";
import { Button } from "@nextui-org/react";
import { X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type CatGoods = {
  id: string;
  title: string;
  url: string;
  order_categories: string;
};

export function VitrinaMobileMenu({
  catGoods,
  title,
}: {
  catGoods: CatGoods[];
  title: string;
}) {
  const [isShowModalMenu, setIsShowModalMenu] = useState(false);

  if (typeof window !== "undefined") {
    isShowModalMenu
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }

  return (
    <>
      <div
        className=" sticky top-0 z-30 bg-white text-center py-2 shadow-lg
                    md:hidden"
      >
        <Button variant="bordered" onClick={() => setIsShowModalMenu(true)}>
          {title}
        </Button>
      </div>
      <div
        className={cn(
          "fixed bg-white w-full h-[100vh] z-100 right-0 top-0 pt-14 px-10 shadow-xl transition overflow-y-auto pb-8",
          "md:w-[400px]",
          isShowModalMenu ? "translate-x-0" : "translate-x-[100%]",
        )}
      >
        <h2>{title}</h2>
        <hr className="mb-5" />
        <div className="flex flex-col gap-3">
          {catGoods?.map((item) => {
            return (
              // <DropdownItem key={item.id}>
              <Button
                as={Link}
                href={`#cat-${item.id}`}
                key={item.id}
                onClick={() => setIsShowModalMenu(false)}
              >
                {item.title}
              </Button>
              // </DropdownItem>
            );
          })}
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
