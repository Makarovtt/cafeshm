"use client";

import { cn } from "@/lib/utils";
import {
  Button,
  CircularProgress,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { Check, Plus } from "lucide-react";
import Image from "next/image";
import { ModalWindow } from "../ui/modal-window";
import { useState } from "react";

type Goods = {
  id: string;
  category: string;
  category_url: string;
  picture: string;
  picture_big?: string;
  description: string;
  title: string;
  price: string;
  portion: string;
  min_portion: string;
  unit: string;
  order_goods: string;
};

export function VitrinaItemProduct({
  itemProduct,
  putToBasket,
  check,
}: {
  itemProduct: Goods;
  putToBasket: (arg0: Goods) => void;
  check: boolean;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <div
        className="bg-white rounded-lg p-2 flex flex-col
                                        md:p-4"
      >
        <div className="relative w-full h-[250px] rounded-lg flex justify-center items-center overflow-hidden">
          <Image
            src={itemProduct.picture}
            alt=""
            fill
            placeholder="blur"
            blurDataURL="/images/preloader-img.svg"
            className="object-cover w-full h-full cursor-pointer"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onClick={onOpen}
          />
        </div>
        <div className="text-lg mt-4">{itemProduct.title}</div>
        <div className="text-md my-4 text-gray-600 font-light">
          {itemProduct.description}
        </div>
        <div className="mt-auto">
          <div className="text-md my-4 text-gray-800 font-light flex justify-between">
            <span>
              Цена за {itemProduct.portion} {itemProduct.unit}{" "}
            </span>
            <span className="text-xl font-semibold text-gray-600">
              {itemProduct.price}₽
            </span>
          </div>
          <div className="flex justify-center">
            {check ? (
              <Button
                className="w-full text-white font-semibold text-lg"
                color="success"
                onClick={() => putToBasket(itemProduct)}
              >
                <Check />В заказе
              </Button>
            ) : (
              <Button
                className=""
                color="default"
                onClick={() => putToBasket(itemProduct)}
              >
                <Plus /> Добавить
              </Button>
            )}
          </div>
        </div>
      </div>
      <Modal
        size="5xl"
        isOpen={isOpen}
        onClose={onClose}
        classNames={{
          base: "h-[80vh] w-[100vw]",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {itemProduct.title}
              </ModalHeader>
              <ModalBody>
                <div className="relative h-full flex justify-center items-center overflow-hidden">
                  <Image
                    src={
                      itemProduct.picture_big
                        ? itemProduct.picture_big
                        : itemProduct.picture
                    }
                    alt=""
                    fill
                    placeholder="blur"
                    blurDataURL="/images/preloader-img.svg"
                    className="object-contain max-w-full max-h-full cursor-pointer"
                    sizes="(max-width: 1900px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <p>{itemProduct.description}</p>
              </ModalBody>
              <ModalFooter>
                <div className="text-md my-4 text-gray-800 font-light flex justify-between gap-2 items-center">
                  <span>
                    Цена за {itemProduct.portion} {itemProduct.unit}{" "}
                  </span>
                  <span className="text-xl font-semibold text-gray-600">
                    {itemProduct.price}₽
                  </span>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
