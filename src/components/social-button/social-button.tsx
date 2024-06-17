import Image from "next/image";
import ImgOperator from "@/public/images/social-btn/operator__icon.svg";
import { cn } from "@/lib/utils";

function SocialButton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "fixed right-[30px] bottom-[20px] flex-col items-end w-[70px] h-[70px] transition z-[10]",
        "hover:w-auto hover:h-auto cursor-pointer group",
        className,
      )}
    >
      <ul
        className="flex flex-col items-end absolute right-[13px] top-[500px] invisible transition-[all_0.3s_ease] list-none p-0 m-0
      group-hover:relative group-hover:top-auto group-hover:bottom-[20px] group-hover:visible"
      >
        <li
          className="flex items-center my-[4px] mx-0 transform-[scaleX(0.4)_scaleY(0.4)_translateY(0)] opacity-0 invisible
                      transition-[all_0.3s_ease] hover:scale-110
                      group-hover:opacity-100 group-hover:visible group-hover:transform-[scaleX(1)_scaleY(1)_translateY(350px)]"
        >
          <a
            href="tel:+89881728776"
            className="text-[12px] bg-[rgba(0,0,0,0.8)] 
                                                text-white no-underline p-[10px] rounded-[30px]"
          >
            Написать в Telegram
          </a>
          <a
            href="tel:+89881728776"
            className="w-[44px] h-[44px] rounded-[50%] flex items-center justify-center ml-[10px] bg-cyan-600"
          >
            <Image
              src="/images/social-btn/icon-telegram.svg"
              width={28}
              height={28}
              alt=""
            />
          </a>
        </li>

        <li
          className="flex items-center my-[4px] mx-0 transform-[scaleX(0.4)_scaleY(0.4)_translateY(0)] opacity-0 invisible
                      transition-[all_0.3s_ease] hover:scale-110
                      group-hover:opacity-100 group-hover:visible group-hover:transform-[scaleX(1)_scaleY(1)_translateY(350px)]"
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
        className="w-[70px] h-[70px] bg-[#4af171] rounded-[50%] flex items-center justify-center opacity-90
      transition-[all_200ms_ease-out] animate-[animationbutton_3s_linear_infinite]
      group-hover:scale-110 group-hover:opacity-100"
      >
        <Image
          src={ImgOperator}
          alt="иконка Вотсап"
          width="50"
          height="50"
          // fill="green"
        />
      </div>
    </div>
  );
}

export default SocialButton;
