import { z } from "zod";

const commentSchema = z.object({
  message: z
    .string()
    .min(1, { message: "Please enter your message." })
    .max(250, { message: "Message must be 250 characters or fewer." }),
});

type CommentSchemaType = z.infer<typeof commentSchema>;

export { commentSchema, type CommentSchemaType };
