import Slider from "react-slick";
import { useEffect } from "react";
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
import './CircleCarousal.css';
import EverydayFreshMeat from '../Images/EverydayFreshMeat.jpeg';
import EverdayFreshMilk from '../Images/EverydayFreshMilk.jpeg';
import EverydayFreshFruits from '../Images/EverydayFreshFruits.jpeg';
import DailyFreshVegetables from '../Images/DailyFreshVegetables.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function CircleCarousal() {
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
        { image: AnimalFood, label: "Animal Food", bgColor: "#FFCDD2", subtitle: "125+ Products" },
        { image: DariyAndEggs, label: "Dairy & Eggs", bgColor: "#F8BBD0", subtitle: "125+ Products" },
        { image: Desserts, label: "Desserts", bgColor: "#E1BEE7", subtitle: "125+ Products" },
        { image: DrinkAndJuice, label: "Drinks", bgColor: "#D1C4E9", subtitle: "125+ Products" },
        { image: FishAndMeat, label: "Fish & Meat", bgColor: "#BBDEFB", subtitle: "125+ Products" },
        { image: FreshFruit, label: "Fruits", bgColor: "#C8E6C9", subtitle: "125+ Products" },
        { image: FrozenFood, label: "Frozen Food", bgColor: "#FFECB3", subtitle: "125+ Products" },
        { image: YummyCandy, label: "Yummy Candy", bgColor: "#FFE0B2", subtitle: "125+ Products" },
        { image: Vegetables, label: "Vegetables", bgColor: "#C5E1A5", subtitle: "125+ Products" },
        { image: Snacks, label: "Snacks", bgColor: "#FFAB91", subtitle: "125+ Products" }
    ];
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
                    {items.map((item, index) => (
                        <div key={index} className="circle-carousel-item">
                            <div
                                className="circle-carousel-image"
                                style={{ backgroundColor: item.bgColor }}
                            >
                                <img src={item.image} alt={item.label} />
                            </div>
                            <div>
                                <h6 className="circle-carousel-label">{item.label}</h6>
                                <span className="circle-carousel-subtitle">{item.subtitle}</span>
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
