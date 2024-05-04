import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";


export default function ProductCard(props) {
    const product = props?.product
    return (
        <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">New</p>
            <h4 className="text-black font-medium text-2xl">{product?.name}</h4>
        </CardHeader>
        <Image
            removeWrapper
            alt="Card example background"
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
            src={product?.images[0].media_original}
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
            <p className="text-black text-tiny">{product?.price}</p>
            <p className="text-black text-tiny">{product?.description}</p>
            </div>
            <Button className="text-tiny" color="primary" radius="full" size="sm">
            Notify Me
            </Button>
        </CardFooter>
        </Card>
    )
}