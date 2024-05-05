import React, { useEffect } from 'react';
import {
	Modal, 
	ModalContent, 
} from "@nextui-org/modal";
import {Button} from "@nextui-org/button";
import { cloneWithButtonPress } from './helper';
import { useDisclosure } from '@nextui-org/react';

const PPModal = ({ children, customTrigger, defaultButtonContent = "Quack Open", manualOpen=false }) => {
	const {isOpen, onOpen, onOpenChange} = useDisclosure();
	useEffect(() => {
		if (manualOpen) onOpen(true);
	}, [])
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
				<ModalContent className='h-[70vh] lg:h-[40rem]'>
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