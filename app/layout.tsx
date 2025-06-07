import { NextPage, type Metadata } from "next";
import { Poppins } from "next/font/google";

import { PropsWithChildren } from "react";

import "./globals.css";

const font = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Hmmbo Studios",
  description: "An Team of Developers, Hmmbo Studios",
};

const RootLayout: NextPage<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" className="h-full w-full" suppressHydrationWarning>
      <body className={`${font.className} antialiased h-full w-full`}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
