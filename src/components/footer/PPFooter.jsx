import { ContactUsForm } from "../pp-ui/ContactUsForm";
import PPSectionBlock from "../PPSectionBlock/PPSectionBlock";

export default function PPFooter() {
    const footerItems = [
        {
            title: 'About Us',
            href: '/about-us'
        }
    ]

    return (
        <>
            <footer>
                <PPSectionBlock className={"h-[20vh]"}>
                    
                </PPSectionBlock> 
            </footer>   
        </>
    )
}