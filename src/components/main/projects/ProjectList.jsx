import { nanoid } from 'nanoid'
import projectData from "./data/projects.json";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import s from "./projectlist.module.css";

export default function ProjectList() {
  return (
    <>
      {projectData &&
        projectData.map((data) => {
          return (
            <Card key={nanoid()} className={`${s.container}`}>
              <a href={data.link} target="_blank" rel="noreferrer">
                <Card.Img
                  variant="bottom"
                  src={data.image}
                  alt={`${data.alt}`}
                  className={s.image}
                />
              </a>
              {/* fix image link */}
              <Card.Body className={s.body}>
                <a href={data.link} target="_blank" rel="noreferrer">
                  <Card.Title className={s.title}>{data.title}</Card.Title>
                </a>
                <Card.Text className={s.text}>{data.description}</Card.Text>
                <Card.Text className={s.text}>{data.category}</Card.Text>
                <div className={s.button}>
                <Button
                    variant="link"
                    className={s.buttonColor}
                    href={data.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </Button>
                  <Button
                    variant="link"
                    className={s.buttonColor}
                    href={data.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit
                  </Button>
                </div>
              </Card.Body>
            </Card>
          );
        })}
    </>
  );
}
