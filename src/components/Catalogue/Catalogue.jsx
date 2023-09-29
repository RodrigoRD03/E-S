import React from "react";
import "./Catalogue.css";
import image from "../../constants/image";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Catalogue = () => {
  const settings = {
    slickSetOption: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  return (
    <div className="app__Catalogue section-background">
      <div className="app__Catalogue-Top">
        <div className="app__Catalogue-Title">
          <h1>Our Best</h1>
          <h1>Products</h1>
        </div>
        <div className="app__Catalogue-Logos">
          <img className="imgs-logos" src={image.Convers} alt="" />
          <img className="imgs-logos" src={image.Vans} alt="" />
          <img className="imgs-logos" src={image.Puma} alt="" />
          <img className="imgs-logos" src={image.Adidas} alt="" />
          <img className="imgs-logos" src={image.Nike} alt="" />
        </div>
      </div>
      <div className="app__Catalogue-Carrousel">
        <Slider {...settings}>
          <div className="carrousel__container">
            <img className="imgs-Tenis" src={image.T1} alt="Item 1" />
            <p className="Tenis__name">Item 1</p>
          </div>
          <div className="carrousel__container">
            <img className="imgs-Tenis" src={image.T2} alt="Item 2" />
            <p className="Tenis__name">Vans - Old Skool</p>
          </div>
          <div className="carrousel__container">
            <img className="imgs-Tenis" src={image.T3} alt="Item 3" />
            <p className="Tenis__name">Item 3</p>
          </div>
          <div className="carrousel__container">
            <img className="imgs-Tenis" src={image.T4} alt="Item 3" />
            <p className="Tenis__name">Item 4</p>
          </div>
          <div className="carrousel__container">
            <img className="imgs-Tenis" src={image.T5} alt="Item 3" />
            <p className="Tenis__name">Item 5</p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Catalogue;
