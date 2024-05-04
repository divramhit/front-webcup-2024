import React from 'react'
import { ImagesSliderDemo } from "@/components/aceternity-ui/ImagesSliderDemo";
import PPSectionBlock from '@/components/PPSectionBlock/PPSectionBlock';

export default function Home() {
	return (
		<div className="w-100 h-screen snap-y snap-mandatory absolute top-0 z-0">
			<div className='snap-always snap-center'>
			<ImagesSliderDemo/>
			</div>
			
			<div className="blocks-container snap-always snap-center w-full">
				<PPSectionBlock>
					TEST
				</PPSectionBlock>
			</div>
		</div>
	);
}