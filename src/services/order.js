'use server'

import { customServerFetch } from "@/lib/api";

export default async function order(formData) {
    const fullname = formData.get("fullname");
    const email = formData.get('email');
    const billing = formData.get('billing');
    const country = formData.get('country');

    console.log(fullname, email, billing, country);

    const payload = {
        fullname: fullname,
        email : email,
        billing: billing,
        country: country
    }

    const responsePromise = await customServerFetch('/cart/order', "POST", payload);

    if (responsePromise.status === 200) {
        return await responsePromise.json();
    }

    return null;
}