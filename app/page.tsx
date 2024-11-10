import Head from "next/head";
import About from "./components/about/page";
import Business from "./components/business/Business";
import Footer from "./components/footer/Footer";
import Header from "./components/header-components/Header";
import Team from "./components/our-team/Team";
import Services from "./components/services/page";

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
      <Business />
    </>
  );
}
