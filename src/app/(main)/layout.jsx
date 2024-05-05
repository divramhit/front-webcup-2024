import PPNavbar from "@/components/Navbar/PPNavbar";
import { getSession } from "@/actions/actions";
import PPSectionBlock from "@/components/PPSectionBlock/PPSectionBlock";
import { HeroHighlight } from "@/components/baseAceternityUi/hero-highlight/hero-highlight";
import PPFooter from "@/components/footer/PPFooter";
import MainLoading from "./loading";
import Transition from "@/components/PPTransition/PPTransition";
import { Suspense } from "react";

export default async function MainLayout({ children }) {
	const session = await getSession();
    return (
		<div className={`main-app-wrapper relative`}>
			<PPNavbar session={session}/>
			<PPSectionBlock className={`fixed top-0 z-0`}>
				<HeroHighlight className={`max-h-full`}>
				</HeroHighlight>
			</PPSectionBlock>
			<Suspense fallback={<MainLoading/>}>
				<Transition>
					{children}
				</Transition>
			</Suspense>
			<PPFooter />
		</div>
    );
}
