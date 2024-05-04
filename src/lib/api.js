import { redirect } from "next/navigation";
import { getSession } from "@/actions/actions";

export async function customServerFetch(route, method, data={}) {
    const session = await getSession();
    if (!session?.authenticated) return redirect('/login');

    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;
    const url = apiUrl + route;
    const options = {
        method: method,
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : `Bearer ${session?.user?.token}`
        }
    }

    if (method === "POST" || method === "PUT") {
        options.body = JSON.stringify(data);
    }

    const fetchPromise = await fetch(url, options);

    return fetchPromise;
}

export async function customServerFetchWithoutAuth(route, method, data={}) {

    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    const url = apiUrl + route;
    const options = {
        method: method,
        headers: {
            "Content-Type" : "application/json",
        },
        cache : "no-store",
    }

    if (method === "POST" || method === "PUT") {
        options.body = JSON.stringify(data);
    }

    const fetchPromise = await fetch(url, options);

    return fetchPromise;
}

// export async function customClientFetch(route, method, data={}) {
//     const session = await getSession();
//     if (!session) signOut();
//     if (session?.status === "unauthenticated") signOut();

//     const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;
//     const url = apiUrl + route;
//     const options = {
//         method: method,
//         headers: {
//             "Content-Type" : "application/json",
//             "Authorization" : `Bearer ${session?.token}`
//         }
//     }

//     if (method === "POST" || method === "PUT") {
//         options.body = JSON.stringify(data);
//     }

//     const fetchPromise = await fetch(url, options);

//     if (fetchPromise.status === 401) {
//         signOut();
//     }

//     if (fetchPromise.status === 200) {
//         const response = await fetchPromise.json();
//         return response;
//     }

//     return null;
// }

