import { nanoid } from 'nanoid'
import projectData from "./data/projects.json";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import s from "./projectlist.module.css";
import { DiHtml5, DiCss3, DiSass, 
  DiReact, DiWordpress } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { FaBootstrap } from "react-icons/fa6"
import { IoLogoJavascript } from "react-icons/io5";
import { SiNextdotjs, SiFirebase } from "react-icons/si";

const categoryMap = {
  DiHtml5: DiHtml5,
  DiCss3: DiCss3,
  DiSass: DiSass,
  FaBootstrap: FaBootstrap,
  DiWordpress: DiWordpress,
  IoLogoJavascript: IoLogoJavascript,
  VscJson: VscJson,
  DiReact: DiReact,
  SiNextdotjs: SiNextdotjs,
  SiFirebase: SiFirebase
};

export default function ProjectList() {
  return (
    <>
      {projectData &&
        projectData.map((data) => {
          console.log(data.category.map(c => c))
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
                <Card.Text className={s.skillsContainer}>{data.category.map(categoryName=>{
                  const CategoryComponet = categoryMap[categoryName]
                  if(CategoryComponet) {
                    return <CategoryComponet key={nanoid()} className={s.skill} />
                  }
                  return null
                })}</Card.Text>
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
