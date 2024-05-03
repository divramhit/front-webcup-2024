import React from 'react';
import {
	Modal, 
	ModalContent, 
} from "@nextui-org/modal";
import {Button} from "@nextui-org/button";
import { useDisclosure } from '@nextui-org/react';

const PPModal = ({ children, customTrigger, defaultButtonContent = "Quack Open" }) => {
	const {isOpen, onOpen, onOpenChange} = useDisclosure();

	return (
		<>
			{ 
				customTrigger ? (
					React.cloneElement(customTrigger, { onPress: onOpen })
				) : (
					<Button onPress={onOpen}>{defaultButtonContent}</Button>
				)
			}
			
			<Modal isOpen={isOpen} backdrop='blur' onOpenChange={onOpenChange}>
				<ModalContent>
					{(onClose) => (
						<>
							{ children }
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	)
}

export default PPModal;