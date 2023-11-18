import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import LinkIcon from "./components/linkIcon";
import GitHubIcon from "./components/githubIcon";

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
            <Image
              className={styles.logo}
              src="/images/logo.png"
              width={48}
              height={48}
              alt="logo"
            />
            <p> Angelo Sarmiento</p>
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
                <div className={styles.projectImageContainer}>
                  <div className={styles.projectIconContainer}>
                    <div className={styles.projectIcon}>
                      <Link
                        target="_blank"
                        href={"https://ezone-restaurant.vercel.app/"}
                      >
                        <LinkIcon />
                      </Link>
                    </div>
                    <div className={styles.projectIcon}>
                      <Link
                        target="_blank"
                        href={"https://github.com/LifeAsDev/ezone-restaurant"}
                      >
                        <GitHubIcon />
                      </Link>
                    </div>
                  </div>
                  <Image
                    className={styles.img}
                    src="/images/page3.png"
                    width={453}
                    height={349}
                    alt="éZoné Restaurant"
                  ></Image>
                </div>
                <div className={styles.projectText}>
                  <div>
                    <p className={styles.projectTittle}>éZoné Restaurant</p>
                    <p className={styles.projectInfo}>
                      Dynamic user experience for a restaurant website allowing
                      users to explore the menu, log in for a personalized
                      journey, and seamlessly add items to shopping cart.
                    </p>
                  </div>
                  <div className={styles.stackUsedBox}>
                    <p>Nextjs</p>
                    <p>Tailwind</p>
                    <p>JavaScript</p> <p>NextAuth</p>
                    <p>Framer-motion</p>
                    <p>MongoDB</p>
                  </div>
                </div>
              </div>
              <div className={styles.projectBox}>
                <div className={styles.projectImageContainer}>
                  <div className={styles.projectIconContainer}>
                    <div className={styles.projectIcon}>
                      <Link
                        target="_blank"
                        href={"https://lifeasdev.github.io/rest-countries-api/"}
                      >
                        <LinkIcon />
                      </Link>
                    </div>
                    <div className={styles.projectIcon}>
                      <Link
                        target="_blank"
                        href={
                          "https://github.com/LifeAsDev/rest-countries-api/tree/master"
                        }
                      >
                        <GitHubIcon />{" "}
                      </Link>
                    </div>
                  </div>
                  <Image
                    className={styles.img}
                    src="/images/page1.png"
                    width={453}
                    height={349}
                    alt="REST Countries API"
                  ></Image>
                </div>

                <div className={styles.projectText}>
                  <div>
                    <p className={styles.projectTittle}>REST Countries API</p>
                    <p className={styles.projectInfo}>
                      Explore countries worldwide with React, HTML, CSS, and
                      JavaScript. Also, it offers filtering options and
                      incorporates framer-motion animations.
                    </p>
                  </div>
                  <div className={styles.stackUsedBox}>
                    <p>React</p>
                    <p>Framer-motion</p>
                    <p>JavaScript</p> <p>CSS</p>
                    <p>HTML</p>
                  </div>
                </div>
              </div>
              <div className={styles.projectBox}>
                <div className={styles.projectImageContainer}>
                  <div className={styles.projectIconContainer}>
                    <div className={styles.projectIcon}>
                      <Link
                        target="_blank"
                        href={
                          "https://lifeasdev.github.io/rock-paper-scissors/"
                        }
                      >
                        <LinkIcon />
                      </Link>
                    </div>
                    <div className={styles.projectIcon}>
                      <Link
                        target="_blank"
                        href={
                          "https://github.com/LifeAsDev/rock-paper-scissors/tree/master"
                        }
                      >
                        <GitHubIcon />
                      </Link>
                    </div>
                  </div>
                  <Image
                    className={styles.img}
                    src="/images/page2.png"
                    width={453}
                    height={349}
                    alt="REST Countries API"
                  ></Image>
                </div>

                <div className={styles.projectText}>
                  <div>
                    <p className={styles.projectTittle}>
                      Rock, Paper, Scissors, Lizard, Spock
                    </p>
                    <p className={styles.projectInfo}>
                      Crafted a sleek Rock, Paper, Scissors game featuring
                      Lizard, Spock mode, playable against the computer.
                    </p>
                  </div>
                  <div className={styles.stackUsedBox}>
                    <p>React</p>
                    <p>JavaScript</p> <p>CSS</p>
                    <p>HTML</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
const linkIcon = () => {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212"
        stroke="#1C274C"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373"
        stroke="#1C274C"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
};
