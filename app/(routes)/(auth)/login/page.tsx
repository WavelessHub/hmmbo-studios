import AuthForm from "@/app/components/auth/AuthForm";

import { LoginSchemaType } from "@/schemas/auth";
import { useLoginForm } from "@/hooks/useForm";

import { NextPage } from "next";

const LoginPage: NextPage = ({}) => {
  const form = useLoginForm();

  const onSubmit = (data: LoginSchemaType) => {
    console.log("Account Login:", data);

    form.reset();
  };

  return <AuthForm mode="login" form={form} onSubmit={onSubmit} />;
};

export default LoginPage;
