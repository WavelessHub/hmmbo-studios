"use client";

import AuthForm from "@/app/components/auth/AuthForm";

import { RegisterSchemaType } from "@/app/schemas/auth";
import { useRegisterForm } from "@/app/hooks/useForm";

import { NextPage } from "next";

interface Props {}

const RegisterPage: NextPage<Props> = ({}) => {
  const onSubmit = (data: RegisterSchemaType) => {
    console.log("Account Register:", data);
  };

  return (
    <AuthForm mode="register" form={useRegisterForm()} onSubmit={onSubmit} />
  );
};

export default RegisterPage;
