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
    const defaultEmail = "nihil@nihil.com";
    const defaultPassword = "nihilisr00t";

    console.log(formData);

    const email = formData.get("email");
    const password = formData.get("password");

    session.authenticated = true;
    session.email = email;

    await session.save();

    redirect("/posts")
}
export const logout = async () => {}