import React from "react";
import Link from "react-router-dom/Link";

export default () => {
  return (
    <div>
      <div className="container">
        <div className="row m-4">
          <div className="col-6 offset-md-3 error-template text-center">
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
        </div>
      </div>
    </div>
  );
};
