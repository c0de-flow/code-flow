import Head from "next/head";
import About from "./components/about/page";
import Business from "./components/business/Business";
import Header from "./components/header-components/Header";
import Team from "./components/our-team/Team";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <Header />
      <About />
      <Team />
      <Business />
    </>
  );
}
