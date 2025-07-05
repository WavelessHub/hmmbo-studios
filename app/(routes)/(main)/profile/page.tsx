"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Bell,
  Download,
  Info,
  Lock,
  Settings,
  ShoppingCart,
  User,
} from "lucide-react";

import { NextPage } from "next";
import { useRouter, useSearchParams } from "next/navigation";

const Page: NextPage = ({}) => {
  const tab = useSearchParams().get("tab");

  const router = useRouter();

  if (!tab) {
    router.push("/profile?tab=user");
    return null;
  }

  return (
    <div className="py-32 flex items-center justify-center">
      <div className="max-w-7xl w-full flex items-start justify-between gap-x-20">
        <div className="fixed flex flex-col items-start gap-y-4 w-60">
          <div className="flex flex-col gap-y-1 w-full">
            <Button
              onClick={() => router.push("?tab=user")}
              className={`hover:bg-zinc-900/75 transition-all bg-transparent py-5 flex justify-start ${
                tab === "user" && "bg-zinc-900/75"
              }`}
            >
              <User className="mr-2" /> Profile
            </Button>
            <Button
              onClick={() => router.push("?tab=account")}
              className={`hover:bg-zinc-900/75 transition-all bg-transparent py-5 flex justify-start ${
                tab === "account" && "bg-zinc-900/75"
              }`}
            >
              <Settings className="mr-2" /> Account
            </Button>

            <Button
              onClick={() => router.push("?tab=purchases")}
              className={`hover:bg-zinc-900/75 transition-all bg-transparent py-5 flex justify-start ${
                tab === "purchases" && "bg-zinc-900/75"
              }`}
            >
              <ShoppingCart className="mr-2" /> Purchases
            </Button>

            <Button
              onClick={() => router.push("?tab=downloads")}
              className={`hover:bg-zinc-900/75 transition-all bg-transparent py-5 flex justify-start ${
                tab === "downloads" && "bg-zinc-900/75"
              }`}
            >
              <Download className="mr-2" /> Downloads
            </Button>
          </div>

          {/* <Separator className="bg-zinc-800 h-0.5" />

          <div className="flex flex-col gap-y-1 w-full">
            <Button className="hover:bg-zinc-900/75 transition-all bg-transparent py-5 flex justify-start">
              <User className="mr-2" /> Profile
            </Button>
            <Button className="hover:bg-zinc-900/75 transition-all bg-transparent py-5 flex justify-start">
              <Settings className="mr-2" /> Account
            </Button>
            <Button className="hover:bg-zinc-900/75 transition-all bg-transparent py-5 flex justify-start">
              <Info className="mr-2" /> Accessibility
            </Button>
            <Button className="hover:bg-zinc-900/75 transition-all bg-transparent py-5 flex justify-start">
              <Bell className="mr-2" /> Notifications
            </Button>
          </div> */}
        </div>

        <div className="w-full ml-80">
          <p className="text-white font-bold text-4xl mb-5">
            {tab[0].toUpperCase() + tab.slice(1)}
          </p>

          <Separator
            orientation="horizontal"
            className="w-full bg-zinc-800 h-0.5 mb-10"
          />

          {tab === "user" && Profile()}
          {tab === "account" && Account()}
          {tab === "purchases" && Purchases()}
          {tab === "downloads" && Downloads()}
        </div>
      </div>
    </div>
  );
};

const Profile = () => {
  return (
    <div className="flex items-start justify-between">
      <div className="flex flex-col gap-y-6 flex-1">
        <div className="flex flex-col gap-y-3">
          <Label className="font-medium">Display Name</Label>
          <Input className="border-zinc-800 border-[1.5px] py-5" />
        </div>

        <div className="flex flex-col gap-y-3">
          <Label className="font-medium">Bio</Label>
          <textarea className="border-zinc-800 bg-transparent rounded-md border-[1.5px] h-20 p-3 text-sm focus:outline-none" />
        </div>

        <div>
          <Button className="bg-primary">Update Profile</Button>
        </div>
      </div>

      <div className="flex-1 w-full flex flex-col items-center">
        <div className="flex flex-col items-center gap-y-5">
          <Avatar className="cursor-pointer w-40 h-40 bg-zinc-900">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback className="text-4xl">HS</AvatarFallback>
          </Avatar>

          <Button className="bg-zinc-800/50 hover:bg-zinc-800/30 transition-all py-5 ">
            Change Profile Picture
          </Button>
        </div>
      </div>
    </div>
  );
};

const Account = () => {
  return (
    <div className="flex flex-col gap-y-10 flex-[1.5]">
      <div className="flex flex-col items-start gap-y-3">
        <Label className="font-medium">Change Username</Label>
        <div className="flex items-center gap-x-4">
          <Input
            disabled
            value="itzwaveless"
            className="border-zinc-800 border-[1.5px] py-5 w-72 font-medium"
          />
          <Button disabled className="bg-zinc-800 py-[22px] px-4">
            <Lock />
          </Button>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <p className="font-bold text-3xl">Password & Authentication</p>

        <div className="flex flex-col gap-y-10">
          <Button className="py-6 rounded-md w-52 font-bold">
            Change Password
          </Button>

          <div className="flex flex-col gap-y-2">
            <p className="font-bold text-lg">Enable Authenticator App (2FA)</p>
            <p className="text-sm font-medium w-[50%]">
              Protect your account with an extra layer of security. Once
              configured, you’ll be required to enter your password and complete
              one additional step in order to sign in.
            </p>

            <Button className="py-6 rounded-md mt-2 w-52 font-bold">
              Setup 2FA
            </Button>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <p className="font-bold text-4xl text-[#F59E0B]">Deactivate Account</p>

        <div className="flex flex-col items-start gap-y-5">
          <Label className="font-medium">
            Deactivation will temporarily suspend your account till you
            reactivate it.
          </Label>

          <Button
            className="border-[#F59E0B] font-bold px-10 border-[1.5px] text-[#F59E0B] py-6 hover:bg-[#F59E0B] hover:text-white transition-all"
            variant="outline"
          >
            Deactivate
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <p className="font-bold text-3xl text-red-500">Delete Account</p>

        <div className="flex flex-col items-start gap-y-5">
          <Label className="font-medium">
            Once you delete your account, there is no going back.
          </Label>

          <Button
            className="border-red-500 font-bold px-10 border-[1.5px] text-red-500 py-6 hover:bg-red-500 hover:text-white transition-all"
            variant="outline"
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

const Purchases = () => {
  return null;
};

const Downloads = () => {
  return null;
};

export default Page;
