import Image from "next/image";
import Link from "next/link";
import ImgLogotype from "@/public/images/header/logotype.png";
import { cn } from "@/lib/utils";

export function HeaderMainLogo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "h-auto",
        "md:h-[135px] items-center pl-2",
        "md:pl-16 hidden",
        className,
      )}
    >
      <Link
        href={"/"}
        className="hover:opacity-90 flex items-end justify-center gap-2 my-4
                    md:mx-4"
      >
        <Image src={ImgLogotype} alt="" className="w-[80px] lg:w-[100px]" />
        <span className="flex flex-col gap-1 justify-center items-center  text-gray-800">
          <span
            className="font-semibold
                          "
          >
            сеть кафе с 2012 года
          </span>
          <span
            className="text-xl font-bold
                        md:text-3xl 
                          "
          >
            ШАШЛЫЧНЫЙ МИР
          </span>
        </span>
      </Link>
    </div>
  );
}
