"use client";

import { cn } from "@/lib/utils";
import ImgLogotype from "@/public/images/header/logotype-header.png";
import Image from "next/image";
import { FooterMenu } from "./footer-menu";
import Link from "next/link";
import BzCekh from "@/public/images/logo-bzcekh.svg";
import { Button } from "@nextui-org/react";

export function Footer({ className }: { className?: string }) {
  return (
    <>
      <section
        className={cn(
          " bg-[#464340] mt-auto flex items-center justify-center mb-[80px]",
          "md:mb-0",
          className,
        )}
      >
        <div className="max-w-maxWidth mx-auto flex items-center justify-center py-5">
          <div>
            <Image
              src={ImgLogotype}
              alt=""
              className="w-[290px] sm:w-[302px]"
            />
            <div className="my-5 w-full max-w-[320px] text-xs text-gray-400 text-left mx-auto">
              <hr className="mb-3" />
              <p>
                ИНДИВИДУАЛЬНЫЙ ПРЕДПРИНИМАТЕЛЬ: <strong>СУЛАЙМАНОВ АЗАТ</strong>
              </p>
              <p>
                ИНН: <strong>300003076800</strong>
              </p>
              <p>
                ОГРНИП: <strong>324300000011902</strong>
              </p>
              <p>
                Телефон: <strong>+7(999) 241-77-79</strong>
              </p>
              <p>
                Почтовый&nbsp;адрес:{" "}
                <strong>
                  414056, г.&nbsp;Астрахань, ул.&nbsp;Татищева&nbsp;43а
                </strong>
              </p>
              <p>
                Эл. почта: <strong>azat180494@list.ru</strong>
              </p>
              <hr className="mt-3" />
            </div>

            <div
              className="flex f-full max-w-[500px] justify-between items-center flex-row gap-3 mt-8
                          md:flex-row"
            >
              <span className="text-white">Copyrights © 2024</span>
              <Button className="bg-transparent py-7 pl-0 w-24 opacity-80 hover:opacity-100 transition">
                <Link
                  href="https://bzcekh.ru"
                  target="_blank"
                  title="изготовление интернет сайтов и интернет магазинов"
                >
                  <Image src={BzCekh} alt="Рекламное агентство «Бизнес Цех»" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <FooterMenu />
    </>
  );
}
