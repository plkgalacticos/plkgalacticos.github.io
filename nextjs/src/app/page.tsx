import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import { Suspense, lazy } from "react";
import hr from '../../messages/hr.json';

const Mission = lazy(() => import("./sections/Mission"));
const FAQ = lazy(() => import("./sections/FAQ"));
const Values = lazy(() => import("./sections/Values"));
const Data = lazy(() => import("./sections/Data"));
const Join = lazy(() => import("./sections/Join"));
const Vision = lazy(() => import("./sections/Vision"));
const Story = lazy(() => import("./sections/Story"));
const Footer = lazy(() => import("./components/Footer"));
const Competition = lazy(() => import("./sections/CompetitionReview"));

export default function Home() {
  return (
    <main className="text-white font-roboto flex flex-col overflow-x-hidden">
      <Navbar t={hr} />
      <section>
        <Hero t={hr} />
      </section>
      
      <Suspense fallback={<div>Loading...</div>}>
        <section className="bg-black px-4 py-24">
          <Data t={hr} />
        </section>
        
        <section className="bg-black">
          <Story t={hr} />
        </section>
        
        <section className="bg-black">
          <Mission t={hr} />
        </section>
        
        <section className="bg-black">
          <Vision t={hr} />
        </section>
        
        <section className="bg-black px-4 py-72">
          <Values t={hr} />
        </section>

        <section className="bg-black px-4 py-12 pb-36 overflow-hidden">
          <Competition t={hr} />
        </section>
        
        
        <section id="join" className="z-[1]">
          <Join t={hr} />
        </section>
        
        <section className="bg-black px-4 py-36">
          <FAQ t={hr} />
        </section>
        
        <Footer t={hr} />
      </Suspense>
    </main>
  );
}
