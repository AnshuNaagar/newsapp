import React from "react";
import PropTypes from "prop-types";
import './style/All.css'
const NotFound = (props) => {
  return (
    <>
      <div className="container" id="text-container">
        <h1>{props.heading}</h1>
        <p>{props.description}</p>
      </div>
    </>
  );
};

NotFound.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
};

export default NotFound;
