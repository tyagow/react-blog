import React, { Component } from "react";
import Link from "react-router-dom/Link";
import connect from "react-redux/lib/connect/connect";
import { getCategories } from "../../actions/postActions";
import { reselectCategories } from "../../reducers/CategoryReducer";

export class Header extends Component {
  componentDidMount = () => {
    this.props.getCategories();
  };

  render() {
    const categories = this.props.categories;
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-info navbar-dark">
          <ul className="navbar-nav">
            <li className="navbar-brand">
              <span className="">
                <strong>... Udacity Readble</strong>
              </span>
            </li>
            <li className="nav-item ">
              <Link to="/">
                <span className="nav-link active">Home</span>
              </Link>
            </li>
            {categories &&
              categories.map(category => (
                <li className="nav-item" key={category}>
                  <Link to={`/${category}`}>
                    <span className="nav-link active">
                      <span className="">{category}</span>
                    </span>
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: reselectCategories(state)
});

export default connect(mapStateToProps, { getCategories })(Header);
