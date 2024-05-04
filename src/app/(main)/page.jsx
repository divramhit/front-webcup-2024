"use client"

import { TracingBeamDemo } from "@/components/aceternity-ui/TracingBeamDemo";
import PPButton from "@/components/PPButton/PPButton";
import PPSectionBlock from "@/components/PPSectionBlock/PPSectionBlock";
import { HeroHighlightDemo } from "@/components/aceternity-ui/HeroHighlightDemo";
import { HeroHighlight } from "@/components/baseAceternityUi/hero-highlight/hero-highlight";

const Home = () => {
    return (
		<div className="w-100 overflow-hidden">
			{/* <PPButton/> */}
			<PPSectionBlock className={`absolute top-0`}>
				<HeroHighlight className={`max-h-full overflow-y-scroll`}>
					<TracingBeamDemo/>
				</HeroHighlight>
			</PPSectionBlock>
			
		</div>
    )
}

export default Home;