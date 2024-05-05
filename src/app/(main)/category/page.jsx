"use client"

import { CardHoverEffect } from "@/components/aceternity-ui/CardHoverEffect"
import PPSectionBlock from "@/components/PPSectionBlock/PPSectionBlock";
import { customClientFetchWithoutAuth } from "@/lib/api";
import { useEffect, useState } from "react";

export default function Category() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        customClientFetchWithoutAuth('/categories', "GET").then(async response => {
            let categoriesData = await response.json();
            categoriesData = categoriesData.map(category => {
                return {
                    title: category.name,
                    link: `/category/${category?.id}`
                }
            })
            setCategories(categoriesData);
        })
    }, []);

    return (
        <PPSectionBlock>
            <CardHoverEffect items={categories}/>
        </PPSectionBlock>
    )
}