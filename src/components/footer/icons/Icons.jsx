import { useState, useEffect } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";
import s from "./icons.module.css";
import { nanoid } from "nanoid";

export default function Icons() {
  const [icons, setIcons] = useState([
    {
      href: "https://github.com/bridgemami",
      icon: FaGithub,
      site: "GitHub Link",
    },
    {
      href: "https://www.linkedin.com/in/bridgemanmichael/",
      icon: FaLinkedin,
      site: "LinkedIn Link",
    },
    {
      href: "mailto:mdbridgeman@gmail.com?subject=Get in Touch with Michael Bridgeman",
      icon: FaEnvelope,
      site: "Email Link",
    },
  ]);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      smooth: "smooth",
    });
  };
  return (
    <section className={`ms-auto-lg p-2 flex-row`}>
      <ul className={s.icon_container}>
      {icons.map((icon) => {
        return (
          <li
            key={nanoid()}
          >
            <a
            href={`${icon.href}`}
            target="_blank"
            rel="noreferrer"
            className={s.subcontainer}
            aria-label={`link to ${icon.site}`}
            >
            <icon.icon
              className={`${s.faThreeX} pe-lg-0`}
            />
            </a>
          </li>
        );
      })}
      </ul>
      <p className={s.back} onClick={() => scrollUp()}>BACK TO THE TOP</p>
    </section>
  );
}
