import React from "react";
import "./Cards.css";

const card = props => {
  return (
    <div className="col-sm-3 col-md-3 col-lg-3">
      <a className="thumbnail">
        <img
          src={props.image}
          key={props.id}
          alt={props.alt}
          onClick={props.click}
          className="img-responsive"
        />
      </a>
    </div>
  );
};
export default card;
