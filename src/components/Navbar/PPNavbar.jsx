'use client'

import React, { useState, useEffect, Fragment } from "react";
import {
	Navbar,
	NavbarBrand, 
	NavbarContent, 
	NavbarItem, 
	NavbarMenuToggle, 
	NavbarMenu, 
	NavbarMenuItem, 
	Button,
	Tooltip,
	Dropdown,
	DropdownMenu,
	DropdownTrigger,
	DropdownItem,
	Avatar,
	ModalBody,
	Link,
	Tabs,
	Tab
} from "@nextui-org/react";
import {Accordion, AccordionItem} from "@nextui-org/accordion";
import ThemeSelector from "../theme/ThemeSelector";
import PPModal from "../PPModal/PPModal";
import { SignupFormDemo } from "../aceternity-ui/SignupFormDemo";
import { LoginForm } from "../pp-ui/LoginForm";
import { logout } from "@/actions/actions";
import { IconChevronDown, IconShoppingCart } from "@tabler/icons-react";

export default function PPNavbar({session}) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Set hasScrolled to true if the scroll position is more than 50 pixels
            const scrollTop = window.scrollY;
            setHasScrolled(scrollTop > 50);
        };

        // Add the event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

	const menuItems = [
		{
			href: '/products',
			title: 'Shop',
			dropdownItems: [
				{
					href: '/products/1',
					title: 'Bedroom'
				},
				{
					href: '/products/2',
					title: 'Kitchen'
				},
				{
					href: '/products/3',
					title: 'Garden'
				}
			],
			isDropdown: true
		},
		{
			href: '/about-us',
			title: 'About Us',
		},
		{
			href: '/contact-us',
			title: 'Contact Us',
		}
	]

	const mobileMenuItems = [
		{
			href: '/login',
			title: 'Login',
			isHidden: session?.authenticated ? true : false
		},
		{
			href: '/sign-up',
			title: 'Sign Up',
			isHidden: session?.authenticated ? true : false
		},
		{
			href: '/products',
			title: 'Shop',
			isDropdown: true,
			dropdownItems: [
				{
					href: '/products/1',
					title: 'Bedroom'
				},
				{
					href: '/products/2',
					title: 'Kitchen'
				},
				{
					href: '/products/3',
					title: 'Garden'
				}
			]
		},
		{
			href: '/about-us',
			title: 'About Us'
		},
		{
			href: '/contact-us',
			title: 'Contact Us',
		},
		{
			href: '#',
			title: 'Logout',
			color: 'danger',
			onAction: logout,
			isHidden: session?.authenticated ? false : true
		}
	];

	const LoginModalTabs = [
		{
			title: "Login",
			key: "login",
			content: (<LoginForm/>)
		},
		{
			title: "Sign Up",
			key: "signup",
			content: (<SignupFormDemo />)
		},
	]

  	return (
		<Navbar onMenuOpenChange={setIsMenuOpen} className={`group/navbar transition bg-transparent backdrop-blur-none ${ hasScrolled ? 'backdrop-blur-xl bg-pp-primary/50 dark:bg-pp-primary-dark/50' : '' } hover:bg-pp-primary/50 dark:hover:bg-pp-primary-dark/50 hover:backdrop-blur-xl`}>
			<NavbarContent justify="end">
				<NavbarBrand as={Link} color="foreground" href={'/'} className="h-full flex justify-center ml-10 lg:ml-0 lg:justify-start gap-x-2">
					<div className="h-full p-2.5">
						<img className='h-full object-fill rounded-full border-1 aspect-square' loading='lazy' src={`${process.env.NEXT_PUBLIC_APP_URL}/images/logo.png`} alt="puddle pirates logo"/>
					</div>
					<p className="font-bold text-inherit hidden sm:flex">PuddlePirates</p>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex items-center gap-4" justify="end">
				{
					menuItems && menuItems?.map((menuItem, index) => {
						return menuItem?.isDropdown ? (
							<Fragment key={index}>
								<NavbarItem as={Link} className=" group/menu-item flex flex-col" href={menuItem?.href}  color={menuItem?.color ?? "foreground"}>
									{ menuItem?.title }
									<span className="block opacity-0 w-0 group-hover/menu-item:w-full group-hover/menu-item:opacity-100 transition-all duration-500 h-0.5 bg-pp-accent-1 dark:bg-pp-accent-dark-1"></span>
								</NavbarItem>
								<Dropdown className=" bg-pp-primary/30 backdrop-blur-sm">
									<DropdownTrigger>
										<Button
											isIconOnly
											className="p-0 w-fit min-w-0 bg-transparent h-fit -ml-3"
										>
											<IconChevronDown size={16}/>
										</Button>
									</DropdownTrigger>
									<DropdownMenu>
										{ menuItem?.dropdownItems?.map((dropdownItem, index) => (
											<DropdownItem
												key={index}
												href={dropdownItem?.href}
												className="data-[hover=true]:bg-pp-accent-1/70 data-[hover=true]:text-white"
											>
												{dropdownItem?.title}
											</DropdownItem>
										)) }
									</DropdownMenu>
								</Dropdown>
							</Fragment>
						) : (
							<NavbarItem as={Link} key={index} className="group/menu-item flex flex-col" href={menuItem?.href} color={menuItem?.color ?? "foreground"}>
								{ menuItem?.title }
								<span className="block opacity-0 w-0 group-hover/menu-item:w-full group-hover/menu-item:opacity-100 transition-all duration-500 h-0.5 bg-pp-accent-1 dark:bg-pp-accent-dark-1"></span>
							</NavbarItem>
						)

					})
				}
				{
					session?.authenticated ? <></> :
					<PPModal
						customTrigger={
							<Tooltip content="or Sign Up" closeDelay={20} offset={-7}>
								<Button radius="full" className="bg-gradient-to-r from-pp-primary to-pp-secondary text-white shadow-lg font-bold">
									LOGIN
								</Button>
							</Tooltip>
						}
					>
						<ModalBody>
							<Tabs color="secondary" aria-label="Login Tabs" radius="full">
								{ 
									LoginModalTabs && LoginModalTabs?.map((tabItem, index) => (
										<Tab key={tabItem?.key} className="h-full flex items-center" title={tabItem?.title}>
											{ tabItem?.content }
										</Tab>
									))
								}
							</Tabs>
						</ModalBody>
					</PPModal>
				}
			</NavbarContent>
			
			<NavbarItem as={Button} radius="full" className="bg-transparent hidden lg:flex" isIconOnly>
				<IconShoppingCart/>
			</NavbarItem>
			<NavbarItem>
				<ThemeSelector />
			</NavbarItem>

			<NavbarContent className="hidden lg:contents" as="div" justify="end">
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
			
			<NavbarMenu className="bg-pp-primary/50 dark:bg-pp-primary-dark/50 backdrop-blur-2xl items-end px-0">
				{mobileMenuItems.map((item, index) => (
					item?.isDropdown ? (
						<div key={index} className={`w-full ${index == mobileMenuItems?.length - 1 ? '' : ' border-b-1 border-black dark:border-white'}`}>
							<Accordion>
								<AccordionItem
									key={index} 
									aria-label={item?.title} 
									title={item?.title}
									classNames={{
										titleWrapper: 'text-end font-bold text-lg'
									}}
								>
									<div className="flex flex-col gap-y-3">
										{item?.dropdownItems?.map((dropdownItem, index) => (
											<Link
												key={index}
												color={ dropdownItem?.color ?? 'foreground' }
												className={`w-full flex justify-end font-bold text-lg`}
												href={dropdownItem?.href}
												size="lg"
											>
												{dropdownItem?.title}
											</Link>
										))}
									</div>
								</AccordionItem>
							</Accordion>
						</div>
					) : (
						<NavbarMenuItem key={`${item}-${index}`} className={`w-full flex justify-end py-5 px-3 border-black dark:border-white ${item?.isHidden ? 'hidden' : ''} ${index == mobileMenuItems?.length - 1 ? '' : ' border-b-1'}`}>
							<Link
								color={ item?.color ?? 'foreground' }
								className={`font-bold text-lg`}
								href={item?.href}
								size="lg"
							>
								{item?.title}
							</Link>
						</NavbarMenuItem>
					)
				))}

			</NavbarMenu>
			<NavbarMenuToggle
				aria-label={isMenuOpen ? "Close menu" : "Open menu"}
				className="sm:hidden"
			/>
		</Navbar>
  );
}
