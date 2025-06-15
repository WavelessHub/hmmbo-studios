"use client";

import AuthForm from "@/app/components/auth/AuthForm";

import { RegisterSchemaType } from "@/schemas/auth";
import { useRegisterForm } from "@/hooks/useForm";

import { NextPage } from "next";

const RegisterPage: NextPage = ({}) => {
  const form = useRegisterForm();

  const onSubmit = (data: RegisterSchemaType) => {
    console.log("Account Register:", data);

    form.reset();
  };

  return <AuthForm mode="register" form={form} onSubmit={onSubmit} />;
};

export default RegisterPage;
