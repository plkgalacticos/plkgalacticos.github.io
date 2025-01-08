'use client';
import Hero from "../sections/Hero";
import Data from "../sections/Data";
import Story from "../sections/Story";
import Mission from "../sections/Mission";
import Vision from "../sections/Vision";
import Values from "../sections/Values";
import Join from "../sections/Join";
import FAQ from "../sections/FAQ";
import en from '../../../messages/en.json'
import Competition from "../sections/Competition";

export default function Home() {
    
  return (
    <main className="text-white font-roboto flex flex-col overflow-x-hidden">
        <section className="">
            <Hero t={en}></Hero>
        </section>
        <section className="bg-black px-4 py-24">
            <Data t={en}></Data>
        </section>
        <section className="bg-black">
            <Story t={en}></Story>
        </section>
        <section className="bg-black">
            <Mission t={en}></Mission>
        </section>
        <section className="bg-black">
            <Vision t={en}></Vision>
        </section>
        <section className="bg-black px-4 py-72">
            <Values t={en}></Values>
        </section>
        <section className="bg-black px-4 py-12 pb-36">
            <Competition t={en}></Competition>
        </section>
        <section className="z-10 bg-join bg-center bg-no-repeat bg-cover bg-fixed min-h-[100vh] flex flex-row justify-center items-center bg-blend-darken bg-black/70 px-4 py-12">
            <Join t={en}></Join>
        </section>
        <section className="bg-black px-4 py-12 pt-36">
            <FAQ t={en}></FAQ>
        </section>
    </main>
  );
}
