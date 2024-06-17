import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/redux/provider";
import "./globals.css";
import SocialButton from "@/components/social-button/social-button";
import SocialButtonMobile from "@/components/social-button/social-button-mobile";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Кафе-Бар «Шашлычный мир»",
  description: "Сеть кафе в Астрахани с 2012 года",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
          <SocialButton className="hidden md:flex" />
        </Providers>
      </body>
    </html>
  );
}
