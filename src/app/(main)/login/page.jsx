import React from "react"
import { LoginForm } from "@/components/pp-ui/LoginForm"

export const metadata = {
	title: 'Quack your way in!',
}

export default async function LoginPage() {
    return (
        <LoginForm />
    )
}