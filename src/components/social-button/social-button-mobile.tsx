"use client";

import Image from "next/image";
import ImgOperator from "@/public/images/social-btn/operator__icon.svg";
import { useState } from "react";
import { cn } from "@/lib/utils";

function SocialButtonMobile({ className }: { className?: string }) {
  const [isShow, setIsShow] = useState(false);
  function click() {
    setIsShow((prev) => !prev);
  }
  return (
    <div
      className={cn(
        "fixed right-[10px] bottom-[10px] flex-col items-end w-[60px] h-[60px] transition z-10",
        "hover:w-auto hover:h-auto cursor-pointer",
        className,
      )}
    >
      <ul
        className={cn(
          "flex flex-col items-end absolute right-[13px] transition-all ease list-none p-0 m-0",
          isShow
            ? "visible relative top-auto bottom-[20px]"
            : "invisible absolute top-[500px]",
        )}
      >
        <li
          className={cn(
            "flex items-center my-[4px] mx-0 ",
            "transition-all hover:scale-110",
            isShow
              ? "opacity-100 visible transform-[scaleX(1)_scaleY(1)_translateY(0)]"
              : "opacity-0 invisible  transform-[scaleX(0.4)_scaleY(0.4)_translateY(150px)]",
          )}
        >
          <a
            href="tel:+89881728776"
            className="text-[12px] bg-[rgba(0,0,0,0.8)] 
                      text-white no-underline p-[10px] rounded-[30px]"
          >
            Позвонить на горячую линию
          </a>
          <a
            href="tel:+89881728776"
            className="w-[44px] h-[44px] rounded-[50%] flex items-center justify-center ml-[10px] bg-cyan-600"
          >
            <Image
              src="/images/social-btn/phone__icon.svg"
              width={20}
              height={20}
              alt=""
            />
          </a>
        </li>

        <li
          className={cn(
            "flex items-center my-[4px] mx-0 ",
            "transition-all hover:scale-110",
            isShow
              ? "opacity-100 visible transform-[scaleX(1)_scaleY(1)_translateY(0)]"
              : "opacity-0 invisible  transform-[scaleX(0.4)_scaleY(0.4)_translateY(150px)]",
          )}
        >
          <a
            href="https://wa.me/89881728776"
            className="text-[12px] bg-[rgba(0,0,0,0.8)] 
                                                text-white no-underline p-[10px] rounded-[30px]"
            target={"_blank"}
            rel="noreferrer"
          >
            Написать в Whatsapp
          </a>
          <a
            href="https://wa.me/89881728776"
            className="w-[44px] h-[44px] rounded-[50%] flex items-center justify-center ml-[10px] bg-green-600"
            target={"_blank"}
            rel="noreferrer"
          >
            <Image
              src="/images/social-btn/whatsapp__icon.svg"
              width={21}
              height={21}
              alt=""
            />
          </a>
        </li>
      </ul>
      <div
        className="w-[60px] h-[60px] bg-[#4af171] rounded-[50%] flex items-center justify-center opacity-90
      transition-[all_200ms_ease-out] animate-[animationbutton_3s_linear_infinite]"
        onClick={click}
      >
        <Image
          src={ImgOperator}
          alt="иконка Оператора"
          width="50"
          height="50"
          // fill="green"
        />
      </div>
    </div>
  );
}

export default SocialButtonMobile;
