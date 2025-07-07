"use client";

import AuthForm from "@/app/components/auth/AuthForm";

import { RegisterSchemaType } from "@/schemas/auth";
import { useRegisterForm } from "@/hooks/useForm";

import { NextPage } from "next";
import { redirect } from "next/navigation";

const RegisterPage: NextPage = ({}) => {
  const form = useRegisterForm();

  const onSubmit = async (data: RegisterSchemaType) => {
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
  
      if (!res.ok) {
        const errorData = await res.json()
        console.error('Register Error:', errorData)
        return
      }
  
      const result = await res.json()
      console.log('Account Registered:', result)
      form.reset()
      redirect("/");
  
    } catch (err) {
      console.error('Unexpected Error:', err)
    }
  }

  return <AuthForm mode="register" form={form} onSubmit={onSubmit} />;
};

export default RegisterPage;
