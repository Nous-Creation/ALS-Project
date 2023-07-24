import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "/images/slider1.jpg",
  "/images/slider2.jpg",
  "/images/slider3.jpg",
  "/images/slider4.jpg",
  "/images/slider5.jpg",
];

const carouselItems = [
  { image: "/images/slider1.jpg", alt: "" },
  { image: "/images/slider2.jpg", alt: "" },
  { image: "/images/slider3.jpg", alt: "" },
  { image: "/images/slider4.jpg", alt: "" },
  { image: "/images/slider5.jpg", alt: "" },
];

export const ImageSlider = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  const sliderSettings: any = {
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    arrows: false,
    cssEase: "linear",
    slidesToShow: windowWidth >= 780 ? 3 : 1,
    speed: 500,
    centerMode: true,
  };

  return (
    <div>
      <Slider {...sliderSettings}>
        {carouselItems.map((carouselItem, index) => (
          <div key={index}>
            <Image src={carouselItem.image} alt={carouselItem.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const Image = styled.img`
  width: 100%;
  height: 300px;
  aspect-ratio: 4/3;
  object-fit: cover;
  padding: 0 8px;

  &:active {
    border: none;
  }

  @media (max-width: 980px) {
    height: 250px;
  }

  @media (max-width: 780px) {
    height: 300px;
  }
`;
