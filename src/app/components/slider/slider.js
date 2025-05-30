"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import styles from "./SimpleSlider.module.css"; // Import CSS module

// Component Nút Mũi Tên
function PrevArrow(props) {
  const { onClick } = props;
  return <div className={`${styles.arrow} ${styles.prev}`} onClick={onClick}>❮</div>;
}

function NextArrow(props) {
  const { onClick } = props;
  return <div className={`${styles.arrow} ${styles.next}`} onClick={onClick}>❯</div>;
}

export default function SimpleSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
    nextArrow: <NextArrow />,
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        <div>
          <Image src="/gundam2.png" alt="Slide 1" width={800} height={500} layout="responsive" />
        </div>
        <div>
          <Image src="/gundam2.png" alt="Slide 2" width={800} height={500} layout="responsive" />
        </div>
        <div>
          <Image src="/gundam2.png" alt="Slide 3" width={800} height={500} layout="responsive" />
        </div>
      </Slider>
    </div>
  );
}
