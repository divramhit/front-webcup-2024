'use client'

import { useState } from "react"
import {Button} from "@nextui-org/button";
import Sun from "../icons/Sun";

export default function ThemeSelector() {
    const [theme, setTheme] = useState('dark');

    const handleThemeChange = () => {
        if (theme == "dark") {
            document.documentElement.classList.remove("dark");
            setTheme("light");
        }
        else {
            document.documentElement.classList.add("dark");
            setTheme("dark")
        }
    }

    return (
        <>
            <Button isIconOnly color="warning" variant="faded" aria-label="Change theme" onClick={handleThemeChange}>
                <Sun filled={true} height={12} width={12}/>
            </Button>
        </>
    )
}