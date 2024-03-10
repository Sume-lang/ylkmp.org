import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "../../public/default-elements/navigations";
import Footerone from "../../public/default-elements/footersone";
import Footertwo from "../../public/default-elements/footertwo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yaksa Lumbung Kemanusiaan Masyarakat Pedesaan (YLKMP)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footerone />
        <Footertwo />
      </body>
    </html>
  );
}
