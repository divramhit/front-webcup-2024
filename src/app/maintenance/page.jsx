'use client';
import React from 'react';

const MaintenancePage = () => {
	return (
		<div className="maintenance-page w-screen min-h-screen">
			<div className="h-screen w-full flex gap-x-28 p-16">
				<div className='border-black border-2 w-1/2 h-full flex justify-center items-center'>
					TEXT HERE
				</div>
				<div className='border-black border-2 w-1/2 h-full flex justify-center items-center rounded-3xl overflow-hidden'>
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