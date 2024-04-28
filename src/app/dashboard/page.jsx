"use client"

import Logout from "@/components/Logout";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Link from "next/link";
import { customServerFetch } from "@/lib/api";
import { Vortex } from "@/components/aceternity-ui/Vortex";
import { useSession } from "next-auth/react";
import { AuroraBackground } from "@/components/aceternity-ui/AuroraBackground";
import { Boxes } from "@/components/aceternity-ui/BackgroundBoxes";
import { BackgroundGradientAnimation } from "@/components/aceternity-ui/BackgroundGradientAnimation";

const Dashboard = () => {
    const session = useSession();

    return (
        <>
            <div className="w-100 mx-auto rounded-md  h-screen overflow-hidden">
            {/* <Boxes /> */}
            {/* <Vortex
                backgroundColor="black"
                rangeY={800}
                particleCount={500}
                baseHue={120}
                className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
            > */}
                            {/* <AuroraBackground> */}
                <BackgroundGradientAnimation>
                <div className="relative z-20">
                
                    {JSON.stringify(session?.user)}
                    <Link href="/posts/add">Add post</Link>
                    <Link href="/posts">Vew posts</Link>
                    <Logout />
                </div>
                </BackgroundGradientAnimation>
                {/* </AuroraBackground> */}

                {/* </Vortex> */}
            </div>
        </>
    )
}

export default Dashboard;