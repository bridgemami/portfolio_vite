import s from './skills.module.css';
import Title from './title/Title';
import Icons from './icons/Icons';


export default function Skills () {
  
    return (
    <section className={s.container}  id="skills">
      <Title title="Skills" />
      <Icons />       
      </section>
    
    )
}
