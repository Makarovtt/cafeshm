"use client";

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";
import { ShoppingBasket } from "lucide-react";
import { useAppSelector } from "@/redux/hooks";
import { VitrinaBasket } from "../vitrina/vitrina-basket";

export function HeaderBasket() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const basketInfo = useAppSelector((state) => state.basketReducer);
  function sumBasketPrice() {
    let sum = 0;
    basketInfo.map((item) => {
      sum += item.price * item.quantity;
    });
    return sum + "₽";
  }
  return (
    <>
      {basketInfo && (
        <>
          <Button
            size="md"
            onPress={onOpen}
            className="bg-gray-900 text-white font-semibold text-sm px-1 
                      md:text-lg md:px-4"
          >
            <ShoppingBasket className="w-5 md:w-8" />
            {sumBasketPrice()}
          </Button>

          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalBody>
                    <VitrinaBasket className={"mt-0"} />
                  </ModalBody>
                </>
              )}
            </ModalContent>
          </Modal>
        </>
      )}
    </>
  );
}
