"use client";

import { Input as InputField } from "@/components/ui/input";
import { InputHTMLAttributes, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import { NextPage } from "next";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ElementType;
}

const Input: NextPage<Props> = ({
  icon: Icon,
  type,
  placeholder,
  value,
  onChange,
  ...inputData
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 my-2">
        {placeholder}
      </label>

      <div className="relative">
        {Icon && (
          <Icon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        )}

        <InputField
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          {...inputData}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="pl-12 pr-12 py-6 bg-black/30 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-0 focus-visible:ring-0"
        />

        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white focus:outline-none"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
