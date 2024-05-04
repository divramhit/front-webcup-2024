"use client"

import { TracingBeamDemo } from "@/components/aceternity-ui/TracingBeamDemo";
import PPButton from "@/components/PPButton/PPButton";
import PPSectionBlock from "@/components/PPSectionBlock/PPSectionBlock";
import { HeroHighlight } from "@/components/baseAceternityUi/hero-highlight/hero-highlight";

const Home = () => {
    return (
		<div className="w-100 overflow-hidden relative">
			{/* <PPButton/> */}
			<PPSectionBlock className={`fixed top-0`}>
				<HeroHighlight className={`max-h-full`}>
				</HeroHighlight>
			</PPSectionBlock>
			<TracingBeamDemo/>
			
		</div>
    )
}

export default Home;