import { nanoid } from 'nanoid'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import s from "./projectcard.module.css";
import { PropTypes } from "prop-types";
import { DiHtml5, DiCss3, DiSass, 
    DiReact, DiWordpress } from "react-icons/di";
  import { VscJson } from "react-icons/vsc";
  import { FaBootstrap } from "react-icons/fa6"
  import { IoLogoJavascript } from "react-icons/io5";
  import { SiNextdotjs, SiFirebase } from "react-icons/si";

export default function ProjectCard({link, image, alt, title, description, category, github }){
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
     return(
     <Card className={s.container}>
                    <a href={link} target="_blank" rel="noreferrer" className={s.imageContainer}>
                      <Card.Img
                        variant="bottom"
                        src={image}
                        alt={`${alt}`}
                        className={s.image}
                      />
                    </a>
                    {/* fix image link */}
                    <Card.Body className={s.body}>
                      <a href={link} target="_blank" rel="noreferrer">
                        <Card.Title className={s.title}>{title}</Card.Title>
                      </a>
                      <Card.Text className={s.text}>{description}</Card.Text>
                      <Card.Text className={s.skillsContainer}>{category.map(categoryName=>{
                        const CategoryComponent = categoryMap[categoryName]
                        if(CategoryComponent) {
                          return <CategoryComponent key={nanoid()} className={s.skill} />
                        }
                        return null
                      })}</Card.Text>
                      <div className={s.button}>
                      <Button
                          variant="link"
                          className={s.buttonColor}
                          href={github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          GitHub
                        </Button>
                        <Button
                          variant="link"
                          className={s.buttonColor}
                          href={link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Visit
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>)
      }

ProjectCard.propTypes = {
  link: PropTypes.string,
  image:PropTypes.string, 
  alt: PropTypes.string, 
  title: PropTypes.string, 
  description: PropTypes.string, 
  category: PropTypes.array, 
  github: PropTypes.string,
      };