import React, { Component } from "react";
import PropTypes from "prop-types";

export class ButtonList extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick(value) {
    this.props.callback(value);
  }
  render() {
    return (
      <div className="btn-group">
        {this.props.labels &&
          this.props.labels.map(label => (
            <button
              data-test={label}
              type="button"
              className={
                "btn btn-outline-info btn-sm" +
                (this.props.active === label ? " active" : "")
              }
              onClick={e => this.onClick(label)}
              key={"posts-cetegories-btn-filter" + label}
            >
              {label}
            </button>
          ))}
      </div>
    );
  }
}

ButtonList.propTypes = {
  labels: PropTypes.array.isRequired,
  callback: PropTypes.func.isRequired,
  active: PropTypes.string
};

export default ButtonList;
