import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ContactForm from "./components/home/contactForm";
import Features from "./components/home/features";
import Hero from "./components/home/hero";
import Portfolio from "./components/home/portfolio";
import Skills from "./components/home/skills";
import Layout from "./components/layout";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <Features />
        <Skills />
        <Portfolio />
        <ContactForm />
      </Layout>
    </>
  );
}
