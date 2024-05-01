'use client';
import React, { useState, useEffect } from 'react';
const Countdown = () => {
	const deadline = new Date(2024, 4, 5, 11, 0, 0)
	const [timeLeft, setTimeLeft] = useState();

	useEffect(() => {
		const interval = setInterval(() => {
			setTimeLeft(deadline.getTime() - new Date().getTime());
		}, 1000);
		return () => clearInterval(interval);
	}, []);
	
	const formatTimeLeft = (time) => {
		const hours = Math.floor(time / (1000 * 60 * 60));
		const minutes = Math.floor((time / (1000 * 60)) % 60);
		const seconds = Math.floor((time / 1000) % 60);

		const hoursString = hours > 0 ? `${hours}h ` : ' 00h';
		const minutesString = minutes > 0 ? `${minutes}m ` : ' 00m';
		const secondsString = isNaN(seconds) ? ' 00s' : `${seconds}s`;

		return `${hoursString}${minutesString}${secondsString}`;
	};
	return (
		<div className="countdown-wrapper">
			{formatTimeLeft(timeLeft)}
		</div>
	)
}

export default Countdown;