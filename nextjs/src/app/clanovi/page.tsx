import Navbar from "../components/Navbar";
import hr from '../../../messages/hr.json'
import Footer from "../components/Footer";
import { Metadata } from "next";
import Clanovi from "./Clanovi";

export const metadata: Metadata = {
    title: 'Powerlifting klub Galacticos - Članovi',
};


const ClanoviPage = () => {


    return (
        <main>
            <Navbar t={hr}></Navbar>
            <Clanovi ></Clanovi>
            <Footer t={hr}></Footer>
        </main>
    );
};

export default ClanoviPage;
