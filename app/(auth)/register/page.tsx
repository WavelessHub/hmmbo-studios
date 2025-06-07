"use client";

import { useAuth } from "@/app/hooks/useAuth";
import { usePath } from "@/app/hooks/usePath";
import { Form } from "@/app/components/auth";

import { FormEvent } from "react";
import { NextPage } from "next";

interface Props {}

const RegisterPage: NextPage<Props> = ({}) => {
  const { userData, setUserData } = useAuth();
  const { router } = usePath();

  const handleRegister = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Account Registration:", userData);
    router.push(`verify?email=${userData.email}`);
  };

  return (
    <form onSubmit={handleRegister}>
      <Form userData={userData} setUserData={setUserData} />
    </form>
  );
};

export default RegisterPage;
