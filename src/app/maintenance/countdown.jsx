'use client';
import React, { useState, useEffect } from 'react';
// const maintenanceEnd = new Date(2023, 4, 7, 10, 0, 0); // May 17th, 2023 at 10:30:00 AM
const Countdown = ({ deadline = new Date(2024, 4, 5, 11, 0, 0)}) => {
	const [timeLeft, setTimeLeft] = useState(deadline.getTime() - new Date().getTime());

	useEffect(() => {
		const interval = setInterval(() => {
			setTimeLeft(deadline.getTime() - new Date().getTime());
		}, 1000);
		return () => clearInterval(interval);
	}, [deadline]);
	
	const formatTimeLeft = (time) => {
		const hours = Math.floor(time / (1000 * 60 * 60));
		const minutes = Math.floor((time / (1000 * 60)) % 60);
		const seconds = Math.floor((time / 1000) % 60);

		const hoursString = hours > 0 ? `${hours}h ` : '';
		const minutesString = minutes > 0 ? `${minutes}m ` : '';
		const secondsString = `${seconds}s`;

		return `${hoursString}${minutesString}${secondsString}`;
	};
	return (
		<div className="countdown-wrapper">
			{formatTimeLeft(timeLeft)}
		</div>
	)
}

export default Countdown;