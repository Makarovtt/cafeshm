import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/redux/provider";
import "./globals.css";
import SocialButton from "@/components/social-button/social-button";
import Head from "next/head";

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
      {/* <Head>
        <script src="https://yookassa.ru/checkout-widget/v1/checkout-widget.js"></script>
      </Head> */}
      <body className={inter.className}>
        <Providers>
          {children}
          <SocialButton className="hidden md:flex" />
        </Providers>
      </body>
    </html>
  );
}
