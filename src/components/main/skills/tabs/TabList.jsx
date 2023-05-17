import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import s from "./tablist.module.css";
import "./override.css";
import ProgressBarApplications from "../progress_bar/ProgressBarApplications";
import ProgressBarCommandLineTools from "../progress_bar/ProgressBarCommandLineTools";
import ProgressBarFrameworks from "../progress_bar/ProgressBarFrameworks";
import ProgressBarLanguages from "../progress_bar/ProgressBarLanguages";

export default function TabList() {
  const [key, setKey] = useState("languages");
  const [skills, setSkills] = useState([
    {
      title: "Languages",
      bar: <ProgressBarLanguages />,
      id: "languages",
    },

    {
      title: "Frameworks/Libraries",
      bar: <ProgressBarFrameworks />,
      id: "frameworks",
    },

    {
      title: "Applications",
      bar: <ProgressBarApplications />,
      id: "applications",
    },

    {
      title: "Command Line Tools",
      bar: <ProgressBarCommandLineTools />,
      id: "commandLineTools",
    },
  ]);
  return (
    <Tabs
      active={key}
      onSelect={(k) => setKey(k)}
      id="tabs"
      className={`mb-3 ${s.white}`}
      justify
      variant="pills"
      aria-describedby="Skills tab"
    >
      {skills && skills.map((skill, i) => {
        return (
          <Tab
            eventKey={skill.id}
            title={skill.title}
            tabClassName={s.white}
            key={i}
            role="tabpanel"
          >
            {skill.bar}
          </Tab>
        );
      })}
    </Tabs>
  );
}
