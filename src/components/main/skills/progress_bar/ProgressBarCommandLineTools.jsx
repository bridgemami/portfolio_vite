import { useState } from "react";
import ProgressBar from "react-bootstrap/esm/ProgressBar";
// import s from '../progressbarwidth.module.css'


export default function ProgressBarCommandLineTools() {
  const [commands, setCommands] = useState([
    {
      language: "Git/Github",
      percent: "66.67",
      id: 0,
    },
    {
      language: "NPM",
      percent: "50",
      id: 1,
    },
  ]);
  return (
    <div 
    // className="tab-pane fade show active"
    id="Commands-tab"
    role="tabpanel"
    aria-labelledby="commands-tab"
    tabIndex="3">
      {commands.map((command) => {
        return (
          <div
            key={command.id}
          >
            <h4>{command.language}</h4>

            <ProgressBar animated now={command.percent} />
          </div>
        );
      })}
    </div>
  );
}
