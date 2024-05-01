"use client"

import Logout from "@/components/Logout";
import Link from "next/link";
import { BackgroundGradientAnimation } from "@/components/aceternity-ui/BackgroundGradientAnimation";
import { ImagesSliderDemo } from "@/components/aceternity-ui/ImagesSliderDemo";

const Dashboard = () => {
    return (
		<div className="w-100 mx-auto rounded-md overflow-hidden">
			<ImagesSliderDemo/>
		</div>
    )
}

export default Dashboard;