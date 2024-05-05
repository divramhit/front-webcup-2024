"use client"
import React, { useState, useEffect } from 'react'
import {Button} from "@nextui-org/button";
import { IconShoppingCartPlus } from '@tabler/icons-react'
import { customClientFetch } from '@/lib/api';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const PP_ProductCardBtn = ({ productId = 0 }) => {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const addToCart = () => {
        setIsLoading(true);
        const addToCartPromise = customClientFetch(`/cart/add/${productId}`, "GET").then((response) => {
            if (response === null) {
                toast.promise(addToCartPromise, {
                    loading: 'Loading...',
                    success: (data) => {
                        return `Failed to add to cart`;
                    },
                    error: 'Error',
                });
            } else {
                toast.promise(addToCartPromise, {
                    loading: 'Loading...',
                    success: (data) => {
                        return `Successfully added to cart`;
                    },
                    error: 'Error',
                });
            }
            
            setIsLoading(false);
        })
        .catch((e) => {
            setIsLoading(false)
        })


    }

    return (
        <Button isIconOnly size="lg" isLoading={isLoading} onPress={addToCart} className="bg-pp-primary text-white">
            <IconShoppingCartPlus/>
        </Button>
    )
}

export default PP_ProductCardBtn;