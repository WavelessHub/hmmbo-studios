"use client";

import { DefaultValues, useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, ZodTypeAny } from "zod";

import { loginSchema, registerSchema } from "@/schemas/auth";
import { helpSchema } from "@/schemas/help";
import { commentSchema } from "@/schemas/comment";

export const useLoginForm = () =>
  useZodForm(loginSchema, { email: "", password: "" });

export const useRegisterForm = () =>
  useZodForm(registerSchema, { email: "", password: "", confirmPassword: "" });

export const useHelpForm = () =>
  useZodForm(helpSchema, {
    name: "",
    email: "",
    subject: "General Enquiry",
    message: "",
  });

export const useCommentForm = () => useZodForm(commentSchema, { message: "" });

const useZodForm = <TSchema extends ZodTypeAny>(
  schema: TSchema,
  defaultValues?: DefaultValues<z.infer<TSchema>>
): UseFormReturn<z.infer<TSchema>> =>
  useForm<z.infer<TSchema>>({
    resolver: zodResolver(schema),
    defaultValues,
    mode: "onChange",
  });
