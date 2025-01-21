import { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/nav-bar/nav-bar";

export const metadata: Metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
