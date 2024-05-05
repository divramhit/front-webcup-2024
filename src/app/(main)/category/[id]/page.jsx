"use client"
import PPSectionBlock from "@/components/PPSectionBlock/PPSectionBlock";
import { customClientFetchWithoutAuth } from "@/lib/api";
import { useEffect, useState } from "react";
import {Popover, PopoverTrigger, PopoverContent} from "@nextui-org/popover";
import {Button} from "@nextui-org/button";
import { IconEye } from "@tabler/icons-react";
import PP_ProductCard from "@/components/product/PP_ProductCard";
import PPImage from "@/components/PPImage/PPImage";

export default function ShopByCategory ({params}) {
    const categoryId = params?.id;
    const [categoryData, setCategoryData] = useState(null);

    useEffect(() => {
        customClientFetchWithoutAuth(`/category/${categoryId}`, "GET").then(async response => {
            setCategoryData(await response.json())
        });

    }, [categoryId])

    return (
        <PPSectionBlock className={'min-h-svh h-fit overflow-x-auto'}>
            <div 
                style={{
                    position: "relative",
                }}
                className="w-[1500px] h-svh lg:w-full lg:h-full"
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
                                    className=" bg-pp-secondary/80 backdrop-blur-sm dark:bg-pp-secondary/70 border-0 shadow-lg relative overflow-visible"
                                    radius="full"
                                    isIconOnly
                                >
                                    <span class="animate-ping absolute inline-flex top-0 right-0 h-3 w-3 rounded-full bg-sky-400 opacity-75"></span>
                                    <span class="absolute inline-flex h-3 w-3 top-0 right-0 rounded-full bg-sky-400"></span>
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
            <PPImage className="w-full h-full lg:w-full" src={categoryData?.shopImage?.media_original}/>
            </div>

        </PPSectionBlock>
    )
}