import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Title from "../skills/title/Title";
import ProjectList from "./ProjectList";

export default function Projects() {
  return (
    <Container id="projects" as="section">
      <Row>
        <Title title="My Projects" />
      </Row>
      <Row className={`justify-content-evenly`}>
        <ProjectList />
      </Row>
    </Container>
  );
}
