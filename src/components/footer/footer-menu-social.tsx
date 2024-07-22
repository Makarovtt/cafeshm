import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";
import { SvgOperator } from "./svg-operator";
import { SvgWhatsapp } from "./svg-whatsapp";
import Image from "next/image";
import { SvgPhone } from "./svg-phone";
import Link from "next/link";

export function FooterMenuSocial() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button
        className="w-[40px] h-[40px] bg-green-600 rounded-full py-1"
        onPress={onOpen}
      >
        <SvgOperator className="text-white" />
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <div className="flex flex-col gap-3 items-start my-10">
                  <Button
                    as={Link}
                    href="https://wa.me/79272814789?text=%F0%9F%91%8B%20"
                    className="bg-gray-100"
                    startContent={
                      <SvgWhatsapp className=" text-green-500 w-7 h-6" />
                    }
                  >
                    WhatsApp
                  </Button>
                  <Button
                    as={Link}
                    href="https://t.me/+79272814789"
                    className="bg-gray-100"
                    startContent={
                      <Image
                        src="/images/social-btn/icon-telegram.svg"
                        width={24}
                        height={24}
                        alt=""
                      />
                    }
                  >
                    Telegram
                  </Button>
                  <Button
                    as={Link}
                    href="tel:999696"
                    className="bg-gray-100"
                    startContent={
                      <SvgPhone className=" text-green-600 w-7 h-7 mt-1" />
                    }
                  >
                    Позвонить оператору
                  </Button>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
