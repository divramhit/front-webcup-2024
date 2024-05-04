'use server'
import { customServerFetchWithoutAuth } from "@/lib/api";


export async function contactUs(formData) {
    const fullname = formData.get("fullname");
    const email = formData.get("email");
    const password = formData.get("message");

    const payload = {
        fullname : fullname,
        email : email,
        password : password,
    }

    const contactUsPromise = await customServerFetchWithoutAuth('/contact-us', "POST", payload);
    const response = await contactUsPromise.json();

    return {success : true}
}