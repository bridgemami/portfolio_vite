// import s from './skills.module.css';
import TabList from './tabs/TabList';
import Title from './title/Title';

export default function Skills () {
    return (
    <section className="container">
   <Title title="My Skills" id="skills"/>
    <div className="row">
    <TabList />
    </div>
              
  </section>
    )
}