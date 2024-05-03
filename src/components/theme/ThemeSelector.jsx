'use client'

import { useState } from "react"
import { Switch } from "@nextui-org/switch";
import { IconSun, IconMoon } from "@tabler/icons-react";

export default function ThemeSelector() {
    const [theme, setTheme] = useState('dark');

    const handleThemeChange = (e) => {
		const isLightMode = e.target.checked;

		if (isLightMode) {
			document.documentElement.classList.remove("dark");
			setTheme("light");
		} else {
			document.documentElement.classList.add("dark");
            setTheme("dark")
		}
    }

    return (
		<>
			<Switch
				defaultSelected
				size="lg"
				color="warning"
				className="hidden md:contents"
				startContent={<IconSun />}
				endContent={<IconMoon />}
				onChange={handleThemeChange}
			/>
		</>
    )
}