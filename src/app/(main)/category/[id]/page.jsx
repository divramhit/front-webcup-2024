"use client"
import PPSectionBlock from "@/components/PPSectionBlock/PPSectionBlock";
import { customClientFetchWithoutAuth } from "@/lib/api";
import { useEffect, useState } from "react";
import {Popover, PopoverTrigger, PopoverContent} from "@nextui-org/popover";
import {Button} from "@nextui-org/button";
import { IconEye } from "@tabler/icons-react";
import PP_ProductCard from "@/components/product/PP_ProductCard";

export default function ShopByCategory ({params}) {
    const categoryId = params?.id;
    const [categoryData, setCategoryData] = useState(null);

    useEffect(() => {
        customClientFetchWithoutAuth(`/category/${categoryId}`, "GET").then(async response => {
            setCategoryData(await response.json())
        });

    }, [categoryId])

    return (
        <PPSectionBlock>
            {/* {JSON.stringify(categoryData)} */}
            <div 
                style={{
                    position: "relative",
                    width: "fit-content",
                }}
            >
            {
                categoryData?.products && 
                categoryData?.products.map(product => {
                    return (
                        <Popover
                            key={product?.id}
                            offset={10}
                            placement="auto"
                            backdrop={"blur"}
                        >
                            <PopoverTrigger>
                                <Button 
                                    key={product.id} 
                                    style={{...product?.shopCss, border: '0px solid white !important', color: 'white'}}
                                    className=" bg-pp-secondary/80 backdrop-blur-sm dark:bg-pp-secondary/70 border-0 shadow-lg"
                                    radius="full"
                                    isIconOnly
                                >
                                    <IconEye/>
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[20rem] aspect-square bg-transparent shadow">
                                <PP_ProductCard product={product}/>
                            </PopoverContent>
                      </Popover>

                    );
                })
            }
            <img height={1000} width={1000} src={categoryData?.shopImage?.media_original}/>
            </div>

        </PPSectionBlock>
    )
}