/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Atm.css";
import sarah from './S&N-78.jpg'
import nana from './S&N-79.jpg'

export const Atm = () => {
  return (
    <div className="body">
      <div>
        <input type="radio" name="sushi-lunch" id="happy-radio" hidden />
        <input type="radio" name="sushi-lunch" id="lovers-radio" checked />

        <div class="selector">
          <label for="happy-radio" class="happy-card">
            <h1>Sarah Savitri</h1>
                <img className="atmImg" src={sarah}></img>
                <p>8831585901</p>
            <p>BCA</p>
          </label>

          <label for="lovers-radio" class="lovers-card">
            <h1>Nana Permana</h1>
            <img className="atmImg" src={nana}></img>
            <p>1550011996983</p>
            <p>Mandiri</p>
          </label>
          <label for="happy-radio" class="happy-pick">
            {'<='}
          </label>
          <label for="lovers-radio" class="lovers-pick">
          {'=>'}
          </label>
        </div>
      </div>
    </div>
  );
};
