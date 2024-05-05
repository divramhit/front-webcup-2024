import { ContactUsForm } from "../pp-ui/ContactUsForm";
import PPSectionBlock from "../PPSectionBlock/PPSectionBlock";
import Link from "next/link";

export default function PPFooter() {
    const footerItems = [
		{
			href: '/category',
			title: 'Shop',
		},
		{
			href: '/products',
			title: 'All Products',
		},
		{
			href: '/about-us',
			title: 'About Ken',
		},
		{
			href: '/cart',
			title: 'Cart',
		},
    ]

    return (
        <>
            <footer>
                <PPSectionBlock className={"h-[20vh] flex justify-around items-center"}>
                    { footerItems && footerItems?.map((item, index) => {
                        return (
                            <Link href={item?.href}>
                                { item?.title }
                            </Link>
                        )
                    }) }
                </PPSectionBlock> 
            </footer>   
        </>
    )
}