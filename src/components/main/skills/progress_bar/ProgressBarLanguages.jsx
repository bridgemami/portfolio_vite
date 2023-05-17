import { useState } from "react";
import ProgressBar from "react-bootstrap/esm/ProgressBar";
// import s from '../progressbarwidth.module.css'

export default function ProgressBarLanguages() {
  const [languages, setLanguages] = useState([
    {
      language: "HTML",
      percent: "90",
      id: 0,
    },
    {
      language: "CSS",
      percent: "90",
      id: 1,
    },
    {
      language: "JavaScript",
      percent: "66.67",
      id: 2,
    },
    {
      language: "JSON",
      percent: "85",
      id: 3,
    },
    {
      language: "SASS",
      percent: "70",
      id: 4,
    },
    {
      language: "PHP",
      percent: "20",
      id: 5,
    },
    {
      language: "SQL",
      percent: "20",
      id: 6,
    },
  ]);
  return (
    // <div className="pb-5 tab-content" id="pills-tabContent">
    <div
      // className="tab-pane fade show active"
      id="languages-tabs"
      role="tabpanel"
      aria-labelledby="languages-tab"
      tabIndex="0"
    >
      {languages.map((lang) => {
        console.log(lang.percent);
        return (
          <div key={lang.id}>
            <h4>{lang.language}</h4>
            <ProgressBar animated now={lang.percent} />
          </div>
        );
      })}
    </div>
  );
}
