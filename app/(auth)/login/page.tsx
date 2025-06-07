"use client";

import { LoginSchemaType } from "@/app/schemas/auth";
import { useLoginForm } from "@/app/hooks/useAuth";
import { AuthForm } from "@/app/components/auth";

import { NextPage } from "next";

interface Props {}

const LoginPage: NextPage<Props> = ({}) => {
  const onSubmit = (data: LoginSchemaType) => {
    console.log("Login:", data);
  };

  return <AuthForm mode="login" form={useLoginForm()} onSubmit={onSubmit} />;
};

export default LoginPage;
