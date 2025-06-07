"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { UseFormReturn, FieldValues, Path } from "react-hook-form";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useState } from "react";

interface Props<TFormValues extends FieldValues> {
  form: UseFormReturn<TFormValues>;
  onSubmit: (data: TFormValues) => void;
  mode: "login" | "register";
}

function AuthForm<TFormValues extends FieldValues>({
  form,
  onSubmit,
  mode,
}: Props<TFormValues>) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Email */}
        <FormField
          control={form.control}
          name={"email" as Path<TFormValues>}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-sm font-medium text-gray-300">
                Email
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    {...field}
                    type="email"
                    placeholder="Email"
                    className="pl-12 pr-12 py-6 bg-black/30 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-0 focus-visible:ring-0"
                  />
                </div>
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        {/* Password */}
        <FormField
          control={form.control}
          name={"password" as Path<TFormValues>}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-sm font-medium text-gray-300">
                Password
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    {...field}
                    placeholder="Password"
                    type={showPassword ? "text" : "password"}
                    className="pl-12 pr-12 py-6 bg-black/30 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-0 focus-visible:ring-0"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white focus:outline-none"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        {/* Confirm Password (Register Only) */}
        {mode === "register" && (
          <FormField
            control={form.control}
            name={"confirmPassword" as Path<TFormValues>}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-sm font-medium text-gray-300">
                  Confirm Password
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      {...field}
                      placeholder="Confirm Password"
                      type={showPassword ? "text" : "password"}
                      className="pl-12 pr-12 py-6 bg-black/30 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-0 focus-visible:ring-0"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white focus:outline-none"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full bg-primary/90 mt-2 text-white font-medium p-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02]"
        >
          {mode === "login" ? "Sign In" : "Create Account"}
        </Button>

        {/* Forgot Password */}
        {mode === "login" && (
          <div className="text-center">
            <Button
              type="button"
              variant="ghost"
              className="text-primary/70 hover:text-primary text-sm font-medium transition-colors"
            >
              Forgot your password?
            </Button>
          </div>
        )}
      </form>
    </Form>
  );
}

export default AuthForm;
