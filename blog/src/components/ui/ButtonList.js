import React from "react";
import PropTypes from "prop-types";

export const ButtonList = props => {
  return (
    <div className="">
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-primary"
          key="posts-cetegories-btn-filter-all"
        >
          all
        </button>
        {props.labels &&
          props.labels.map(label => (
            <button
              type="button"
              className="btn btn-primary"
              key={"posts-cetegories-btn-filter" + label}
            >
              {label}
            </button>
          ))}
      </div>
    </div>
  );
};
ButtonList.propTypes = {
  labels: PropTypes.array.isRequired
};

export default ButtonList;
