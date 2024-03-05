import Jumbotron from "./jumbotron/Jumbotron";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import About from "./about/About";
import Contact from "./contact/Contact";
import BackToTopButton from "../backToTop/BackToTopButton";
import s from "./main.module.css";
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Main() {
  return (
    <main className={s.main}>
      <Jumbotron name="Michael Bridgeman" title="Front-end Web Developer" />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <BackToTopButton />
    </main>
  );
}
