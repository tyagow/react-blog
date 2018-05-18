import React, { Component } from "react";
import PropTypes from "prop-types";

export class ToggleComponent extends Component {
  state = { displayChildren: false };
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick(value) {
    this.setState({ displayChildren: value });
  }
  render() {
    return (
      <div className="col-12">
        <div className="btn-group">
          {this.state.displayChildren ? (
            <button
              data-test={"togglecomponent_" + this.props.labelOn}
              type="button"
              className="btn btn-outline-info btn-sm"
              onClick={e => this.onClick(!this.state.displayChildren)}
            >
              {this.props.labelOff}
            </button>
          ) : (
            <button
              data-test={"togglecomponent_" + this.props.labelOff}
              type="button"
              className="btn btn-outline-info btn-sm"
              onClick={e => this.onClick(!this.state.displayChildren)}
            >
              {this.props.labelOn}
            </button>
          )}
        </div>
        <div className="m-4">
          {this.state.displayChildren && this.props.children}
        </div>
      </div>
    );
  }
}

ToggleComponent.propTypes = {
  labelOn: PropTypes.string.isRequired,
  labelOff: PropTypes.string.isRequired
};

export default ToggleComponent;
