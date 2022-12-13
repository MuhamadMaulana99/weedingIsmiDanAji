import "./style.css";
import { useState } from "react";
import Slider from "react-slick";
import dina from "./temanCwe/dina.jpeg";
import intan from "./temanCwe/intan.jpeg";
import meli from "./temanCwe/meli.jpeg";
import puput from "./temanCwe/puput.jpeg";
import selvy from "./temanCwe/selvy.jpeg";
import vina from "./temanCwe/vina.jpeg";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Card from "./Card";

const images = [dina, intan, meli, puput, selvy, vina];
const img = [
  {
    id: 1,
    nama: "Dina",
    foto: dina,
  },
  {
    id: 1,
    nama: "Intan",
    foto: intan,
  },
  {
    id: 1,
    nama: "Meli",
    foto: meli,
  },
  {
    id: 1,
    nama: "Puput",
    foto: puput,
  },
  {
    id: 1,
    nama: "Selvy",
    foto: selvy,
  },
  {
    id: 1,
    nama: "Vina",
    foto: vina,
  },
]

function Friends2() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 2,
    centerMode: false,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="Apps">
      <Slider {...settings}>
        {img.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <ul className="cards">
              <li className="cards__item">
                <Card
                  imgPath={img?.foto}
                  nama={img?.nama}
                  title="Relax"
                />
              </li>
            </ul>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Friends2;
