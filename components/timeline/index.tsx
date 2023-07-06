import React from 'react';

import { TimelineSection, TimelineItem } from '@/types';

const Timeline = ({ title, items }: TimelineSection) => {
	return (
		<section className='w-[800px]'>
			<div className='sticky top-0 z-10 py-3 bg-white shadow-xl shadow-white'>
				<h2 className='group-date'>{title}</h2>
			</div>
			<div className='timeline'>
				{items.map((item: TimelineItem, index: number) => (
					<div className='relative' key={index}>
						<div
							className='absolute dot hover:animate-ping'
							title='current event'
						></div>
						<div className='pl-10'>
							<span className='timeline-date'>{item.date}</span>
							<h3 className='timeline-title'>{item.title}</h3>
							<p className='text-gray-500'>{item.description}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Timeline;
