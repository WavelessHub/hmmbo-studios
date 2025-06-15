"use client";

import AuthForm from "@/app/components/auth/AuthForm";

import { RegisterSchemaType } from "@/schemas/auth";
import { useRegisterForm } from "@/hooks/useForm";

import { Suspense } from "react";
import { NextPage } from "next";

const RegisterPage: NextPage = ({}) => {
  const form = useRegisterForm();

  const onSubmit = (data: RegisterSchemaType) => {
    console.log("Account Register:", data);

    form.reset();
  };

  return (
    <Suspense>
      <AuthForm mode="register" form={form} onSubmit={onSubmit} />
    </Suspense>
  );
};

export default RegisterPage;
