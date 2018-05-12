import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getPostById } from "../../actions/postActions";

export class PostDetail extends Component {
  state = {
    editing: false
  };
  componentDidMount() {
    this.props.getPostById(this.props.postId);
  }
  onClick = () => {
    this.setState({ editing: !this.state.editing });
  };
  render() {
    return (
      <div>
        {this.props.post && (
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <h1 data-test="postdetail-title">{this.props.post.title}</h1>
                <p className="lead">
                  <i className="fa fa-user" /> by {this.props.post.author}{" "}
                  <button
                    data-test="postdetail-btn-editable"
                    className="btn btn-info"
                    onClick={() => {
                      this.onClick();
                    }}
                  >
                    Edit
                  </button>
                </p>
                <hr />
                <p>
                  <i className="fa fa-calendar" /> Posted on{" "}
                  {this.props.post.timestamp}
                </p>
                <p>
                  <i className="fa fa-tags" /> Category:{" "}
                  <Link to={`/${this.props.post.category}`}>
                    <span className="badge badge-info">
                      {this.props.post.category}
                    </span>
                  </Link>
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
  postId: PropTypes.string.isRequired,
  post: PropTypes.object
};
const mapStateToProps = state => ({
  post: state.posts.postDetail
});

export default connect(mapStateToProps, { getPostById })(PostDetail);
