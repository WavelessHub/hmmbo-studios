"use client";

import AuthForm from "@/app/components/auth/AuthForm";

import { LoginSchemaType } from "@/app/schemas/auth";
import { useLoginForm } from "@/app/hooks/useForm";

import { NextPage } from "next";

interface Props {}

const LoginPage: NextPage<Props> = ({}) => {
  const form = useLoginForm();

  const onSubmit = (data: LoginSchemaType) => {
    console.log("Account Login:", data);

    form.reset();
  };

  return <AuthForm mode="login" form={form} onSubmit={onSubmit} />;
};

export default LoginPage;
