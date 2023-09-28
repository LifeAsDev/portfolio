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
        <div className={styles.navBox}>
          <Link className={styles.white} href="/">
            Angelo Sarmiento
          </Link>
          <ul className={styles.ul}>
            <li>HOME</li>
            <li>RESUMEN</li>
            <li>PROJECTS</li>
            <li>CONTACT</li>
          </ul>
        </div>
      </nav>
      <main className={styles.main}>
        <Image
          className={styles.hero}
          src="/images/hero.jpg"
          width={1920}
          height={1200}
          alt="Picture of the author"
        />
        <section className={styles.home}>
          <h1>ANGELO SARMIENTO</h1>
          <h2>FRONT-END DEVELOPER</h2>
        </section>
        <section className={styles.skills}>
          <div className={styles.margin}>
            <h2 className={styles.sectionTittle}>Skills</h2>
            <div className={styles.grid}>
              <div className={styles.skillBox}>
                <Image
                  src="/images/logo-javascript.svg"
                  width={75}
                  height={75}
                  alt="Picture of the author"
                />
                <p>JavaScript</p>
              </div>
              <div className={styles.skillBox}>
                <Image
                  src="/images/html-1.svg"
                  width={75}
                  height={75}
                  alt="Picture of the author"
                />
                <p>HTML5</p>
              </div>
              <div className={styles.skillBox}>
                <Image
                  src="/images/css-3.svg"
                  width={75}
                  height={75}
                  alt="Picture of the author"
                />
                <p>CSS</p>
              </div>
              <div className={styles.skillBox}>
                <Image
                  src="/images/react.svg"
                  width={75}
                  height={75}
                  alt="Picture of the author"
                />
                <p>React</p>
              </div>
              <div className={styles.skillBox}>
                <Image
                  src="/images/next-js.svg"
                  width={75}
                  height={75}
                  alt="Picture of the author"
                />
                <p>Next.js</p>
              </div>

              <div className={styles.skillBox}>
                <Image
                  src="/images/tailwind-css-2.svg"
                  width={75}
                  height={75}
                  alt="Picture of the author"
                />
                <p>Tailwind CSS</p>
              </div>
              <div className={styles.skillBox}>
                <Image
                  src="/images/mongodb-icon.svg"
                  width={75}
                  height={75}
                  alt="Picture of the author"
                />
                <p>mongoDB</p>
              </div>
              <div className={styles.skillBox}>
                <Image
                  src="/images/expressjs-icon.svg"
                  width={75}
                  height={75}
                  alt="Picture of the author"
                />
                <p>express.js</p>
              </div>
              <div className={styles.skillBox}>
                <Image
                  src="/images/sass-lang-icon.svg"
                  width={75}
                  height={75}
                  alt="Picture of the author"
                />
                <p>Sass</p>
              </div>
              <div className={styles.skillBox}>
                <Image
                  src="/images/git-scm-icon.svg"
                  width={75}
                  height={75}
                  alt="Picture of the author"
                />
                <p>Git</p>
              </div>
            </div>
            <h2 className={styles.sectionTittle}>About</h2>
            <div className={styles.aboutBox}>
              <p className={styles.about}>
                I'm Angelo, a devoted front-end developer who loves taking on
                new challenges and is always searching for ways to enhance. I
                hold critical thinking, punctuality, and attention to detail in
                high regard. The journey from never writing a line of code to
                self-learning enough to be an employed web developer has been
                quite the ride, and I'm still planning on learning more! SHOW ME
                more challenges!
              </p>
              <Image
                className={styles.avatar}
                src="/images/profile.jpg"
                width={720}
                height={1280}
                alt="Picture of the author"
              ></Image>
            </div>
          </div>
        </section>
        <section className={styles.projects}>
          <div className={styles.margin}>
            <h2 className={styles.sectionTittle}>Projects</h2>
            <div className={styles.projectsGrid}>
              <div className={styles.projectBox}>
                <Image
                  src="/images/page1.png"
                  width={453}
                  height={349}
                  alt="Picture of the author"
                ></Image>
                <div className={styles.projectText}>
                  <p className={styles.projectTittle}>REST Countries API</p>
                  <p className={styles.projectInfo}>
                    Explore countries worldwide with React, HTML, CSS, and
                    JavaScript. Also, it offers filtering options and
                    incorporates framer-motion animations.
                  </p>
                  <div className={styles.stackUsedBox}>
                    <p>React</p> <p>HTML</p>
                    <p>CSS</p>
                    <p>JavaScript</p>
                  </div>
                </div>
              </div>
              <div className={styles.projectBox}></div>
              <div className={styles.projectBox}></div>
              <div className={styles.projectBox}></div>
              <div className={styles.projectBox}></div>
              <div className={styles.projectBox}></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
