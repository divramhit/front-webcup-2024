import PPNavbar from "@/components/Navbar/PPNavbar";
import { getSession } from "@/actions/actions";

export default async function MainLayout({ children }) {
	const session = await getSession();
    return (
		<div className={`main-app-wrapper`}>
			<PPNavbar session={session}/>
			{children}
		</div>
    );
}
