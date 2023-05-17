import { useState } from "react";
import Nav from "../../../../node_modules/react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import s from "./icons.module.css";

export default function Icons() {
  const [icons, setIcons] = useState([
    {
      href: "https://github.com/bridgemami",
      fontAwesome: faGithub,
      site: "GitHub Link",
      id: 0,
    },
    {
      href: "https://www.linkedin.com/in/bridgemanmichael/",
      fontAwesome: faLinkedin,
      site: "LinkedIn Link",
      id: 1,
    },
    {
      href: "mailto:mdbridgeman@gmail.com",
      fontAwesome: faEnvelope,
      site: "Email Link",
      id: 2,
    },
  ]);
  return (
    <Nav className={`ms-auto-lg p-2 flex-row`}>
      {icons.map((icon) => {
        console.log(icon.fontAwesome);
        return (
          <Nav.Link
            href={`${icon.href}`}
            target="_blank"
            rel="noreferrer"
            key={icon.id}
            aria-label={`link to ${icon.site}`}
          >
            <FontAwesomeIcon
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
