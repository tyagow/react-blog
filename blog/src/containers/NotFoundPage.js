import React, { Component } from "react";
import Link from "react-router-dom/Link";
import { RingLoader } from "react-spinners";

export default class NotFoundPage extends Component {
  state = { loading: true };
  componentDidMount = () => {
    this._mounted = true;
    setTimeout(() => {
      if (this._mounted) {
        this.setState({ loading: false });
      }
    }, 4000);
  };
  componentWillUnmount = () => {
    this._mounted = false;
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row m-4 ">
            {this.state.loading ? (
              <div className="col-1 offset-sm-5">
                <div className="p-4">
                  <RingLoader
                    margin="50px"
                    color={"#17a2b8"}
                    size={150}
                    loading={this.state.loading}
                  />
                </div>
              </div>
            ) : (
              <div className="col-6 offset-sm-3 text-center">
                <h1>Oops!</h1>
                <h2>404 Not Found</h2>
                <div className="error-details m-4">
                  Sorry, an error has occured, Requested page not found!
                  <br />
                </div>
                <div className="error-actions m-4">
                  <Link to={`/`}>
                    <span className="btn btn-info">
                      <i className="fa fa-home" /> <strong>Back to Home</strong>
                    </span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
