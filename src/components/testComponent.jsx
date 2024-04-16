'use client'

import React, { useEffect, useState } from 'react';
import handleNotification from '@/utils/helpers/handleNotification';
import { takePicture } from '@/utils/helpers/takePicture';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { saveMessagingDeviceToken } from '@/firebase/messaging';
import { getMessaging, onMessage } from 'firebase/messaging';
import { Button } from '@nextui-org/react';
import Image from "next/image";

const TestComponent = () => {
	const [showImage, setShowImage] = useState(null);

	useEffect(() => {
		// Call the element loader after ensuring we're on the client side
		defineCustomElements(window);

		const messaging = getMessaging();
		onMessage(messaging, (payload) => {
			console.log('Message received. ', payload);
			// ...
		});
	}, []);

	useEffect(() => {
		if (showImage)
		{
			handleNotification("Picture Taken", showImage);
		}
	}, [showImage])

	const handleTakePicture = async() => {
		takePicture().then((imgUrl) => {
			setShowImage(imgUrl);
		})
	}

	const handleFCM = () => {
		saveMessagingDeviceToken(null);
	}

	return (
		<>
			<Button className="bg-black text-white p-3 m-3 rounded-2xl" onClick={handleFCM}>TEST FCM</Button>
			<Button className="bg-black text-white p-3 m-3 rounded-2xl" onClick={handleNotification}>Show Notification</Button>
			<Button className="bg-black text-white p-3 m-3 rounded-2xl" onClick={handleTakePicture}>Take Picture</Button>
			{
				showImage && (
					<Image src={showImage} width={100} height={100} alt="nothing"/>
				)
			}
		</>

	);
}

export default TestComponent;