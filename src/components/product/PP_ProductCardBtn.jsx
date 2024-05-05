"use client"
import React, { useState, useEffect } from 'react'
import {Button} from "@nextui-org/button";
import { IconShoppingCartPlus } from '@tabler/icons-react'
import { customClientFetch } from '@/lib/api';
import { toast } from 'sonner';

const PP_ProductCardBtn = ({ productId = 0 }) => {
    const [isLoading, setIsLoading] = useState(false);

    const addToCart = () => {
        setIsLoading(true);
        const addToCartPromise = customClientFetch(`/cart/add/${productId}`, "GET").then((response) => {
            console.log(response);
            setIsLoading(false);
        })
        .catch((e) => {
            setIsLoading(false)
        })

        toast.promise(addToCartPromise, {
            loading: 'Loading...',
            success: (data) => {
                console.log("data:", data)
                return `Added to Cart`;
            },
            error: 'Error',
        });
    }

    return (
        <Button isIconOnly size="lg" isLoading={isLoading} onPress={addToCart} className="bg-pp-primary text-white">
            <IconShoppingCartPlus/>
        </Button>
    )
}

export default PP_ProductCardBtn;