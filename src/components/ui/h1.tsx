import { cn } from "@/lib/utils";

export function H1({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h1
      className={cn(
        "border-l-4 border-red-700 pl-4 uppercase text-2xl font-normal mt-10 mb-5",
        className,
      )}
    >
      {children}
    </h1>
  );
}
