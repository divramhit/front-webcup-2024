"use client"
import PPSectionBlock from "@/components/PPSectionBlock/PPSectionBlock";
import useSession from "@/hooks/useSession";
import { customClientFetch, customClientFetchWithoutAuth } from "@/lib/api";
import { useEffect, useState } from "react";

export default function ShopByCategory ({params}) {
    const {session} = useSession();
    const categoryId = params?.id;
    const [categoryData, setCategoryData] = useState(null);

    useEffect(() => {
        customClientFetchWithoutAuth(`/category/${categoryId}`, "GET").then(async response => {
            setCategoryData(await response.json())
        });

    }, [categoryId])

    async function addProductToCart(id) {
        const addToCartPromise = await customClientFetch(`/cart/add/${id}`, "GET");
        const response = await addToCartPromise.json();
    }

    return (
        <PPSectionBlock>
            {JSON.stringify(categoryData)}
           <div style={{
            position: "relative",
            width: "fit-content",
           }}>
            {
                categoryData?.products && 
                categoryData?.products.map(product => {
                    return <div key={product.id} style={product?.shopCss} onClick={() => addProductToCart(5)}>{product?.name}</div>
                })
            }
            <img height={1000} width={1000} src={categoryData?.shopImage?.media_original}></img>
            </div>

        </PPSectionBlock>
    )
}