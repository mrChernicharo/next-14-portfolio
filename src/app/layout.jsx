import { Inter } from "next/font/google";
import "./globals.css";
import { Viewport } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Felipe Melo",
  description: "Fullstack Developer Portfolio",
};

export const viewport = {
  initialScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
