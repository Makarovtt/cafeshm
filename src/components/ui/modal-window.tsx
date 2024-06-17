import { cn } from "@/lib/utils";

export function ModalWindow({
  isShow,
  setIsShow,
  widthModal,
  heightModal,
  children,
}: {
  isShow: boolean;
  setIsShow: (arg0: boolean) => void;
  widthModal: string;
  heightModal: string;
  children: React.ReactNode;
}) {
  if (typeof window !== "undefined") {
    isShow
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }
  return (
    <div
      className={cn(
        "bg-[rgba(0,0,0,0.8)] fixed z-[55] top-0 bottom-0 left-0 right-0",
        "justify-center items-center",
        isShow ? "flex" : "hidden",
      )}
      onClick={() => setIsShow(false)}
    >
      <div
        className={cn(
          "rounded-lg p-5 flex flex-col shadow-[0_0_25px_rgba(0,0,0,0.8)] relative bg-white",
          `w-[${widthModal}]`,
          `h-[${heightModal}]`,
        )}
      >
        {children}
      </div>
    </div>
  );
}
