import React from 'react';
import { motion, useScroll, useTransform, cubicBezier } from 'framer-motion';

interface Props {
	date: string;
	title: string;
	description: string;
}

const TimelineEvent = ({ date, title, description }: Props) => {
	const childRef = React.useRef<HTMLDivElement>(null);

	const { scrollYProgress: eventScrollProgress } = useScroll({
		target: childRef,
		offset: ['start end', 'end start'],
	});
	const opacity = useTransform(
		eventScrollProgress,
		[0, 0.5, 1],
		[0.2, 1, 0.5],
		{
			ease: cubicBezier(0.47, -0.01, 0.6, 0.6),
		}
	);

	return (
		<div className='relative' ref={childRef}>
			<div
				className='hover:animate-ping absolute top-5 -left-3.5 bg-blue-400 h-6 w-6 rounded-full border-4 border-white'
				title='current event'
			></div>
			<motion.div className='pl-10' style={{ opacity }}>
				<span className='text-xs font-bold tracking-widest opacity-40'>
					{date}
				</span>
				<h3 className='mb-2 text-3xl font-semibold tracking-wide text-gray-600'>
					{title}
				</h3>
				<p className='text-gray-500'>{description}</p>
			</motion.div>
		</div>
	);
};

export default TimelineEvent;
