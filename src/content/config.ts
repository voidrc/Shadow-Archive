import { defineCollection, z } from 'astro:content';

const blogSchema = z.object({
	title: z.string(),
	description: z.string(),
	pubDate: z.string(),
	heroImage: z.string().optional(),
});

const blog = defineCollection({
	type: 'content',
	schema: blogSchema,
});

const projects = defineCollection({
	type: 'content',
	schema: blogSchema,
});

export const collections = { blog, projects }; 