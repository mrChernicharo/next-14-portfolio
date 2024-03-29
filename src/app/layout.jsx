import "./globals.css";
import { Inter } from "next/font/google";
// import { Viewport } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Felipe Melo Portfolio",
  description: "Senior Fullstack Developer Portfolio",
};

// export const viewport = {
//   initialScale: 1,
//   userScalable: false,
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
