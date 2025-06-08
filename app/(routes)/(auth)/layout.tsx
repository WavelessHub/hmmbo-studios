import Features from "@/app/components/auth/Features";
import Tabs from "@/app/components/auth/Tabs";

import { PropsWithChildren } from "react";
import { NextPage } from "next";

const AuthLayout: NextPage<PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Left Side - Form */}
      <div className="w-1/2 flex items-center justify-center p-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-12">
            <p className="text-4xl font-bold mt-2">Welcome</p>
            <p className="text-gray-400 mt-2">
              Let&#39;s get you signed in to{" "}
              <span className="text-primary font-semibold">Hmmbo Studios</span>
            </p>
          </div>

          <Tabs />

          {/* Form */}
          {children}
        </div>
      </div>

      {/* Right Side - Features */}
      <div className="w-1/2 bg-gradient-to-br from-primary/70 via-primary to-primary p-12 flex flex-col justify-center">
        <Features />
      </div>
    </div>
  );
};

export default AuthLayout;
