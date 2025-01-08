import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Mission from "./sections/Mission";
import hr from '../../messages/hr.json'
import FAQ from "./sections/FAQ";
import Values from "./sections/Values";
import Data from "./sections/Data";
import Join from './sections/Join';
import Vision from "./sections/Vision";
import Story from "./sections/Story";
import Footer from "./components/Footer";
import Competition from "./sections/Competition";

export default function Home() {
  return (
    <main className="text-white font-roboto flex flex-col overflow-x-hidden">
        <Navbar t={hr}></Navbar>
        <section className="">
            <Hero t={hr}></Hero>
        </section>
        <section className="bg-black px-4 py-24">
            <Data t={hr}></Data>
        </section>
        <section className="bg-black">
            <Story t={hr}></Story>
        </section>
        <section className="bg-black">
            <Mission t={hr}></Mission>
        </section>
        <section className="bg-black">
            <Vision t={hr}></Vision>
        </section>
        <section className="bg-black px-4 py-72">
            <Values t={hr}></Values>
        </section>
        <section className="bg-black px-4 py-12 pb-36">
            <Competition t={hr}></Competition>
        </section>
        <section id='join' className="z-[1] bg-join bg-center bg-no-repeat bg-cover bg-fixed bg-blend-darken bg-black/70">
            <Join t={hr}></Join>
        </section>
        <section className="bg-black px-4 py-36">
            <FAQ t={hr}></FAQ>
        </section>
        <Footer t={hr}></Footer>
    </main>
  );
}
