import Layout from "@/components/Layout";
import Projects from "@/components/Projects/Projects";
import Head from "next/head";

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Projects | Ashwanth</title>
      </Head>
      <Layout>
        <Projects />
      </Layout>
    </>
  );
}
