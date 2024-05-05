import { ContactUsForm } from "../pp-ui/ContactUsForm";
import PPSectionBlock from "../PPSectionBlock/PPSectionBlock";

export default function PPFooter() {
    return (
        <>
            <footer>
                <PPSectionBlock className={"h-[20vh]"}>
                    Footer
                    <ContactUsForm />
                </PPSectionBlock> 
            </footer>   
        </>
    )
}