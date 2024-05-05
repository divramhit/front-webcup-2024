'use client'

import { Input } from "../baseAceternityUi/input/input";
import { Label } from "../baseAceternityUi/label/label";
import { cn } from "@/utils/cn";
import { login } from "@/actions/actions";
import {Spinner} from "@nextui-org/react";
import { useState } from "react";

export function LoginForm() {
	const [loading, setLoading] = useState(false);

	return (
		<div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
			<h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
				Welcome to Ken Store
			</h2>
			<p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
				Login to Ken Store
			</p>

			<form className="my-8" action={login}>
				<LabelInputContainer className="mb-4">
					<Label htmlFor="email">Email Address</Label>
					<Input id="email" name="email" placeholder="projectmayhem@fc.com" type="email" />
				</LabelInputContainer>
				<LabelInputContainer className="mb-4">
					<Label htmlFor="password">Password</Label>
					<Input id="password" name="password" placeholder="••••••••" type="password" />
				</LabelInputContainer>

				<button
					className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
					type="submit" onClick={() => {setLoading(true)}}
				>
					{loading ? <Spinner /> : <></>}
					Login &rarr;
					<BottomGradient />
				</button>

				<div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
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
