import Image from "next/image";
import type { Metadata } from "next";
import { dmSans } from "@/config/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Simple Coffee Listing",
  description: "Coffee shop where you can see different kind of info of our coffees.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <Image
          src={'/bg-cafe.jpg'}
          alt="background-coffee-image"
          width={2560}
          height={600}
          priority
          className="w-full h-[300px] object-cover absolute top-0 left-0 -z-10"
        />
        {children}
      </body>
    </html>
  );
}
