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
});

const projects = defineCollection({
  type: "data",
  schema: projectSchema,
});

export type Project = z.infer<typeof projectSchema>;

export const collections = { projects };
