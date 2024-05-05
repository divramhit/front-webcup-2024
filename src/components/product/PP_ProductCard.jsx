import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import PPImage from "../PPImage/PPImage";
import PP_ProductCardBtn from "./PP_ProductCardBtn";
import { cn } from "@/utils/cn";

export default function PP_ProductCard({ product, className = '' }) {
    return (
        <Card isFooterBlurred className={cn("group/product-card w-full h-full col-span-12 sm:col-span-5", className)}>
            <PPImage
                removeWrapper
                alt="Card example background"
                className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                src={product?.images?.[0]?.media_original}
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 flex justify-between">
                <div className="max-w-3/4 w-3/4">
                    <h4 className="text-black font-medium text-xl whitespace-nowrap text-ellipsis overflow-hidden ">{product?.name}</h4>
                    <p className="text-black text-sm">$ {product?.price}</p>
                    {/* <p className="text-black text-tiny">{product?.description}</p> */}
                </div>
                <div className="max-w-1/4 w-1/4 flex justify-end">
                    <PP_ProductCardBtn productId={product?.id}/>
                </div>
            </CardFooter>
        </Card>
    )
}