import { cn } from "@/lib/utils";
import ImgLogotype from "@/public/images/header/logotype-header.png";
import Image from "next/image";
import { FooterMenu } from "./footer-menu";

export function Footer({ className }: { className?: string }) {
  return (
    <>
      <section
        className={cn(
          " bg-[#464340] mt-auto h-36 flex items-center justify-center mb-[80px]",
          "md:mb-0",
          className,
        )}
      >
        <div className="max-w-maxWidth mx-auto flex items-center justify-center">
          <Image src={ImgLogotype} alt="" className="w-[290px] sm:w-[302px]" />
        </div>
      </section>
      <FooterMenu />
    </>
  );
}
