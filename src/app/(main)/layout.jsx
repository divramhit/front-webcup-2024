import PPNavbar from "@/components/Navbar/PPNavbar";
import { getSession } from "@/actions/actions";
import PPSectionBlock from "@/components/PPSectionBlock/PPSectionBlock";
import { HeroHighlight } from "@/components/baseAceternityUi/hero-highlight/hero-highlight";
import StarsCanvas from "@/components/others/StarBackground";

export default async function MainLayout({ children }) {
	const session = await getSession();
    return (
		<div className={`main-app-wrapper relative`}>
			{/* <StarsCanvas /> */}
			<PPNavbar session={session}/>
			<PPSectionBlock className={`fixed top-0 z-0`}>
				<HeroHighlight className={`max-h-full`}>
				</HeroHighlight>
			</PPSectionBlock>
			{children}
		</div>
    );
}
