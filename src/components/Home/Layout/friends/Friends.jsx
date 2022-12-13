import "./style.css";
import { useState } from "react";
import Slider from "react-slick";
import bakul from "./temanCwo/bakul.jpeg";
import amar from "./temanCwo/amar.jpeg";
import deni from "./temanCwo/deni.jpeg";
import jarwo from "./temanCwo/jarwo.jpeg";
import madih from "./temanCwo/madih.jpeg";
import maul from "./temanCwo/maul.jpeg";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Card from "./Card";

const images = [maul,bakul, amar, deni, jarwo, madih];
const img = [
  {
    id: 1,
    nama: "Maul",
    foto: maul,
  },
  {
    id: 1,
    nama: "Indra",
    foto: bakul,
  },
  {
    id: 1,
    nama: "Amar",
    foto: amar,
  },
  {
    id: 1,
    nama: "Deni",
    foto: deni,
  },
  {
    id: 1,
    nama: "Teguh",
    foto: jarwo,
  },
  {
    id: 1,
    nama: "Yoga",
    foto: madih,
  },
]

function Friends() {
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

export default Friends;
