import { useState } from "react";
import Nav from "../../../../node_modules/react-bootstrap/Nav";
import { FaFileDownload } from "react-icons/fa";
import resume from "/Michael_Bridgeman_Resume_2_25.pdf";
import s from "./links.module.css";
import { nanoid } from "nanoid";

export default function Links() {
  const [links, setLinks] = useState([
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/#about",
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
        <FaFileDownload className={s.faDownArrow} />
      </Nav.Link>
    </Nav>
  );
}
