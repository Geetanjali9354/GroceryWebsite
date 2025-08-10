import { React, useEffect, useState } from "react";
import './RecommendedSection.css';
import Banner3 from '../Images/Banner3.jpeg';
import Banner4 from '../Images/Banner4.jpeg';
import CustomText from "./CustomText";
import Banner34Logo from '../Images/Banner3&4Logo.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './FlashSales.css';
import OrangeJuice from '../Images/OrangeJuice.png';
import DogFood from '../Images/DogFood.png';
import Milk from '../Images/Milk.png';
import ChocoLava from '../Images/Chocolava.png';
import GreenPeas from '../Images/GreenPeas.jpeg'
import { CartOutline } from '../Images/SvgImages';
import EverydayFreshMeat from '../Images/EverydayFreshMeat.jpeg';
import EverdayFreshMilk from '../Images/EverydayFreshMilk.jpeg';
import EverydayFreshFruits from '../Images/EverydayFreshFruits.jpeg';
import DailyFreshVegetables from '../Images/DailyFreshVegetables.jpeg';
import CategoryCollection from './CategoryCollection';
function RecommendedSection() {
    const [activeCategory, setActiveCategory] = useState("All");
    const categories = ["All", "Grocery", "Fruits", "Juices", "Vegetables", "Snacks", "Organic Foods"];
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
        {
            title: 'Everyday Fresh\nFruits',
            image: EverydayFreshFruits,
        },
        {
            title: 'Everyday Fresh\nFruits',
            image: EverydayFreshFruits,
        },
        {
            title: 'Everyday Fresh\nFruits',
            image: EverydayFreshFruits,
        },
        {
            title: 'Everyday Fresh\nFruits',
            image: EverydayFreshFruits,
        },
    ];
    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 600,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 2 } },
        ]
    };
    useEffect(() => {
        AOS.init({
            duration: 700, // Animation duration in ms
            once: true,    // Only once animation
        });
    }, []);
    const carouselImages = [
        // CarouselImage1,
        OrangeJuice,
        DogFood,
        Milk,
        ChocoLava,
        GreenPeas,
    ];
    useEffect(() => {
        AOS.init({
            duration: 700,
            once: true,
        });
    }, []);
    const flashSaleProducts = CategoryCollection.flatMap(category =>
        category.products?.filter(product => {
            const images = product.image || product.images || []; // in some you used 'image', others 'images'
            return images.some(img => carouselImages.includes(img));
        }) || []
    );
    return (
        <div>
            <div className="Recommended-header ">
                    <h3>Recommended For You</h3>
                </div>
            <div className="four-box-grid-recommended">
                
                {fourBoxItems.map((item, index) => (
                    <div
                        key={index}
                        className="box"
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-anchor-placement="top-bottom"
                        style={{ backgroundColor: 'pink' }}
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
                        <button className="Add-To-Cart-Button">
                            Add To Cart
                            <CartOutline height="20" width="20" style={{ marginLeft: '10px' }} />
                        </button>
                    </div>
                ))}
            </div>

            {/* -----------------------------------Two Banner---------------------------- */}


            <div className="p-3 my-4">
                <div className="row">
                    <div className="col-md-6"
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-anchor-placement="top-bottom"
                    >
                        <div
                            className="rectangle-box_banner3 "
                            style={{
                                backgroundImage: `url(${Banner3})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                display: 'flex',
                                justifyContent: 'end',
                            }}
                        >
                            <div className="banner-content">
                                <div className="logo-circle">
                                    <img src={Banner34Logo} alt="Logo" />
                                </div>
                                <CustomText Text="$5 off your first order" fontWeight='bold' className='banner-contentText' />
                                <CustomText Text="Delivery by 6:15 am" className='subtext' fontWeight='normal' />
                                <button className="shop-now-btn-banner1 mt-2">Shop Now →</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6"
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-anchor-placement="top-bottom"
                    >
                        <div
                            className="rectangle-box_banner3 "
                            style={{
                                backgroundImage: `url(${Banner4})`,
                            }}
                        >
                            <div className="banner-content ">
                                <div className="logo-circle">
                                    <img src={Banner34Logo} alt="Logo" />
                                </div>

                                <CustomText Text="$5 off your first order" fontWeight='bold' className='banner-contentText' />
                                <CustomText Text="Delivery by 6:15 am" className='subtext' fontWeight='normal' />
                                <button className="shop-now-btn-banner2 mt-2">Shop Now →</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
};
export default RecommendedSection;