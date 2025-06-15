"use client";

import AuthForm from "@/app/components/auth/AuthForm";

import { LoginSchemaType } from "@/schemas/auth";
import { useLoginForm } from "@/hooks/useForm";

import { Suspense } from "react";
import { NextPage } from "next";

const LoginPage: NextPage = ({}) => {
  const form = useLoginForm();

  const onSubmit = (data: LoginSchemaType) => {
    console.log("Account Login:", data);

    form.reset();
  };

  return (
    <Suspense>
      <AuthForm mode="login" form={form} onSubmit={onSubmit} />
    </Suspense>
  );
};

export default LoginPage;
