import Container from "../../../node_modules/react-bootstrap/Container";
import Navbar from "../../../node_modules/react-bootstrap/Navbar";
import Brand from "./brand/Brands";
import Links from "./links/Links";
import Icons from "./icons/Icons";
import './override.css'
// import style from "./navbar.module.css";

export default function NavBar() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container fluid>
        {/* <!--logo--> */}
        <Brand />
        {/* <!--hamburger icon--> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* <!--Nav Items--> */}
          <Links />
          {/* contact nav */}
          <Icons />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
