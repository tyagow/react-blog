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
      <div className="">
        <div className="btn-group">
          <button
            data-test="all"
            onChange={e => this.onClick("all")}
            type="button"
            className="btn btn-primary"
            key="posts-cetegories-btn-filter-all"
          >
            all
          </button>
          {this.props.labels &&
            this.props.labels.map(label => (
              <button
                data-test={label}
                type="button"
                className="btn btn-primary"
                onClick={e => this.onClick(label)}
                key={"posts-cetegories-btn-filter" + label}
              >
                {label}
              </button>
            ))}
        </div>
      </div>
    );
  }
}

ButtonList.propTypes = {
  labels: PropTypes.array.isRequired
};

export default ButtonList;
