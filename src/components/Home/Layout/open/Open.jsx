import React from "react";
import "./Open.css";
// import ismi from '../dataGambar/7.jpeg';
import ismiAji from './6.JPG'
import { Link } from "react-router-dom";


export const Open = () => {
  return (
    <div>
      <div class="container">
        <div class="cards-container">
        <h4>Ketuk Gambar Membuka</h4>
          <div class="cards-Open">
            <div class="elms-animation">
              <span class="one"></span>
              <span class="two"></span>
              <span class="three"></span>
              <span class="four"></span>
            </div>
            <img src={ismiAji} alt="" />
            <div class="content">
                <Link to="/home">
                  <button value="sound">Buka Undangan</button>
                </Link>
            </div>
          </div>
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
              opacity: 1,
              fontSize: "1rem",
              x: 0,
              y: 15,
            }}
          >
            <Timer />
          </motion.div> */}
        </div>
      </div>
    </div>
  );
};
