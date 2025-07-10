"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const VerifyPage = () => {
  const { push } = useRouter();
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const [error, setError] = useState("");

  const handleChange = (index: number, value: string) => {
    if (/^\d$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (index < 5) inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    const key = e.key;

    if (key === "Backspace") {
      e.preventDefault();
      const newOtp = [...otp];
      if (newOtp[index]) {
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        inputsRef.current[index - 1]?.focus();
        const newOtp = [...otp];
        newOtp[index - 1] = "";
        setOtp(newOtp);
      }
    }

    if (key === "ArrowLeft" && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }

    if (key === "ArrowRight" && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handlePaste = (
    e: React.ClipboardEvent<HTMLInputElement>,
    index: number
  ) => {
    e.preventDefault();
    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);
    if (pasted) {
      const newOtp = [...otp];
      pasted.split("").forEach((char, i) => {
        if (index + i < 6) {
          newOtp[index + i] = char;
        }
      });
      setOtp(newOtp);
      const nextIndex = Math.min(index + pasted.length, 5);
      inputsRef.current[nextIndex]?.focus();
    }
  };

  const handleSubmit = async () => {
    const fullOtp = otp.join("");
    if (fullOtp.length !== 6) {
      setError("Please enter all 6 digits.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ otp: fullOtp }),
      });

      const result = await res.json();

      if (!res.ok) {
        setError(result.error || "OTP verification failed.");
        return;
      }

      push("/");
    } catch {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    try {
      setLoading2(true);
      const res = await fetch("/api/auth/resend-otp", {
        method: "POST",
        credentials: "include",
      });

      const result = await res.json();
      if (!res.ok) {
        setError(result.error || "Resend failed");
        return;
      }

      setError("New OTP sent!");
    } catch {
      setError("Resend failed.");
    } finally {
      setLoading2(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center mx-auto mb-4">
          <Mail className="w-8 h-8 text-white" />
        </div>

        <p className="text-xl font-semibold mt-2">Check Your Email</p>
        <p className="text-gray-400 text-sm">
          We've sent a one-time password to{" "}
          <span className="text-white font-medium">your email</span>
        </p>
      </div>

      <div className="flex justify-center gap-2 mb-4">
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={(e) => handlePaste(e, index)}
            ref={(el) => {
              inputsRef.current[index] = el;
            }}
            className="w-12 h-12 text-center text-xl border rounded-lg bg-black/50 border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-primary"
          />
        ))}
      </div>

      {error && (
        <p className="text-red-500 text-sm text-center mb-2">{error}</p>
      )}

      <div className="ms-4 mt-2 me-4">
        <Button
          disabled={loading}
          onClick={handleSubmit}
          className="w-full mb-3 bg-primary/90 hover:bg-primary text-white font-medium p-4 rounded-lg"
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </Button>

        <Button
          variant="outline"
          className="w-full mb-2"
          onClick={handleResendOtp}
          disabled={loading2}
        >
          {loading2 ? "Sending..." : "Resend OTP"}
        </Button>
      </div>

      <div className="text-center">
        <Button
          variant="ghost"
          onClick={() => push("/login")}
          className="text-primary/70 hover:text-primary mt-4 text-sm font-medium"
        >
          Back to Sign In
        </Button>
      </div>
    </div>
  );
};

export default VerifyPage;
