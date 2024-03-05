import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Title from "../skills/title/Title";
import ProjectList from "./ProjectList";
import projectData from "./data/projects.json";
import s from './projectlist.module.css'
import 'animate.css';

export default function Projects() {
  const currentProjects = projectData.filter(db => db.isActive)
  const pastProjects = projectData.filter(db => !db.isActive)
  console.log(currentProjects)

  return (
    <Container id="projects" as="section">
      <Row>
        <Title title="My Projects" />
      </Row>
      <Row className={`justify-content-evenly animate__animated animate__backInRight ${s.animation}`}>
       <section>
        <ProjectList
        heading="Current Project(s)"
        projectData={currentProjects}
        />
       </section>
       <section>
        <ProjectList
       heading="Past Projects"
        projectData = {pastProjects}
        />
       </section>
      </Row>
    </Container>
  );
}
