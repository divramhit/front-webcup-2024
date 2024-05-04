"use server"

import { customServerFetchWithoutAuth } from "@/lib/api"

export default async function getAllProducts() {
    const productsPromise = await customServerFetchWithoutAuth
}