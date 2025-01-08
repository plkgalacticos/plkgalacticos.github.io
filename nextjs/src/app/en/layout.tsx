import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import en from '../../../messages/en.json';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={`antialiased overflow-x-hidden box-border`} >
        <Navbar t={en}></Navbar>
        {children}
        <Footer t={en}></Footer>
    </main>
  );
}
