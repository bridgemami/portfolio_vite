import { PropTypes } from "prop-types";
import s from "../skills.module.css"
import 'animate.css';
import { useState, useEffect } from "react";

export default function Title({title}) {
 
  return (
    <div className={`row animate__animated animate__backInLeft ${s.title}`} id="skills_title">
      <h2 className="py-4 text-center" id="skills">
        {title}
      </h2>
    </div>
  );
}

Title.propTypes = {
  title: PropTypes.string,
};