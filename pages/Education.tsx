import Layout from "@/components/Layout";
import Education from "@/components/Education/Education";
import Head from "next/head";

export default function EducationPage() {
  return (
    <>
      <Head>
        <title>Education | Ashwanth</title>
      </Head>
      <Layout>
        <Education />
      </Layout>
    </>
  );
}
