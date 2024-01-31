import { nanoid } from "nanoid";
import { useState } from "react";
import ProgressBar from "react-bootstrap/esm/ProgressBar";
// import s from '../progressbarwidth.module.css'

export default function ProgressBarLanguages() {
  const [languages, setLanguages] = useState([
    {
      language: "HTML",
      percent: "90",
    },
    {
      language: "CSS",
      percent: "90",
    },
    {
      language: "JavaScript",
      percent: "66.67",
    },
    {
      language: "JSON",
      percent: "85",
    },
    {
      language: "SASS",
      percent: "70",
    },
    {
      language: "PHP",
      percent: "20",
    },
    {
      language: "SQL",
      percent: "20",
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
        return (
          <div key={nanoid()}>
            <h4>{lang.language}</h4>
            <ProgressBar animated now={lang.percent} />
          </div>
        );
      })}
    </div>
  );
}
