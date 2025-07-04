import type { Metadata } from "next";
//import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppLogo from "../assets/svg/log-f.svg";

//const geistSans = Geist({
// variable: "--font-geist-sans",
//subsets: ["latin"],
//});

//const geistMono = Geist_Mono({
//variable: "--font-geist-mono",
//subsets: ["latin"],
//});

export const metadata: Metadata = {
  title: "Petro Data",
  description: "Petro Data Dashoard",
  icons: {
    icon: [
      {
        url: AppLogo.src,
        type: "image/svg+xml",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ height: "100%" }}>
      <body
        suppressHydrationWarning

        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
