import ImgLogotype from "@/public/images/header/logotype-header.png";
import Image from "next/image";

export function Footer() {
  return (
    <section className=" bg-[#464340]">
      <div className="max-w-maxWidth mx-w flex items-center justify-center py-16">
        <Image src={ImgLogotype} alt="" />
      </div>
    </section>
  );
}
