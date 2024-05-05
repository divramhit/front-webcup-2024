'use server'

import { customServerFetch } from "@/lib/api";
import { redirect } from "next/navigation";

export default async function order(prevState, formData) {
    const fullname = formData.get("fullname");
    const email = formData.get('email');
    const billing = formData.get('billing');
    const country = formData.get('country');

    const payload = {
        fullname: fullname,
        email : email,
        billing: billing,
        country: country
    }

    const responsePromise = await customServerFetch('/cart/order', "POST", payload);

    if (responsePromise.status === 200) {
        redirect('/')
    }

    return {error: "Error placing order"};
}