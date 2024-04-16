import { LocalNotifications } from '@capacitor/local-notifications';

const handleNotification = async( title = "Hello PWA", img = null) => {
	try {
        // Check if Local Notifications are supported by the Capacitor plugin
        const result = await LocalNotifications.checkPermissions();
		console.log("Permissions", result);
        console.log("SW Status", ServiceWorkerRegistration.active)

        if (result.display === 'granted') {
            // Schedule a local notification using Capacitor
            await LocalNotifications.schedule({
                notifications: [
                    {
                        title: "Hello",
                        body: "This is a local notification",
                        id: 1,
                    },
                ],
            });
        } else if (result.display === 'prompt') {
			await LocalNotifications.requestPermissions();
		}
    } catch (error) {
        console.error("TEST");

		Notification.requestPermission().then((result) => {
			if (result === "granted") {
				navigator.serviceWorker.ready.then((registration) => {
					registration.showNotification(title, {
						body: "Buzz! Buzz!",
						vibrate: [200, 100, 200, 100, 200, 100, 200],
						tag: "vibration-sample",
						image: img || null
					});
				});
			}
		});
    }
};

export default handleNotification;