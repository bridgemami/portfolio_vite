import { useState } from "react";
import Nav from "../../../../node_modules/react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import resume from "/Michael_Bridgeman_Resume_2_24.pdf";
import s from "./links.module.css";
import { nanoid } from "nanoid";

export default function Links() {
  const [links, setLinks] = useState([
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Skills",
      href: "/#skills",
    },
    {
      title: "Projects",
      href: "/#projects",
    },
    {
      title: "About",
      href: "/#about",
    },
    {
      title: "Contact",
      href: "/#contact",
    },
  ]);
  return (
    <Nav className="me-auto">
      {links.map((link) => {
        return (
          <Nav.Link
            className={`${s.font}`}
            aria-current="page"
            key={nanoid()}
            href={link.href}
          >
            {link.title}
          </Nav.Link>
        );
      })}
      <Nav.Link href={resume} className={`nav-link ${s.font}`} download>
        Resume
        <FontAwesomeIcon icon={faFileArrowDown} className={s.faDownArrow} />
      </Nav.Link>
    </Nav>
  );
}
