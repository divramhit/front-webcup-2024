'use client'

import { useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button} from "@nextui-org/react";
import ThemeSelector from "../theme/ThemeSelector";
import Link from "next/link";

export default function PPNavbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const menuItems = {
		"Dashboard" : "/dashboard",
		"About Us" : "about-us",
		"Login" : "/login",
		"Signup" : "/sign-up"
	};

  const people = [
	{
		id: 6,
		name: "Dora",
		designation: "The Explorer",
		image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
	},
  ]

  	return (
		<Navbar onMenuOpenChange={setIsMenuOpen} className="group/navbar transition bg-transparent backdrop-blur-none hover:backdrop-blur-lg">
			<NavbarContent>
				<NavbarMenuToggle
				aria-label={isMenuOpen ? "Close menu" : "Open menu"}
				className="sm:hidden"
				/>
				<NavbarBrand>
				{/* <AcmeLogo /> */}
				<p className="font-bold text-inherit">ACME</p>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				<NavbarItem>
					<Link color="foreground" href="/dashboard">
						Dashboard
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color="foreground" href="/posts">
						Posts
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link href="#" aria-current="page">
						About us
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify="end">
				<NavbarItem className="hidden lg:flex">
				<Link href="/login">Login</Link>
				</NavbarItem>
				<NavbarItem>
				<Button as={Link} color="primary" href="/sign-up" variant="flat">
					Sign Up
				</Button>
				</NavbarItem>
				<NavbarItem>
					<ThemeSelector />
				</NavbarItem>
			</NavbarContent>
			<NavbarMenu>
				{Object.keys(menuItems).map((item, index) => (
				<NavbarMenuItem key={`${item}-${index}`}>
					<Link
						color={
							index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
						}
						className="w-full"
						href={menuItems[item]}
						size="lg"
					>
						{item}
					</Link>
				</NavbarMenuItem>
				))}
			</NavbarMenu>

		</Navbar>
  );
}
