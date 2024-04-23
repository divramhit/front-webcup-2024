import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";

export async function customServerFetch(route, method, data={}) {
    const session = await getServerSession(authOptions);
    if (!session) return signOut();

    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;
    const url = apiUrl + route;
    const options = {
        method: method,
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : `Bearer ${session?.token}`
        }
    }

    if (method === "POST" || method === "PUT") {
        options.body = JSON.stringify(data);
    }

    const fetchPromise = await fetch(url, options);

    if (fetchPromise.status === 401) {
        redirect("/login")
    }

    if (fetchPromise.status === 200) {
        const response = await fetchPromise.json();
        return response;
    }

    return null;
}

export async function customClientFetch(route, method, data={}) {
    const session = await getSession();
    if (!session) signOut();
    if (session?.status === "unauthenticated") signOut();

    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;
    const url = apiUrl + route;
    const options = {
        method: method,
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : `Bearer ${session?.token}`
        }
    }

    if (method === "POST" || method === "PUT") {
        options.body = JSON.stringify(data);
    }

    const fetchPromise = await fetch(url, options);

    if (fetchPromise.status === 401) {
        signOut();
    }

    if (fetchPromise.status === 200) {
        const response = await fetchPromise.json();
        return response;
    }

    return null;
}

