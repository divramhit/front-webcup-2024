import { customServerFetchWithoutAuth } from "@/lib/api";
import { HeroParallax } from "@/components/baseAceternityUi/hero-parallax/hero-parallax";
import PP_ProductCard from "@/components/product/PP_ProductCard";
import {ScrollShadow} from "@nextui-org/scroll-shadow";

export default async function Products() {
    async function getAllProducts() {
        let productsPromise = await customServerFetchWithoutAuth("/products", "GET");
        if (productsPromise.status === 200) {
            return productsPromise.json();
        }

        return [];
    }

    const products = await getAllProducts();
    console.log(products);
    return (
        <div className="pointer-events-none">
            <HeroParallax products={products}/>
            <div className="relative w-full px-20 mb-10">
                <h2 className="text-3xl font-bold">All Products</h2>
            </div>
            
            <ScrollShadow  className="product-list rounded-lg no-scrollbar pointer-events-auto h-screen p-10 lg:p-20 relative overflow-auto w-full grid gap-10 lg:grid-cols-4">
                {
                    products && products?.map((product, index) => (
                        <div key={index}>
                            <PP_ProductCard className="aspect-square" product={product}/>
                        </div>
                    ))
                }
            </ScrollShadow >
        </div>
    )
}