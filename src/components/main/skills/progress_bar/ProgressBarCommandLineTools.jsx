import { useState } from "react";
import ProgressBar from "react-bootstrap/esm/ProgressBar";
// import s from '../progressbarwidth.module.css'


export default function ProgressBarCommandLineTools() {
  const [commands, setCommands] = useState([
    {
      language: "Git/Github",
      percent: "66.67",
    },
    {
      language: "NPM",
      percent: "50",
    },
  ]);
  return (
    <div 
    // className="tab-pane fade show active"
    id="Commands-tab"
    role="tabpanel"
    aria-labelledby="commands-tab"
    tabIndex="3">
      {commands.map((command, i) => {
        return (
          <div
            key={i}
          >
            <h4>{command.language}</h4>

            <ProgressBar animated now={command.percent} />
          </div>
        );
      })}
    </div>
  );
}
