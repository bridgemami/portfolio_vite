import { nanoid } from "nanoid";
import { useState } from "react";
import ProgressBar from "react-bootstrap/esm/ProgressBar";
// import s from '../progressbarwidth.module.css'


export default function ProgressBarFrameworks() {
  const [frameworks, setFrameworks] = useState([
    {
      language: "BootStrap 5",
      percent: "90",
    },
    {
      language: "React",
      percent: "66.7",
    },
    {
      language: "Next.js",
      percent: "33.33",
    },
  ]);
  return (
    <div 
    // className="tab-pane fade show active"
    id="frameworks-tab"
    role="tabpanel"
    aria-labelledby="frameworks-tab"
    tabIndex="1">
      {frameworks.map((framework) => {
        return (
          <div
            key={nanoid()}
          >
            <h4>{framework.language}</h4>

            <ProgressBar animated now={framework.percent} />
          </div>
        );
      })}
    </div>
  );
}
