import {z} from "zod";

const experienceSchema = z.object({
  startDate: z.date(),
  endDate: z.enum(['current']).or(z.date()),
  jobTitle: z.string(),
  organization: z.string(),
  organizationUrl: z.string().url().optional()
});

export type Experience = z.infer<typeof experienceSchema>;

export default experienceSchema;
