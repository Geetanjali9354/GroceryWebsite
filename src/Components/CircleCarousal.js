import Slider from "react-slick";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CircleCarousal.css';
import EverydayFreshMeat from '../Images/EverydayFreshMeat.jpeg';
import EverdayFreshMilk from '../Images/EverydayFreshMilk.jpeg';
import EverydayFreshFruits from '../Images/EverydayFreshFruits.jpeg';
import DailyFreshVegetables from '../Images/DailyFreshVegetables.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CustomText from "./CustomText";
import { CategoryCollection } from "./CategoryCollection";
import { useNavigate } from 'react-router-dom';

function CircleCarousal() {
    const navigate = useNavigate();
    const handleCategoryClick = (id) => {
        navigate(`/category/${id}`);
    };

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);
    const settings = {
        // dots: true,
        arrows: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 7,
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
    const fourBoxItems = [
        {
            title: 'Everyday Fresh\nMeat',
            image: EverydayFreshMeat,
        },
        {
            title: 'Daily Fresh\nVegetables',
            image: DailyFreshVegetables,
        },
        {
            title: 'Everyday Fresh\nMilk',
            image: EverdayFreshMilk,
        },
        {
            title: 'Everyday Fresh\nFruits',
            image: EverydayFreshFruits,
        },
    ];

    return (
        <div>
            <div className="circle-carousel-container">
                <Slider {...settings}>
                    {CategoryCollection.map((item, index) => (
                        <div key={item.id} className="circle-carousel-item"
                            onClick={() => handleCategoryClick(item.id)}
                        >
                            <div
                                className="circle-carousel-image"
                                style={{ backgroundColor: item.bgColor }}
                            >
                                <img src={item.image} alt={item.label} />
                            </div>
                            <div>
                                <CustomText Text={item.label} className='circle-carousel-label mt-3' fontWeight='bold' />
                                <CustomText Text={item.subtitle} className='circle-carousel-subtitle mt-2' fontWeight='normal' />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>


            {/* --------------------------- FOUR BOX GRID BANNER---------------------------- */}

            <div className="four-box-grid">
                {fourBoxItems.map((item, index) => (
                    <div
                        key={index}
                        className="box"
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                        data-aos-anchor-placement="top-bottom"
                        style={{ backgroundImage: `url(${item.image})` }}
                    >
                        <h3 style={{
                            fontSize: '22px',
                            margin: 0,
                            lineHeight: '1.1',
                            color: 'black',
                            fontFamily: 'inherit',
                            whiteSpace: 'pre-line'
                        }}>
                            {item.title}
                        </h3>

                        <div className="d-flex align-items-end gap-1">
                            <span style={{ color: 'grey' }}>Starting at </span>
                            <h6 className="text-danger mb-0" style={{ fontSize: '18px' }}>$60.99</h6>
                        </div>
                        <div className="mt-3">
                            <button className="btn btn-main rounded-pill">
                                Shop Now <span style={{ fontWeight: 'bold', fontSize: '18px' }}>→</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default CircleCarousal;