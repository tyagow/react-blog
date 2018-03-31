import React from "react";
import { Link } from "react-router-dom";

import styleMap from "../styles";

export default props => {
  return (
    <div key={props.post.id}>
      {/* <Link to={`/${this.props.data.category}/${this.props.data.id}`}>
              view details
            </Link> */}
      <Link to={`/${props.post.category}/${props.post.id}`}>
        <h3>{props.post.title}</h3>
      </Link>
      <button style={styleMap.categoryLabel.style} disabled>
        {props.post.category}
      </button>
      <div>Author - {props.post.author}</div>
    </div>
  );
};
