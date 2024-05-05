"use client";
import React from "react";
import { Input } from "../baseAceternityUi/input/input";
import { Label } from "../baseAceternityUi/label/label";
import { cn } from "@/utils/cn";
import { contactUs } from '@/services/contact_us';
import {Textarea} from "@nextui-org/react";
import { useState, useEffect } from "react";
import {useFormState} from 'react-dom'
import { Spinner } from "@nextui-org/react";

    




export function ContactUsForm() {
	const [loading, setLoading] = useState(false);

	const [state, formAction] = useFormState(contactUs, undefined);

	useEffect(() => {
		setLoading(false);
	}, [state])

	return (
		<div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
			<h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
				Contact us
			</h2>
			<p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
				We will get back to you shortly.
			</p>

			<form className="my-8" action={formAction}>
				<div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
					<LabelInputContainer>
						<Label htmlFor="fullname">Full name</Label>
						<Input id="fullname" name="fullname" placeholder="Tyler" type="text" />
					</LabelInputContainer>
				</div>
				<LabelInputContainer className="mb-4">
					<Label htmlFor="email">Email Address</Label>
					<Input id="email" name="email" placeholder="projectmayhem@fc.com" type="email" />
				</LabelInputContainer>
				<LabelInputContainer className="mb-4">
					<Label htmlFor="message">Message</Label>
					<Textarea
                        id="message"
                        name="message"
                        variant="faded"
                        placeholder="Enter your message"
                        className="max-w"
                    />
				</LabelInputContainer>
				<button
					className="transition bg-pp-primary hover:bg-pp-accent-1 text-white shadow-lg font-bold rounded w-full p-2"
					type="submit" onClick={() => {setLoading(true)}}
				>
					{loading ? <Spinner /> : <></>}
					Contact Us &rarr;
				</button>
				<p>{state?.error ? <>{state?.error}</> : <></>}</p>

			</form>
		</div>
	);
}

const BottomGradient = () => {
	return (
		<>
			<span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
			<span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
		</>
	);
};

const LabelInputContainer = ({
	children,
	className,
}) => {
	return (
		<div className={cn("flex flex-col space-y-2 w-full", className)}>
			{children}
		</div>
	);
};
