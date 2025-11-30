import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const geistMono = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "TaskNest",
  description: "Organize Your Team's Workflows in One Secure Space",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
