import { nanoid } from 'nanoid'
import ProjectCard from './ProjectCard';
import { PropTypes } from "prop-types";
import s from './projectlist.module.css'


export default function ProjectList({heading, projectData}) {
  return (
    <section className={s.container}>
      <h3>{heading}</h3>
      <section className={s.projectContainer}>
      {projectData &&
      projectData.map(db => {
         return ( <ProjectCard
          key={nanoid()}
          link={db.link} 
          image={db.image} 
          alt={db.alt} 
          title={db.title} 
          description={db.description} 
          category={db.category}
          github={db.github} />)
      })}
      </section>
    </section>
  );
}

ProjectList.propTypes = {
  heading: PropTypes.string,
  projectData: PropTypes.array,
};
