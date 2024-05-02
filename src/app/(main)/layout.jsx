import PPNavbar from "@/components/Navbar/PPNavbar";
import { getSession } from "@/actions/actions";
import StarsCanvas from "@/components/others/StarBackground";

export default async function MainLayout({ children }) {
	const session = await getSession();
    return (
		<div className={`main-app-wrapper`}>
			<StarsCanvas />
			<PPNavbar session={session}/>
			{children}
		</div>
    );
}
