"use client"

import Logout from "@/components/Logout";
import Link from "next/link";
import { BackgroundGradientAnimation } from "@/components/aceternity-ui/BackgroundGradientAnimation";
import { ImagesSliderDemo } from "@/components/aceternity-ui/ImagesSliderDemo";
import { TracingBeamDemo } from "@/components/aceternity-ui/TracingBeamDemo";

const Home = () => {
    return (
		<div className="w-100 overflow-hidden">
			<TracingBeamDemo/>
		</div>
    )
}

export default Home;