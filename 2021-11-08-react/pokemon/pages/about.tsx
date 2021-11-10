import Link from "next/link";
import Head from "next/head";

function About() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Link href="/">
        <a>Home</a>
      </Link>
      <p>Hello Next.js</p>
    </div>
  );
}

export default About;
