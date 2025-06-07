import {
  useForm as useReactHookForm,
  UseFormProps,
  UseFormReturn,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email().min(3),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    ),
});

type LoginSchemaType = z.infer<typeof loginSchema>;

const registerSchema = z
  .object({
    email: z.string().email().min(3),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one special character"
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type RegisterSchemaType = z.infer<typeof registerSchema>;

function useForm<TSchema extends z.ZodType<any, any>>(
  schema: TSchema,
  formConfig?: UseFormProps<z.infer<TSchema>>
): UseFormReturn<z.infer<TSchema>> {
  return useReactHookForm<z.infer<TSchema>>({
    resolver: zodResolver(schema),
    mode: "onChange", // Optional, can be "onSubmit" | "onBlur" | "onChange" | "all"
    ...formConfig,
  });
}

export {
  loginSchema,
  type LoginSchemaType,
  registerSchema,
  type RegisterSchemaType,
  useForm,
};
