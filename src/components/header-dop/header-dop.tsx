import { cn } from "@/lib/utils";
import { useState } from "react";
import { HeaderPhone } from "../header/header-phone";
import { HeaderBasket } from "../header/header-basket";
import { HeaderMobMenu } from "../header/header-mob-menu";

export function HeaderDop() {
  const [isShowDopMenu, setIsShowDopMenu] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    if (scrollPosition > 150) {
      setIsShowDopMenu(true);
    } else {
      setIsShowDopMenu(false);
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleScroll, { passive: true });
  }

  return (
    <>
      <div
        className={cn(
          " h-[70px] py-2 px-10 bg-white top-0 w-full right-0 fixed left-0 shadow-lg z-50 transition-[transform_1s_linear]",
          "hidden tablet:block",
          isShowDopMenu ? "translate-y-0" : "translate-y-[-150px]",
        )}
      >
        <div
          className="max-w-maxWidth w-full mx-auto h-full flex flex-col items-center
                    md:flex-row md:justify-between md:items-center"
        >
          <HeaderMobMenu />

          <div className="flex gap-8">
            <div className="flex items-center h-full xl:hidden">
              <HeaderBasket />
            </div>
            <HeaderPhone />
          </div>
        </div>
      </div>
    </>
  );
}
