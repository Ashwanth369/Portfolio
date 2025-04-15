import Layout from "@/components/Layout";
import Projects from "@/components/Blog/Blog";
import Head from "next/head";

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Blog | Ashwanth</title>
      </Head>
      <Layout>
        <Projects />
      </Layout>
    </>
  );
}
