import { useState } from "react";

export interface UserData {
  email: string;
  password: string;
  confirmPassword?: string;
}

export const useAuth = () => {
  const [userData, setUserData] = useState<UserData>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  return { userData, setUserData };
};
