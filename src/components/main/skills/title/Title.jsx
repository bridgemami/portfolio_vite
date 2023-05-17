import { PropTypes } from "prop-types";

export default function Title({title}) {
  return (
    <div className="row">
      <h2 className="py-4 text-center" id="skills">
        {title}
      </h2>
    </div>
  );
}

Title.propTypes = {
  title: PropTypes.string,
};