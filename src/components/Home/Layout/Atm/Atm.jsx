/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Atm.css";
import ismi from './1.JPG'
import aji from './2.JPG'

export const Atm = () => {
  return (
    <div className="body">
      <div>
        <input type="radio" name="sushi-lunch" id="happy-radio" hidden />
        <input type="radio" name="sushi-lunch" id="lovers-radio" checked />

        <div class="selector">
          <label for="happy-radio" class="happy-card">
            <h1>Ismi Ayuni</h1>
                <img className="atmImg" src={ismi}></img>
                <p>1720041941</p>
            <p>BCA</p>
          </label>

          <label for="lovers-radio" class="lovers-card">
            <h1>M Aji Firman</h1>
            <img className="atmImg" src={aji}></img>
            <p>1720041941</p>
            <p>BCA</p>
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
