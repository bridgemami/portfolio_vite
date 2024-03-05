import { nanoid } from 'nanoid'
import ProjectCard from './ProjectCard';

export default function ProjectList({heading, projectData}) {
  return (
    <section>
      <h3>{heading}</h3>
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
  );
}
