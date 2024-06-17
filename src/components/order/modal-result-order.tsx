import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Button,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
export function ModalResultOrder({
  isOpen,
  onOpenChange,
  checkResultOrder,
  errorText,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
  checkResultOrder: boolean;
  errorText?: string;
}) {
  const router = useRouter();
  function onCloseModal() {
    router.push("/");
  }
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => {
            setTimeout(onCloseModal, 5000);
            return (
              <>
                {/* <ModalHeader className="flex flex-col gap-1">Заказ</ModalHeader> */}
                <ModalBody>
                  {checkResultOrder ? (
                    <div className=" text-green-800">
                      Заказ Оформлен. Ожидайте
                    </div>
                  ) : (
                    <div className="text-red-800">{errorText}</div>
                  )}
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onPress={onClose}>
                    Закрыть
                  </Button>
                </ModalFooter>
              </>
            );
          }}
        </ModalContent>
      </Modal>
    </>
  );
}
