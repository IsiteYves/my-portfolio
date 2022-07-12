// @ts-nocheck
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles?.container}>
      <Head>
        <title>Yves Isite | Portfolio</title>
        <meta
          name="description"
          content="Welcome to Yves Isite's brand | He cooks a lot of projects and adventures!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className=" text-[#fff] bg-blue-700">
          This is the main content area
        </div>
      </main>
    </div>
  );
}
