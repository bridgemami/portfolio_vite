import { useState } from "react";
import ProgressBar from "react-bootstrap/esm/ProgressBar";
export default function ProgressBarApplications() {
  const [applications, setApplications] = useState([
    {
      title: "WordPress",
      percent: "80",
      id: 0,
    },
  ]);
  return (
    // <div className="pb-5 tab-content" id="pills-tabContent">
    <div
      // className="tab-pane fade show active"
      id="applications-tab"
      role="tabpanel"
      aria-labelledby="applications-tab"
      tabIndex="2"
    >
      {applications.map((application) => {
        return (
          <div key={application.id}>
            <h4>{application.title}</h4>

            <ProgressBar animated now={application.percent} />
          </div>
        );
      })}
    </div>
    // </div>
  );
}
