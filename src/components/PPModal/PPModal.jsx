import React from 'react';
import {
	Modal, 
	ModalContent, 
} from "@nextui-org/modal";
import {Button} from "@nextui-org/button";
import { cloneWithButtonPress } from './helper';
import { useDisclosure } from '@nextui-org/react';

const PPModal = ({ children, customTrigger, defaultButtonContent = "Quack Open" }) => {
	const {isOpen, onOpen, onOpenChange} = useDisclosure();

	return (
		<>
			{ 
				customTrigger ? (
					cloneWithButtonPress(customTrigger, onOpen)
				) : (
					<Button onPress={onOpen}>{defaultButtonContent}</Button>
				)
			}
			
			<Modal isOpen={isOpen} backdrop='blur' onOpenChange={onOpenChange}>
				<ModalContent className='h-[40rem]'>
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