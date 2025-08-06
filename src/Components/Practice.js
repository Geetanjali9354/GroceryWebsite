import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AnimalFood from '../Images/AnimalFood.png';
import DariyAndEggs from '../Images/DariyAndEggs.png';
import Desserts from '../Images/Desserts.png';
import DrinkAndJuice from '../Images/DrinkAndJuice.png';
import FishAndMeat from '../Images/fishAndMeat.png';
import FreshFruit from '../Images/FreshFruits.png';
import FrozenFood from '../Images/FrozenFood.png';
import YummyCandy from '../Images/YummyCandy.png'
import Vegetables from '../Images/Vegetables1.png';
import Snacks from '../Images/Snacks.png'

// Add placeholder or repeat if you need 10 images
// import Img7 from '../Images/img7.png';
// import Img8 from '../Images/img8.png';
// import Img9 from '../Images/img9.png';
// import Img10 from '../Images/img10.png';

function CircleCarousal() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 1 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 1 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2, slidesToScroll: 1 }
      }
    ]
  };

  const items = [
    { image: AnimalFood, label: "Animal Food", bgColor: "#FFCDD2" },
    { image: DariyAndEggs, label: "Dairy & Eggs", bgColor: "#F8BBD0" },
    { image: Desserts, label: "Desserts", bgColor: "#E1BEE7" },
    { image: DrinkAndJuice, label: "Drinks", bgColor: "#D1C4E9" },
    { image: FishAndMeat, label: "Fish & Meat", bgColor: "#BBDEFB" },
    { image: FreshFruit, label: "Fruits", bgColor: "#C8E6C9" },
    { image: FrozenFood, label: "Frozen Food", bgColor: "#FFECB3" },
    { image: YummyCandy, label: "Yummy Candy", bgColor: "#FFE0B2" },
    { image: Vegetables, label: "Vegetables", bgColor: "#C5E1A5" },
    { image: Snacks, label: "Snacks", bgColor: "#FFAB91" }

  ];

  return (
    <div
      className="circle-carousel"
      style={{
        height: 'auto',
        width: '100%',
        backgroundColor: 'lightpink',
        borderRadius: '30px',
        padding: '20px'
      }}
    >
      {/* <h2 style={{ textAlign: 'center' }}>Circle Carousel Component</h2> */}
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index}>
            <div
              style={{
                height: '180px',
                width: '180px',
                // margin: 'auto',
                borderRadius: '50%',
                overflow: 'hidden',
                backgroundColor: item.bgColor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
              }}
            >
              <img
                src={item.image}
                alt={item.label}
                style={{ height: '70%', width: '100%', objectFit: 'contain' }}
              />
            </div>
            <p style={{ textAlign: 'center', marginTop: '10px' }}>{item.label}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CircleCarousal;
