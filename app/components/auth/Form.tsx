"use client";

import { Button } from "@/components/ui/button";

import { UserData } from "@/app/hooks/useAuth";
import { usePath } from "@/app/hooks/usePath";

import { Mail, Lock } from "lucide-react";

import { NextPage } from "next";

import Input from "./Input";

interface Props {
  userData: UserData;
  setUserData: (userData: UserData) => void;
}

const Form: NextPage<Props> = ({ userData, setUserData }) => {
  const { path, router } = usePath();

  return (
    <div className="space-y-4">
      <Input
        icon={Mail}
        type="email"
        placeholder="Email Address"
        value={userData.email}
        onChange={(e: any) =>
          setUserData({ ...userData, email: e.target.value })
        }
      />

      <Input
        icon={Lock}
        type="password"
        placeholder="Password"
        value={userData.password}
        onChange={(e: any) =>
          setUserData({ ...userData, password: e.target.value })
        }
      />

      {path === "register" && (
        <Input
          icon={Lock}
          type="password"
          placeholder="Confirm Password"
          value={userData.confirmPassword}
          onChange={(e: any) =>
            setUserData({ ...userData, confirmPassword: e.target.value })
          }
        />
      )}

      <Button
        type="submit"
        className="w-full bg-primary/90 mt-2 text-white font-medium p-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02]"
      >
        {path === "login" ? "Sign In" : "Create Account"}
      </Button>

      {path === "login" && (
        <div className="text-center">
          <Button
            variant="ghost"
            onClick={() => router.push("login")}
            className="text-primary/70 hover:text-primary text-sm font-medium transition-colors"
          >
            Forgot your password?
          </Button>
        </div>
      )}
    </div>
  );
};

export default Form;
