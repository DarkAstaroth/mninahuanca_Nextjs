import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ContactForm from "./components/home/contactForm";
import Hero from "./components/home/hero";
import Layout from "./components/layout";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <ContactForm />
      </Layout>
    </>
  );
}
