import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Swiper() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade:true
  };
  const data = [
    {
      imgsrc: "../src/assets/Slider1.jpg",
    },
    {
      imgsrc: "../src/assets/slider2.jpg",
    },
    {
      imgsrc: "../src/assets/slider3.jpg",
    },
    {
        imgsrc: "../src/assets/img4.jpg",
      },

  ];
  return (
    <div className="max-w-[1400px] h-[500px] w-full m-auto px-8 bg-blue-100 py-16">
        <Slider {...settings}>
          {data.map((d) => (
            <img src={d.imgsrc} alt="" className='w-full h-96 rounded-xl object-center' />
          ))}
        </Slider>
    </div>
  );
}

export default Swiper;
