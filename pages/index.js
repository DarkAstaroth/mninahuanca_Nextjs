import HeadPage from "./components/head";
import ContactForm from "./components/home/contactForm";
import Features from "./components/home/features";
import Hero from "./components/home/hero";
import Portfolio from "./components/home/portfolio";
import Skills from "./components/home/skills";

export default function Home() {
    return (
        <>
            <HeadPage title="Welcome!" />
            <Hero />
            <Features />
            <Skills />
            <Portfolio />
            <ContactForm />
        </>
    );
}
