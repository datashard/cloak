import { defineCollection, z } from "astro:content";

const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  link: z.string(),
  position: z.string().optional(),
  icon: z.string().optional(),
  customClass: z.string().optional(),
  tags: z.array(z.string()).optional(),
  featured: z.boolean().optional(),
  previous: z.boolean().optional().default(false)
});

const projects = defineCollection({
  type: "data",
  schema: projectSchema,
});

export type Project = z.infer<typeof projectSchema>;

const currentlySchema = z.object({
  company: z.string(),
  position: z.string(),
  link: z.string().optional(),
});

const currently = defineCollection({
  type: "data",
  schema: currentlySchema,
});

export type Currently = z.infer<typeof currentlySchema>;

export const collections = { projects, currently };
