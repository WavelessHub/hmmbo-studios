import { z } from "zod";

const helpSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Please enter your name." })
    .max(32, { message: "Name must be 32 characters or fewer." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.enum(["General Enquiry", "Technical Support", "Billing"], {
    errorMap: () => ({ message: "Please select a subject." }),
  }),
  message: z
    .string()
    .min(1, { message: "Please enter your message." })
    .max(250, { message: "Message must be 250 characters or fewer." }),
});

type HelpSchemaType = z.infer<typeof helpSchema>;

export { helpSchema, type HelpSchemaType };
