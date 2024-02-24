import { nanoid } from "nanoid";
import { useState } from "react"
import { DiHtml5, DiCss3, DiSass, DiBootstrap, 
        DiReact, DiWordpress, DiGit, DiGithubBadge, DiResponsive } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io5";
import { FaUniversalAccess } from "react-icons/fa";
import { SiOpenapiinitiative, SiNextdotjs, SiFirebase } from "react-icons/si";

import s from './icons.module.css'

export default function Icons () {
    const [skills, setSkills] = useState([
             {icon: <DiHtml5 />,
        title: "HTML5"},
        {icon: <DiCss3 />,
        title: "CSS3"},
        {icon: <IoLogoJavascript />,
        title:"javascript + ES6"},
        {icon:<DiSass />,
        title: "SASS"},
        {icon:<VscJson />,
        title: "JSON"},
        {icon:<SiOpenapiinitiative />,
        title: "OPEN APIS"},
        {icon: <DiBootstrap />,
        title:"bootstrap 5"},
        {icon: <DiReact />,
        title:"react"},
        {icon: <SiNextdotjs />,
        title:"next.js"},
        {icon: <SiFirebase />,
        title:"firebase"},
        {icon: <DiWordpress />,
        title:"wordpress"},
        {icon: <DiGit />,
        title:"git"},
        {icon: <DiGithubBadge />,
        title:"github"},
        {icon: <FaUniversalAccess/>,
        title:"Accessibility"},
        {icon: <DiResponsive  />,
        title:"Responsive design"},
      ])

      return (
        <ul className={s.list}>
        {
          skills.map(skill=> {
            return (<li key={nanoid()} className={s.item_container}>
            {skill.icon}
            <p>{skill.title.toUpperCase()}</p>
            </li>)
          })
        }
      </ul>     
      )
}