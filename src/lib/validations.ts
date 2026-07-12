import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must contain at least 2 characters.")
    .max(80, "Name must contain no more than 80 characters."),

  email: z
    .string()
    .trim()
    .email("Enter a valid email address.")
    .max(160, "Email address is too long."),

  subject: z
    .string()
    .trim()
    .min(3, "Subject must contain at least 3 characters.")
    .max(120, "Subject must contain no more than 120 characters."),

  message: z
    .string()
    .trim()
    .min(10, "Message must contain at least 10 characters.")
    .max(3000, "Message must contain no more than 3000 characters."),

  company: z
    .string()
    .max(0, "Spam submission detected.")
    .optional()
    .or(z.literal("")),
});

export type ContactFormValues = z.infer<
  typeof contactFormSchema
>;