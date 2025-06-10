import { defineCollection, z } from 'astro:content';

const notes = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.date(),
		image: z.string().optional()
	})
});

const projects = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.date(),
		image: z.string().optional(),
		github: z.string().optional(),
		demo: z.string().optional(),
		technologies: z.array(z.string()).optional()
	})
});

export const collections = {
	notes,
	projects
}; 