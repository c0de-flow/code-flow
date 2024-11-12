import Head from "next/head";
import About from "./components/about/about";
import Footer from "./components/footer/Footer";
import Header from "./components/header-components/Header";
import Team from "./components/our-team/Team";
import Contact from "./components/contact/contact";
import Services from "./components/services/page";
import Projects from "./components/projects/Projects";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <Header />
      <About />
      <Services />
      <Team />
      <Projects/>
      <Contact/>
      <Footer />
    </>
  );
}
