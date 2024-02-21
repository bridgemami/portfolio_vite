import { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa6";
import s from "./backtotopbutton.module.css";

export default function BackToTopButton() {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 550) {
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
        <button className={s.top} onClick={scrollUp} title="Back to the top">
          <FaAngleUp />
        </button>
      )}
    </div>
  );
}
