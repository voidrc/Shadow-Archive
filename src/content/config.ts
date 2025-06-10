import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.date(),
		updatedDate: z.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const projects = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.date(),
		technologies: z.array(z.string()),
		sourceUrl: z.string().url(),
		demoUrl: z.string().url().optional(),
		heroImage: z.string().optional(),
	}),
});

export const collections = { blog, projects }; 