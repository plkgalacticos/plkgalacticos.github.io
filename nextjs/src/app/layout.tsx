import type { Metadata } from "next";
import "./globals.css";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({subsets: ['latin']})

export const metadata: Metadata = {
  title: "PLK Galacticos",
  description: "Naš klub je zajednica sportaša strastvenih za powerlifting. Težimo biti najjači i najtrofejniji powerlifting klub.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr">
      <body
        className={`${robotoMono.className}} antialiased`}
      > 
        
        {children}
      </body>
    </html>
  );
}
