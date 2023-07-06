import React from 'react';
import { Timeline } from '@/components';
import { TimelineSections } from '@/utils';

const TimelineSection = () => {
	return (
		<div className='max-w-screen-md'>
			{TimelineSections.map((section, index) => (
				<Timeline key={index} {...section} />
			))}
		</div>
	);
};

export default TimelineSection;
