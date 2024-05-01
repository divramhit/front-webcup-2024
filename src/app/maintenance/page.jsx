import React from 'react';
import Countdown from './countdown';

const MaintenancePage = () => {
	return (
		<div className="maintenance-page w-screen min-h-screen dark:bg-black">
			<div className="h-screen w-full flex flex-col p-8 lg:p-16 lg:flex-row gap-y-10 lg:gap-x-28 lg:gap-y-0">
				<div className='border-black border-2 w-full lg:w-1/2 h-full flex flex-col justify-center items-center'>
					<h1 className='text-xl lg:text-5xl font-bold'>Website Coming Soon...</h1>
					<span className='w-3/4 text-center'>Our ducks are busy lining up in a row to bring you a splash of innovation. Stay tuned as we paddle towards launch!</span>
					<span><Countdown /></span>
				</div>
				<div className='w-full lg:w-1/2 h-full flex justify-center items-center rounded-3xl overflow-hidden'>
					<video autoPlay className='h-full object-cover object-[40%_center]' loop muted src={`${process.env.NEXT_PUBLIC_APP_URL}${process.env.NEXT_PUBLIC_BASE_PATH}/videos/maintenance.mp4`}/>
				</div>
			</div>
			<div className="h-screen w-full flex gap-x-28 p-16">
				MEET OUR CODE QUACKERS
			</div>
		</div>
	)
}

export default MaintenancePage;