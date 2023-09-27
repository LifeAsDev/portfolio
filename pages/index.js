import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.nav}>
        <Image
          className={styles.hero}
          src="/images/hero.jpg"
          width={500}
          height={500}
          alt="Picture of the author"
        />
        <Link className={styles.white} href="/">
          Angelo Sarmiento
        </Link>
        <ul>
          <li>HOME</li>
          <li>RESUMEN</li>
          <li>PROJECTS</li>
          <li>CONTACT</li>
        </ul>
      </nav>
      <main></main>
    </div>
  );
}
