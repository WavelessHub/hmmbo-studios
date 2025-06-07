"use client";

import { useAuth } from "@/app/hooks/useAuth";
import { usePath } from "@/app/hooks/usePath";

import { Mail } from "lucide-react";

import { NextPage } from "next";

interface Props {}

const VerifyPage: NextPage<Props> = ({}) => {
  const { userData } = useAuth();
  const { router } = usePath();

  return (
    <div>
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center mx-auto mb-4">
          <Mail className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold mt-2">Check Your Email</h3>
        <p className="text-gray-400 text-sm">
          We've sent a verification link to
          <span className="text-white font-medium">{userData.email}</span>
        </p>
      </div>
      <button className="w-full bg-primary/90 hover:bg-primary text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary/70 focus:ring-offset-2 focus:ring-offset-black">
        Resend Verification Email
      </button>
      <div className="text-center mt-4">
        <button
          onClick={() => router.push("login")}
          className="text-primary/70 hover:text-primary mt-2 text-sm font-medium transition-colors"
        >
          Back to Sign In
        </button>
      </div>
    </div>
  );
};

export default VerifyPage;
