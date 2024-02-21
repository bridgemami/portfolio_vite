import { useState } from "react";
import Nav from "../../../../node_modules/react-bootstrap/Nav";
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
      href: "mailto:mdbridgeman@gmail.com",
      icon: FaEnvelope,
      site: "Email Link",
    },
  ]);
  return (
    <Nav className={`ms-auto-lg p-2 flex-row`}>
      {icons.map((icon) => {
        return (
          <Nav.Link
            href={`${icon.href}`}
            target="_blank"
            rel="noreferrer"
            key={nanoid()}
            aria-label={`link to ${icon.site}`}
          >
            <icon.icon
              className={`${s.faThreeX} pe-3 pe-lg-0`}
              icon={icon.fontAwesome}
              // aria-labelledby={`link to ${icon.site}`}
            />
          </Nav.Link>
        );
      })}
    </Nav>
  );
}
