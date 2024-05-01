'use client'

import { useState } from "react";
import {
	Navbar,
	NavbarBrand, 
	NavbarContent, 
	NavbarItem, 
	NavbarMenuToggle, 
	NavbarMenu, 
	NavbarMenuItem, 
	Button,
	Dropdown,
	DropdownMenu,
	DropdownTrigger,
	DropdownItem,
	Avatar
} from "@nextui-org/react";
import ThemeSelector from "../theme/ThemeSelector";
import Link from "next/link";
import { logout } from "@/actions/actions";

export default function PPNavbar({session}) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const menuItems = {
		"About Us" : "about-us",
		"Login" : "/login",
		"Signup" : "/sign-up"
	};

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
			{
				session?.authenticated ? <></> :
				<NavbarContent justify="end">
					<NavbarItem className="hidden lg:flex">
					<Link href="/login">Login</Link>
					</NavbarItem>
					<NavbarItem>
					<Button as={Link} color="primary" href="/sign-up" variant="flat">
						Sign Up
					</Button>
					</NavbarItem>
				</NavbarContent>
			}
			
				<NavbarContent as="div" justify="end">
					<NavbarItem>
						<ThemeSelector />
					</NavbarItem>
				{
					session?.authenticated ? 
					<Dropdown placement="bottom-end">
						<DropdownTrigger>
							<Avatar
							isBordered
							as="button"
							className="transition-transform"
							color="secondary"
							name="Jason Hughes"
							size="sm"
							src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
							/>
						</DropdownTrigger>
						<DropdownMenu aria-label="Profile Actions" variant="flat">
							<DropdownItem key="profile" className="h-14 gap-2">
							<p className="font-semibold">Signed in as</p>
							<p className="font-semibold">{session?.user?.email}</p>
							</DropdownItem>
							<DropdownItem key="logout" onAction={logout} color="danger">
							Log Out
							</DropdownItem>
						</DropdownMenu>
					</Dropdown>
					:
					<></>
				}
					
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
