import { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa6";
import s from "./backtotopbutton.module.css";
import 'animate.css'

export default function BackToTopButton() {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if ((window.scrollY > 3000 && window.innerWidth < 768) || (window.scrollY > 2000 && window.innerWidth < 992) || (window.scrollY > 1400 && window.innerWidth >= 992)) {
        // && window.innerWidth > 768 && window.scrollY < 3250
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      smooth: "smooth",
    });
  };

  return (
    <div>
      {backToTop && (
        <button className={`animate__animated animate__backInRight ${s.top}`} onClick={scrollUp} title="Back to the top">
          <FaAngleUp />
        </button>
      )}
    </div>
  );
}
