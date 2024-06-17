import { cn } from "@/lib/utils";
import { Button } from "@nextui-org/react";
import Link from "next/link";

type Props = {
  text: string;
  href: string;
  className?: string;
};

export function UiMyButton({ text, href, className }: Props) {
  return (
    <Button
      as={Link}
      href={href}
      className={cn(className, "bg-red-500 text-white font-semibold text-lg")}
    >
      {text}
    </Button>
  );
}
