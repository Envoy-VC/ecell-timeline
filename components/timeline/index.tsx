import React from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';
import { TimelineSection, TimelineItem } from '@/types';

const Timeline = ({ title, items }: TimelineSection) => {
	const scrollRef = React.useRef<HTMLDivElement>(null);
	const targeRef = React.useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: targeRef,
		offset: ['start end', 'end start'],
	});
	const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);
	return (
		<div className='max-w-screen-md' ref={scrollRef}>
			<div className='sticky top-0 z-10 py-3 bg-white shadow-xl shadow-white'>
				<h2 className='px-3 py-4 text-4xl font-bold tracking-widest text-gray-300'>
					{title}
				</h2>
			</div>
			<div className='flex flex-row py-16 mt-3 ml-2 border-gray-200 space-y-14'>
				<motion.div
					className='w-1 text-transparent origin-top bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500'
					style={{ scaleY: scale }}
					ref={targeRef}
				>
					a
				</motion.div>
				<div className='w-1 -ml-1 text-transparent origin-top border-gray-200 border-[1px] bg-gray-200'>
					a
				</div>
				<div className='flex flex-col gap-16'>
					{items.map((item: TimelineItem, index: number) => (
						<div className='relative' key={index}>
							<div
								className='hover:animate-ping absolute top-5 -left-3.5 bg-blue-400 h-6 w-6 rounded-full border-4 border-white'
								title='current event'
							></div>
							<div className='pl-10'>
								<span className='text-xs font-bold tracking-widest opacity-40'>
									{item.date}
								</span>
								<h3 className='mb-2 text-3xl font-semibold tracking-wide text-gray-600'>
									{item.title}
								</h3>
								<p className='text-gray-500'>{item.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Timeline;
