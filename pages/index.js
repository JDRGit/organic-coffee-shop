import Head from "next/head";
import { Inter } from "@next/font/google";
import Navbar from "../components/Navbar";
import { LandingSection } from "../components/landing";
import Products from "../components/products";
import { Footer } from "../components/footer";
import { Features } from "../components/features";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Jaime's Organic Coffee Shop App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <LandingSection />
      <Products />
      <Features />
      <Footer />
    </>
  );
}
