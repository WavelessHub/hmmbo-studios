"use client";

import { Button } from "@/components/ui/button";

import { useRouter } from "next/navigation";
import { NextPage } from "next";

import { Mail } from "lucide-react";

const VerifyPage: NextPage = ({}) => {
  const router = useRouter();

  return (
    <div>
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center mx-auto mb-4">
          <Mail className="w-8 h-8 text-white" />
        </div>

        <p className="text-xl font-semibold mt-2">Check Your Email</p>

        <p className="text-gray-400 text-sm">
          We&#39;ve sent a verification link to{" "}
          <span className="text-white font-medium">email</span>
        </p>
      </div>

      <Button className="w-full bg-primary/90 hover:bg-primary text-white font-medium p-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary/70 focus:ring-offset-2 focus:ring-offset-black">
        Resend Verification Email
      </Button>

      <div className="text-center">
        <Button
          variant="ghost"
          onClick={() => router.push("login")}
          className="text-primary/70 hover:text-primary mt-4 text-sm font-medium transition-colors"
        >
          Back to Sign In
        </Button>
      </div>
    </div>
  );
};

export default VerifyPage;
