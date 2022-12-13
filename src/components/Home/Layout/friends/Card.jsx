// card code goes here!
import React from "react";

export default function Card(props) {
  return (
    <div
      style={{
        backgroundImage: `url(${props.imgPath})`,
        opacity: 0.8,
      }}
      className="card"
    >
      <div className="card-content">
        <button className="card-button">{props?.nama}</button>
      </div>
    </div>
  );
}
