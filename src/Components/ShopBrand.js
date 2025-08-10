import { React, useEffect } from "react";
import './ShopBrand.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from "react-slick";
import CustomText from "./CustomText";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoryCollection from "./CategoryCollection";
import ShopCarousal1 from '../Images/ShopCarousal1.png'
import ShopCarousal2 from '../Images/ShopCarousal2.png'
import ShopCarousal3 from '../Images/ShopCarousal3.png'
import ShopCarousal4 from '../Images/ShopCarousal4.png'
import ShopCarousal5 from '../Images/ShopCarousal5.png'

function ShopBrand() {
    const ShopBrandName = [
        {
            image: ShopCarousal1
        },
        {
            image: ShopCarousal2
        },
        {
            image: ShopCarousal3
        },
        {
            image: ShopCarousal4
        },
        {
            image: ShopCarousal5
        },
        {
            image: ShopCarousal3
        },
        {
            image: ShopCarousal4
        },
        {
            image: ShopCarousal2

        }
    ]


    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 8, slidesToScroll: 1 }
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
    return (
        <div className="circle-carousel-container-shop">
            <div className="Shop-brand-header">
                <h3>Shop By Brands</h3>
                <a href="#">View All Deals</a>
            </div>
            <Slider {...settings}>
                {ShopBrandName.map((item, index) => (
                    <div key={index} className="circle-carousel-item-shop  p-3 flash-sales-slide"
                        data-aos="fade-up"
                        data-aos-delay={index * 100}>
                        <div className="circle-carousel-image-shop">
                            <img src={item.image} alt={`Shop Brand ${index + 1}`} />
                        </div>
                    </div>
                ))
                }
            </Slider >
        </div >
    )
};
export default ShopBrand;