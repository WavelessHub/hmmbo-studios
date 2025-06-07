"use client";

import AuthForm from "@/app/components/auth/AuthForm";

import { LoginSchemaType } from "@/app/schemas/auth";
import { useLoginForm } from "@/app/hooks/useForm";

import { NextPage } from "next";

interface Props {}

const LoginPage: NextPage<Props> = ({}) => {
  const onSubmit = (data: LoginSchemaType) => {
    console.log("Account Login:", data);
  };

  return <AuthForm mode="login" form={useLoginForm()} onSubmit={onSubmit} />;
};

export default LoginPage;
