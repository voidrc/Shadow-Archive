import { defineCollection, z } from 'astro:content';

// Define the schema for blog posts
const blogSchema = z.object({
	title: z.string(),
	description: z.string(),
	pubDate: z.string().transform((str) => new Date(str)),
	heroImage: z.string().optional(),
});

// Define the schema for projects
const projectSchema = z.object({
	title: z.string(),
	description: z.string(),
	pubDate: z.string().transform((str) => new Date(str)),
	heroImage: z.string().optional(),
});

// Define the blog collection
const blog = defineCollection({
	type: 'content',
	schema: blogSchema,
});

// Define the projects collection
const projects = defineCollection({
	type: 'content',
	schema: projectSchema,
});

// Export collections separately
export const collections = {
	blog,
	projects,
}; 