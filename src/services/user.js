import { customServerFetchWithoutAuth } from "@/lib/api";
import { redirect } from "next/navigation";

export const signUp = async (prevState, formData) => {
    const fullname = formData.get("fullname");
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || email === "") {
        return {error: "Email cannot be empty"}
    }

    if (!password || password === "") {
        return {error: "Password cannot be empty"}
    }

    if (!fullname || fullname === "") {
        return {error: "Fullname cannot be empty"}
    }

    const payload = {
        fullname : fullname,
        email : email,
        password : password,
    }

    const signUpPromise = await customServerFetchWithoutAuth('/signup', "POST", payload);

    if (signUpPromise.status === 500) {
        return { error: "Error signing up" }
    }

    if (signUpPromise.status === 400) {
        console.log('here');
        try {
            const response = await signUpPromise.json();
            const message = response?.message ?? 'Error signing up';
            return {error : message}
        } catch (e) {
            return {error : "Error signing up"};
        }

    }

    const response = await signUpPromise.json();

    redirect('/?login=true');
}