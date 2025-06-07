"use client";

import { usePath } from "@/app/hooks/usePath";
import { Mail, Lock } from "lucide-react";
import { useState } from "react";

import Input from "./Input";

interface Props {
  userData: {
    email: string;
    password: string;
    confirmPassword?: string;
  };
  setUserData: (userData: {
    email: string;
    password: string;
    confirmPassword?: string;
  }) => void;
}

const Form = ({ userData, setUserData }: Props) => {
  const [showPassword, setShowPassword] = useState(false);

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
        showPasswordToggle={true}
        showPassword={showPassword}
        togglePasswordVisibility={() => setShowPassword(!showPassword)}
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

      <button
        type="submit"
        className="w-full bg-primary/90 mt-2 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02]"
      >
        {path === "login" ? "Sign In" : "Create Account"}
      </button>

      {path === "login" && (
        <div className="text-center">
          <button
            type="button"
            onClick={() => router.push("login")}
            className="text-primary/70 hover:text-primary text-sm font-medium transition-colors"
          >
            Forgot your password?
          </button>
        </div>
      )}
    </div>
  );
};

export default Form;
