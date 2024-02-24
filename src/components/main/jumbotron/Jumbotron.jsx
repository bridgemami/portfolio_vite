import bigHeadShot from "/images/logos_and_photos/DSC06519-cropped_400px.webp";
import smallHeadShot from "/images/logos_and_photos/DSC06519-cropped_300px.webp";
import { PropTypes } from "prop-types";

// import s from './jumbotron.module.css'
export default function Jumbotron({ name, title }) {
  return (
    <section
      className={`d-flex flex-wrap justify-content-center justify-content-sm-around mb-5`}
    >
      <picture className=" rounded-circle rounded-5 my-3">
        <source
          media="(min-width:720px)"
          srcSet={bigHeadShot}
          className="rounded-circle rounded-5"
        />
        {/* <source media="(min-width:360px)" srcset="./images/DSC06519-cropped_360px.jpg"> */}
        <img
          src={smallHeadShot}
          alt="Headshot of Michael Bridgeman"
          className="rounded-circle rounded-5 mx-auto d-block"
        />
      </picture>
      <h1 className="text-center align-self-center align-items-center">
        {name}
        <br />
        {title}
      </h1>
      {/* <div className="offset-md-2"></div> */}
    </section>
  );
}
Jumbotron.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
};
