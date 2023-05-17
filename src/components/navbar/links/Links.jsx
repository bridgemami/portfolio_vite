import { useState } from "react";
import Nav from "../../../../node_modules/react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import resume from "../../../../src/Resume_10_22.pdf";
import s from "./links.module.css";

export default function Links() {
  const [links, setLinks] = useState([
    {
      title: "Home",
      href: "/",
      id: 0,
    },
    {
      title: "Skills",
      href: "/#skills",
      id: 1,
    },
    {
      title: "Projects",
      href: "/#projects",
      id: 2,
    },
    {
      title: "About",
      href: "/#about",
      id: 3,
    },
    {
      title: "Contact",
      href: "/#contact",
      id: 4,
    },
  ]);
  return (
    <Nav className="me-auto">
      {links.map((link) => {
        return (
          <Nav.Link
            className={`${s.font}`}
            aria-current="page"
            key={link.id}
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
