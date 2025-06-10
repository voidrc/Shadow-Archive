import { defineCollection, z } from 'astro:content';

<<<<<<< HEAD
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
=======
const notes = defineCollection({
	type: 'content',
>>>>>>> parent of c4d7c0d (revert)
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.date(),
<<<<<<< HEAD
		technologies: z.array(z.string()),
		sourceUrl: z.string().url(),
		demoUrl: z.string().url().optional(),
		heroImage: z.string().optional(),
	}),
});

export const collections = { blog, projects }; 
=======
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
>>>>>>> parent of c4d7c0d (revert)
