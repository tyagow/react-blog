import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getPostById } from "../../actions/postActions";

class PostDetail extends Component {
  componentDidMount() {
    this.props.dispatch(getPostById(this.props.postId));
  }
  render() {
    return (
      <div>
        {this.props.post && (
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <h1>
                  <Link
                    to={`/${this.props.post.category}/${this.props.post.id}`}
                  >
                    {this.props.post.title}
                  </Link>
                </h1>
                <p className="lead">
                  <i className="fa fa-user" /> by{" "}
                  <Link
                    to={`/${this.props.post.category}/${this.props.post.id}`}
                  >
                    {this.props.post.author}
                  </Link>
                </p>
                <hr />
                <p>
                  <i className="fa fa-calendar" /> Posted on August 24, 2014 at
                  9:00 PM
                </p>
                <p>
                  <i className="fa fa-tags" /> Category:{" "}
                  <a href="">
                    <span className="badge badge-info">
                      {this.props.post.category}
                    </span>
                  </a>{" "}
                </p>

                <hr />
                <p className="lead">{this.props.post.body}</p>
                <br />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

PostDetail.propTypes = {
  postId: PropTypes.string.isRequired
  // post: PropTypes.object
  // getPostById: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  post: state.posts.postDetail
});

export default connect(mapStateToProps)(PostDetail);
