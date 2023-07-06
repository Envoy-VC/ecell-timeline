export interface TimelineSection {
	title: string;
	items: TimelineItem[];
}

export interface TimelineItem {
	date: string;
	title: string;
	description: string;
}
