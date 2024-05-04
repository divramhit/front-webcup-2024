"use server"
import { CheckoutForm } from "@/components/checkout/CheckoutForm"
import PPSectionBlock from "@/components/PPSectionBlock/PPSectionBlock"

export default async function Checkout() {
    return (
        <>
            <PPSectionBlock>
                <CheckoutForm />
            </PPSectionBlock>     
        </>
    )
}