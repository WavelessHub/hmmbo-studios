"use client";

import AuthForm from "@/app/components/auth/AuthForm";

import { LoginSchemaType } from "@/schemas/auth";
import { useLoginForm } from "@/hooks/useForm";

import { useRouter } from "next/navigation";
import { NextPage } from "next";

const LoginPage: NextPage = () => {
  const form = useLoginForm();
  const router = useRouter();

  const onSubmit = async (data: LoginSchemaType) => {
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error("Login Error:", errorData);
        return;
      }

      const result = await res.json();
      console.log("Account Logged In:", result);

      form.reset();
      router.push("/");
    } catch (err) {
      console.error("Unexpected Error:", err);
    }
  };

  return <AuthForm mode="login" form={form} onSubmit={onSubmit} />;
};

export default LoginPage;
