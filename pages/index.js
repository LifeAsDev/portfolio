import Head from "next/head";
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import LinkIcon from "./components/linkIcon";
import GitHubIcon from "./components/githubIcon";
import LinkedinIcon from "./components/linkendinIcon";
import FemIcon from "./components/femIcon";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Agrega un escucha de evento de desplazamiento
    window.addEventListener("scroll", handleScroll);

    // Elimina el escucha de evento cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Función para determinar la sección activa
  const determineActiveSection = () => {
    const sections = ["home", "resumen", "projects", "contact"];

    for (const section of sections) {
      const elemento = document.getElementById(section);
      const posicion = elemento ? elemento.offsetTop : 0;

      if (
        scrollPosition >= posicion - 250 &&
        scrollPosition < posicion - 250 + elemento.offsetHeight
      ) {
        setActiveSection(section);
        return;
      }
    }

    setActiveSection(null);
  };

  // Llama a la función para determinar la sección activa cada vez que hay un cambio en el scroll
  useEffect(() => {
    determineActiveSection();
  }, [scrollPosition]);

  function toggleClassById(id, action) {
    var element = document.getElementById(id);
    if (element) {
      if (action === "remove") {
        element.classList.remove("none");
      } else if (action === "add") {
        element.classList.add("none");
      } else {
        // Si el parámetro action está vacío o no es "remove" ni "add", simplemente togglea la clase
        element.classList.toggle("none");
      }
    }
  }
  const form = useRef();
  const [disableForm, setDisableForm] = useState(false);
  const sendEmail = (e) => {
    toggleClassById("MS", "remove");
    e.preventDefault();
    setDisableForm(true);
    emailjs
      .sendForm(
        "service_stlyfg1",
        "template_8urcobm",
        form.current,
        "GWeZLW5EZDmIIJr1a"
      )
      .then(
        (result) => {
          setDisableForm(false);
          document.getElementById("myForm").reset();

          console.log(result.text);
        },
        (error) => {
          setDisableForm(false);
          document.getElementById("myForm").reset();

          console.log(error.text);
        }
      );
  };
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
              width={40}
              height={40}
              alt="logo"
            />
            <p> Angelo Sarmiento</p>
          </Link>
          <ul className={styles.ul}>
            <li
              style={
                activeSection === "home"
                  ? { borderBottom: "2px solid #55c459", color: "#55c459" }
                  : null
              }
            >
              <Link href="#home">HOME</Link>
            </li>
            <li
              style={
                activeSection === "resumen"
                  ? { borderBottom: "2px solid #55c459", color: "#55c459" }
                  : null
              }
            >
              <Link href="#resumen">RESUMEN</Link>
            </li>
            <li
              style={
                activeSection === "projects"
                  ? { borderBottom: "2px solid #55c459", color: "#55c459" }
                  : null
              }
            >
              <Link href="#projects">PROJECTS</Link>
            </li>
            <li
              style={
                activeSection === "contact"
                  ? { borderBottom: "2px solid #55c459", color: "#55c459" }
                  : null
              }
            >
              <Link href="#contact">CONTACT</Link>
            </li>
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
        <section id="home" className={styles.home}>
          <h1>ANGELO SARMIENTO</h1>
          <h2>FRONT-END DEVELOPER</h2>
        </section>
        <section id="resumen" className={styles.skills}>
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
        <section id="projects" className={styles.projects}>
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
        <section id="contact" className={styles.contact}>
          <div className={styles.margin}>
            <h2 className={styles.sectionTittle}>Contact</h2>
            <div className={styles.contactBox}>
              <div>
                <div>
                  <div>
                    <svg
                      width="44px"
                      height="44px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.5 7.04148C12.3374 7.0142 12.1704 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13C13.6569 13 15 11.6569 15 10C15 9.82964 14.9858 9.6626 14.9585 9.5"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M5 15.2161C4.35254 13.5622 4 11.8013 4 10.1433C4 5.64588 7.58172 2 12 2C16.4183 2 20 5.64588 20 10.1433C20 14.6055 17.4467 19.8124 13.4629 21.6744C12.5343 22.1085 11.4657 22.1085 10.5371 21.6744C9.26474 21.0797 8.13831 20.1439 7.19438 19"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4>Location:</h4>
                    <p>Manaus - state of Amazonas Brazil</p>{" "}
                  </div>
                </div>
                <div>
                  <div>
                    <svg
                      fill="white"
                      width="40px"
                      height="40px"
                      viewBox="0 0 1920 1920"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 1694.235h1920V226H0v1468.235ZM112.941 376.664V338.94H1807.06v37.723L960 1111.233l-847.059-734.57ZM1807.06 526.198v950.513l-351.134-438.89-88.32 70.475 378.353 472.998H174.042l378.353-472.998-88.32-70.475-351.134 438.89V526.198L960 1260.768l847.059-734.57Z"
                        fillRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4>Email:</h4>
                    <p>Angelosarmiento5d@gmail.com</p>
                  </div>
                </div>
                <div>
                  <div>
                    <svg
                      width="48px"
                      height="48px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.00655 7.93309C3.93421 9.84122 4.41713 13.0817 7.6677 16.3323C8.45191 17.1165 9.23553 17.7396 10 18.2327M5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C15.2529 20.0243 14.1963 19.9541 13 19.6111"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4>Call:</h4>
                    <p>+55 95 8418 4507</p>
                  </div>
                </div>
              </div>
              <form
                id="myForm"
                disabled={disableForm}
                ref={form}
                onSubmit={sendEmail}
              >
                <div>
                  <input
                    disabled={disableForm}
                    required
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                  />
                  <input
                    disabled={disableForm}
                    required
                    type="text"
                    name="user_email"
                    placeholder="Your Email"
                  />
                </div>
                <input
                  disabled={disableForm}
                  type="text"
                  name="subject"
                  required
                  placeholder="Subject"
                />
                <textarea
                  disabled={disableForm}
                  required
                  name="message"
                  label="Message"
                  placeholder="Message"
                />
                <div className={styles.buttonFormBox}>
                  <p
                    className="none"
                    id="MS"
                    onClick={() => {
                      if (disableForm === false) toggleClassById("MS");
                    }}
                  >
                    {disableForm ? "Sending Message..." : "Message Sent"}
                  </p>
                  <button
                    className={styles.buttonForm}
                    disabled={disableForm}
                    type="submit"
                    value="Send"
                  >
                    {disableForm ? (
                      <span className="loader"></span>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>Angelo Sarmiento</p>
        <p>
          <i>Client satisfaction takes the spotlight in my priorities</i>
        </p>
        <ul>
          <li>
            <Link
              href="https://www.linkedin.com/in/angelo-sarmiento-1bab3b290/"
              target="_blank"
            >
              <LinkedinIcon />
            </Link>
          </li>
          <li>
            <Link href="https://github.com/LifeAsDev" target="_blank">
              <GitHubIcon />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.frontendmentor.io/profile/LifeAsDev"
              target="_blank"
            >
              <FemIcon />
            </Link>
          </li>
        </ul>
        <p>
          © Copyright <strong>#é</strong> . All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
