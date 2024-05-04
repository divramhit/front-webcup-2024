import React from 'react';
import { cn } from '@/utils/cn';

const PPSectionBlock = ({ children, className }) => {
	return (
		<section className={
			cn('h-svh w-screen relative', className)
		}>
			{ children }
		</section>
	)
}

export default PPSectionBlock;