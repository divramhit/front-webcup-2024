import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { ContactUsForm } from "./ContactUsForm";

export default function ContactUsModal() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Contact Us</ModalHeader>
              <ModalBody>
                <ContactUsForm />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Submit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

