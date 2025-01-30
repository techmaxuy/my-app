import type { Metadata } from "next";
//import localFont from "next/font/local";
import "./globals.css";
import { APP_NAME, APP_DESCRIPTION, SERVER_URL } from "../lib/contants";
import {inter} from "../components/shared/fonts";

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`} 
      >
        {children}
      </body>
    </html>
  );
}
