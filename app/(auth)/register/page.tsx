"use client";

import { RegisterSchemaType } from "@/app/schemas/auth";
import { useRegisterForm } from "@/app/hooks/useAuth";
import { AuthForm } from "@/app/components/auth";

import { NextPage } from "next";

interface Props {}

const RegisterPage: NextPage<Props> = ({}) => {
  const onSubmit = (data: RegisterSchemaType) => {
    console.log("Register:", data);
  };

  return (
    <AuthForm mode="register" form={useRegisterForm()} onSubmit={onSubmit} />
  );
};

export default RegisterPage;
