import Layout from "@/components/Layout";
import About from "@/components/Home/About";
import TechStack from "@/components/Home/TechStack";
import Contact from "@/components/Home/Contact";
import MotionSection from "@/components/MotionSection";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ashwanth KG</title>
      </Head>
      <Layout>
        <MotionSection>
          <About />
        </MotionSection>
        <MotionSection>
          <TechStack />
        </MotionSection>
        <MotionSection>
          <Contact />
        </MotionSection>
      </Layout>
    </>
  );
}
