"use server"

import { customServerFetchWithoutAuth } from "@/lib/api";
import ProductCard from "@/components/product/ProductCard";

export default async function Products() {
    async function getAllProducts() {
        let productsPromise = await customServerFetchWithoutAuth("/products", "GET");
        if (productsPromise.status === 200) {
            return productsPromise.json();
        }

        return [];
    }

    const products = await getAllProducts();

    return (
        <>
            {
                products.map(product => {
                    return <>
                        <ProductCard product={product}/>
                    </>
                })
            }
        </>
    )
}