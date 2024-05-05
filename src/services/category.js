import { customServerFetchWithoutAuth } from "@/lib/api";

export default async function getCategories() {
    const categoriesPromise = await customServerFetchWithoutAuth('/category_ids', 'GET');
    if (categoriesPromise.status === 200) {
        return await categoriesPromise.json();
    }

    console.log("HERE");

    return [
        {
            id : 2,
            name : "Pool"
        },
        {
            id: 3,
            name: "Garden",
        },
        {
            id: 4,
            name: "Bedroom",
        },
        {
            id: 5,
            name: "Kitchen",
        },
        {
            id: 6,
            name: "Gym",
        },
        {
            id: 7,
            name: "Beach"
        }
    ];
}