"use client";

import { useAuth } from "@/app/hooks/useAuth";
import { usePath } from "@/app/hooks/usePath";
import { Form } from "@/app/components/auth";

import { FormEvent } from "react";
import { NextPage } from "next";

interface Props {}

const LoginPage: NextPage<Props> = ({}) => {
  const { userData, setUserData } = useAuth();
  const { router } = usePath();

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Account Login:", userData);
    router.push("/");
  };

  return (
    <form onSubmit={handleLogin}>
      <Form userData={userData} setUserData={setUserData} />
    </form>
  );
};

export default LoginPage;
