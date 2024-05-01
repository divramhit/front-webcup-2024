import PPNavbar from "@/components/Navbar/PPNavbar";

export default function RootLayout({ children }) {

    return (
		<div className={`main-app-wrapper`}>
			<PPNavbar />
			{children}
		</div>
    );
}
