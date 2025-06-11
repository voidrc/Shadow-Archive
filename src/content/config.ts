import { defineCollection, z } from 'astro:content';

// Define the schema for both collections
const baseSchema = z.object({
	title: z.string(),
	description: z.string(),
	pubDate: z.string().transform((str) => new Date(str)),
	heroImage: z.string().optional(),
});

// Define the blog collection
const blog = defineCollection({
	type: 'content',
	schema: baseSchema,
});

// Define the projects collection
const projects = defineCollection({
	type: 'content',
	schema: baseSchema,
});

// Export both collections
export const collections = {
	blog,
	projects,
}; 