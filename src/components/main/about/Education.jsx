import  { useState } from "react";

export default function Education() {
  const [schools, setSchools] = useState([
    {
      degree: "Associate of Science:",
      specialty: "Computer Studies: Web Full-Stack Developer",
      year: "December 2022",
      school: "Santa Rosa Junior College",
    },
    {
      degree: "Bachelor of Science:",
      specialty: "Business Administration",
      year: "December 2008",
      school: "Sonoma State University",
    },
  ]);
  return (
    <>
      <h2>Education</h2>
      <ul>
        {schools &&
          schools.map((school, i) => {
            return (
              <li key={i}>
                <p>
                  {school.degree} {school.specialty}
                  <br />
                  {school.school}
                  <br />
                  {school.year}
                </p>
              </li>
            );
          })}
      </ul>
    </>
  );
}
