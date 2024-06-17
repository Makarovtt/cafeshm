import Image from "next/image";
import Link from "next/link";
import ImgLogotype from "@/public/images/header/logotype.png";
import { cn } from "@/lib/utils";

export function HeaderLogo({
  className,
  alignment,
}: {
  className?: string;
  alignment?: string;
}) {
  return (
    <div
      className={cn(
        "h-auto",
        "items-center pl-2",

        className,
      )}
    >
      <Link
        href={"/"}
        className={cn(
          "hover:opacity-90 flex  justify-center my-1",
          "md:mx-4",
          alignment === "vertically"
            ? "flex-col items-center gap-3 mb-10"
            : "flex-row items-end gap-2",
        )}
      >
        <Image
          src={ImgLogotype}
          alt=""
          className="w-[80px] lg:w-[80px]"
          unoptimized
        />
        <span
          className="flex flex-col gap-0.5 justify-center items-center  text-gray-800
                        "
        >
          <span className="font-semibold">сеть кафе с 2012 года</span>
          <span
            className="text-xl font-bold
                          md:text-2xl"
          >
            ШАШЛЫЧНЫЙ МИР
          </span>
        </span>
      </Link>
    </div>
  );
}
