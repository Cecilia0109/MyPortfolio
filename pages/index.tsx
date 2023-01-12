import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { Hero } from "../components/Hero";
import Skills from "../components/Skills";
import Works from "../components/Works";
import About from "../components/About/Index";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Cecilia Lei&#39;s portfolio</title>
        <meta name="description" content="Cecilia Lei's portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="px-8 md:px-16 lg:px-24 xl:px-[240px]">
        <Hero />
        <Skills />
        <Works />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
