import Layout from "@/components/Layout";
import Experience from "@/components/Experience/Experience";
import Head from "next/head";

export default function ExperiencePage() {
  return (
    <>
      <Head>
        <title>Experience | Ashwanth</title>
      </Head>
      <Layout>
        <Experience />
      </Layout>
    </>
  );
}
