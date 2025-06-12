import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
	const notes = await getCollection('notes');
	const projects = await getCollection('projects');
	const allItems = [
		...notes.map((post) => ({
			...post.data,
			link: `/notes/${post.id}/`,
			pubDate: post.data.pubDate,
		})),
		...projects.map((project) => ({
			...project.data,
			link: `/projects/${project.id}/`,
			pubDate: project.data.pubDate,
		})),
	];
	allItems.sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: allItems,
	});
}
