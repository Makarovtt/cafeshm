import { cn } from "@/lib/utils";
import { Button } from "@nextui-org/react";

type Props = {
  text: string;
  className?: string;
};

export function UiMyButton({ text, className }: Props) {
  return (
    <Button
      className={cn(className, "bg-red-500 text-white font-semibold text-lg")}
    >
      {text}
    </Button>
  );
}
