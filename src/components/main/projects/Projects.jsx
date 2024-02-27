import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Title from "../skills/title/Title";
import ProjectList from "./ProjectList";
import s from './projectlist.module.css'
import 'animate.css';

export default function Projects() {
  return (
    <Container id="projects" as="section">
      <Row>
        <Title title="My Projects" />
      </Row>
      <Row className={`justify-content-evenly animate__animated animate__backInRight ${s.animation}`}>
        <ProjectList />
      </Row>
    </Container>
  );
}
