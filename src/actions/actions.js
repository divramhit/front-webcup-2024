"use server"

import { sessionOptions } from "@/lib/auth"
import { getIronSession } from "iron-session"
import { jwtDecode } from "jwt-decode"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"


export const getSession = async () => {
    const session = await getIronSession(cookies(), sessionOptions);

    if (!session.authenticated) session.authenticated = false;

    return session
}

export const login = async (prevState, formData) => {
    const session = await getSession();

    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || email === "") {
        return {error: "Email cannot be empty"}
    }

    if (!password || password === "") {
        return {error: "Password cannot be empty"}
    }

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
        return {error: "Unauthorized"}
    }

    const user = await loginResponse.json();
    const token = user?.token;
    const data = jwtDecode(token);
    console.log(data);
    data.token = token;

    session.authenticated = true;
    session.user = data;

    await session.save();

    redirect("/")
}

export const logout = async () => {
    const session = await getSession();
    session.destroy();
    redirect("/");
}