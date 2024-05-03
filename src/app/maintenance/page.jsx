import React from 'react';
import Countdown from './countdown';
import { Meteors } from '@/components/aceternity-ui/Meteors';
import { customServerFetchWithoutAuth } from '@/lib/api';
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";

const MaintenancePage = async () => {

	const allMedias = await Promise.all([
		customServerFetchWithoutAuth('/api/medias/by_filename/akass-duck-6633fa247c91e755937751.jpg', 'GET'),
		customServerFetchWithoutAuth('/api/medias/by_filename/vee-duck-6633fa2481606651886378.jpg', 'GET'),
		customServerFetchWithoutAuth('/api/medias/by_filename/priyesh-duck-6633fa247f1ad637165946.jpg', 'GET'),
		customServerFetchWithoutAuth('/api/medias/by_filename/ramhit-duck-6633fa2480535309587314.jpg', 'GET')		
	]).then(async (responses) => {
		// Assuming responses are already parsed as JSON in the customServerFetchWithoutAuth function
		return [
			await responses[0].json(),
			await responses[1].json(),
			await responses[2].json(),
			await responses[3].json(),
		]
	}).catch(error => {
		console.error("Error fetching data:", error);
	});

	const MemberListData = [
		{
			name: "Akass",
			role: "CAPTAIN QUACK/NAVIGATOR"  // Changed from PROJECT MANAGER/TESTER
		},
		{
			name: "Vee",
			role: "CAPTAIN QUACK/NAVIGATOR"  // Changed from PROJECT MANAGER/TESTER
		},
		{
			name: "Nihil",
			role: "QUACK-END/SHIP'S ENGINEER"  // Changed from BQUACK-END/DEVOPS
		},
		{
			name: "Ramhit",
			role: "FEATHERY FULL-QUACK"  // Changed from FULL-QUACK
		}

	]

	return (
		<div className="maintenance-page w-screen min-h-screen dark:bg-black">
			<div className="h-screen w-full flex flex-col p-8 lg:p-16 lg:flex-row gap-y-10 lg:gap-x-28 lg:gap-y-0">
				<div className='border-black border-2 rounded-3xl w-full lg:w-1/2 h-full flex flex-col gap-y-3 justify-center items-center relative'>
					<div className="meteors-wrapper absolute top-0 h-full w-full overflow-hidden">
						<Meteors/>
					</div>
					<div className="logo-wrapper animate-bounce w-28 overflow-hidden aspect-square relative">
						<img className='w-full object-contain rounded-lg' loading='lazy' src={`${process.env.NEXT_PUBLIC_APP_URL}/images/logo.png`} alt="puddle pirates logo"/>
					</div>
					<h1 className='text-xl lg:text-5xl font-bold'>Website Coming Soon...</h1>
					<span className='w-5/6 text-sm lg:text-xl text-center'>Our ducks are busy lining up in a row to bring you a splash of innovation. Stay tuned as we paddle towards launch!</span>
					<span className='text-2xl lg:text-4xl font-bold'><Countdown /></span>
				</div>
				<div className='w-full lg:w-1/2 h-full flex justify-center items-center rounded-3xl overflow-hidden'>
					<video autoPlay className='h-full object-cover object-[40%_center]' loop muted src={`${process.env.NEXT_PUBLIC_APP_URL}/videos/maintenance.mp4`}/>
				</div>
			</div>

			{/* TODO -- MEET OUR CODE QUACKERS */}
			<div className="min-h-screen w-full flex gap-x-28 p-16 items-center flex-col">
				<span className='font-bold text-3xl w-full text-center'>MEET OUR CODE QUACKERS</span>
				<div className="code-quackers-list grid grid-cols-1 lg:grid-cols-2 w-1/2 gap-y-10 justify-around justify-items-center mt-10">
					{ allMedias && allMedias?.map((media, index) => (
						<Card
							isFooterBlurred
							className="group/code-quakers-card rounded-full w-80"
							key={index}
						>
							<img
								alt="Woman listing to music"
								className="object-cover"
								src={media?.media_original}
							/>
							<CardFooter className="flex-col ease-in-out justify-center transition-all bg-gradient-to-r from-cyan-500/55 to-blue-500/55 h-full w-full overflow-hidden py-1 absolute -bottom-full group-hover/code-quakers-card:bottom-0 group-focus/code-quakers-card:bottom-0 z-10">
								<p className="text-center text-slate-100 text-3xl font-extrabold w-full text-black/80">{MemberListData[index].name}</p>
								<p className="text-center text-slate-100 text-md font-extrabold w-full text-black/80">{MemberListData[index].role}</p>
							</CardFooter>
						</Card>
					)) }

				</div>
			</div>
		</div>
	)
}

export default MaintenancePage;