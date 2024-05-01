"use server"

import { sessionOptions } from "@/lib/auth"
import { getIronSession } from "iron-session"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"


export const getSession = async () => {
    const session = await getIronSession(cookies(), sessionOptions);

    if (!session.authenticated) session.authenticated = false;

    return session
}

export const login = async (formData) => {
    const session = await getSession();

    const email = formData.get("email");
    const password = formData.get("password");

    const payload = {
        email: email,
        password: password,
    }
    const url = process.env.NEXT_PUBLIC_BACKEND_URL + '/auth';
    const loginResponse = await fetch(url, {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(payload)
    })

    if (loginResponse.status == 401) {
        return await loginResponse.json();
    }

    const user = await loginResponse.json();

    session.authenticated = true;
    session.user = user;

    await session.save();

    redirect("/posts")
}

export const logout = async () => {
    const session = await getSession();
    session.destroy();
    redirect("/login");
}