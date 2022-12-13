/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
// import "./style.scss";
import "./styles.css";

export const Maps = () => {
  return (
    <div className="cont">
      <div class="cardss">
        <div class="envelope"></div>
        <h1>
         Temukan <em>Kami</em> in Our <em>Weeding</em>
        </h1>
        <div>
          <iframe
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.7816970429235!2d106.63591571476951!3d-6.292396395445848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa8936fb11fbf21a9!2zNsKwMTcnMzIuNiJTIDEwNsKwMzgnMTcuMiJF!5e0!3m2!1sid!2sid!4v1670917030081!5m2!1sid!2sid"
            width="180"
            height="180"
            // style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div class="heart"></div>
      </div>
    </div>
  );
};