import Image from "next/image";
import Link from "next/link";
import IconPhone from "@/public/images/header/icon_phone-header.svg";
import { Phone } from "lucide-react";
import { Button } from "@nextui-org/react";

export function HeaderPhoneMobileMenu() {
  return (
    <Button
      as={Link}
      href={"tel:996696"}
      className="flex flex-row items-center gap-2 text-md font-semibold text-gray-700 bg-[rgba(255,255,255,0.7)] rounded-lg
                  md:text-lg
                    lg:text-2xl"
    >
      <Phone className="w-5 md:w-8" />
      999-696
    </Button>
  );
}
