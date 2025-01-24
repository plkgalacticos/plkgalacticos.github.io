import type { Metadata } from "next";
import "./globals.css";
import { Roboto_Mono } from "next/font/google";
import GoogleAnalytics from "./components/GoogleAnalytics";
import CookieBanner from "./components/CookieBanner";
import hr from '../../messages/hr.json'

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
      <GoogleAnalytics GA_MEASUREMENT_ID={"G-FFR9TEZ4BF"}></GoogleAnalytics>
      <body
        className={`${robotoMono.className}} antialiased`}
      > 
        {children}
        <CookieBanner></CookieBanner>
        <script src="https://www.google.com/recaptcha/api.js"></script>
      </body>
    </html>
  );
}
