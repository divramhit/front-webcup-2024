import Logout from "@/components/Logout";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Link from "next/link";
import { customServerFetch } from "@/lib/api";

async function getData() {
    const data = await customServerFetch('/test', "GET");
    return data;
}

const Dashboard = async () => {
    const session = await getServerSession(authOptions);

    return (
        <>
            {JSON.stringify(session?.user)}
            <Link href="/posts/add">Add post</Link>
            <Link href="/posts">Vew posts</Link>
            <Logout />
        </>
    )
}

export default Dashboard;