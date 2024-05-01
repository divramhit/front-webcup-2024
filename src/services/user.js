import { customServerFetchWithoutAuth } from "@/lib/api";
import { redirect } from "next/navigation";

export const signUp = async (formData) => {
    const fullname = formData.get("fullname");
    const email = formData.get("email");
    const password = formData.get("password");

    console.log(formData);

    const payload = {
        fullname : fullname,
        email : email,
        password : password,
    }

    const signUpPromise = await customServerFetchWithoutAuth('/signup', "POST", payload);


    const response = await signUpPromise.json();
    console.log(response);

    // redirect('/login');
}