import { React, useState, useEffect, useRef } from "react";
import './TopBar.css';
import Logo from '../Images/MarketPro Logo.png';
import Search from '../Images/search.png';
import User from '../Images/user.png';
import Wishlist from '../Images/wishlist.png';
import Cart from '../Images/trolley.png';
import SearchBlack from '../Images/searchBlack.png';
import { BaselineKeyboardArrowDown, HamburgerMd } from "../Images/SvgImages";
import Vegetable from '../Images/Vegetables.png';
import MilkAndCake from '../Images/Milk and Cake.png';
import Grocery from '../Images/Grocery.png';
import Beauty from '../Images/beauty.png';
import winesAndDrinks from '../Images/wines and drinks.png';
import Snacks from '../Images/Snacks.png';
import Juice from '../Images/juice.png';
import Fruit from '../Images/fruits.png';
import TeaAndCoffee from '../Images/Tea and Coffee.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CustomText from "./CustomText";

function TopBar() {
    const [timeLeft, setTimeLeft] = useState({
        days: 832,
        hours: 8,
        minutes: 29,
        seconds: 34,
    });
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showCategories, setShowCategories] = useState(false);
    useEffect(() => {
        AOS.init({
            duration: 500,
            once: true,
        });
    }, []);
    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };

    const toggleCategories = () => {
        setShowCategories(!showCategories);
    };
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                let { days, hours, minutes, seconds } = prev;
                seconds--;
                if (seconds < 0) {
                    seconds = 59;
                    minutes--;
                }
                if (minutes < 0) {
                    minutes = 59;
                    hours--;
                }
                if (hours < 0) {
                    hours = 23;
                    days--;
                }
                return { days, hours, minutes, seconds };
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const categories = [
        { img: Vegetable, name: "Vegetables" },
        { img: MilkAndCake, name: "Milk & Cake" },
        { img: Grocery, name: "Grocery" },
        { img: Beauty, name: "Beauty" },
        { img: winesAndDrinks, name: "Wines & Drinks" },
        { img: Snacks, name: "Snacks" },
        { img: Juice, name: "Juice" },
        { img: Fruit, name: "Fruits" },
        { img: TeaAndCoffee, name: "Tea & Coffee" },
    ];

    return (
        <div>
            {/* Top Bar */}
            <div className="header-top">
                <div className="header-top-wrapper d-flex flex-wrap align-items-center justify-content-between">
                    <div className="header-countdown d-flex align-items-center flex-wrap mb-2 mb-md-0">
                        {/* <span className="sale-text text-white d-none d-md-flex me-2">Until the end of the sale:</span> */}
                        <CustomText Text="Until the end of the sale:" className="sale-text text-white d-none d-md-flex me-2" />
                        {/* <span className="text-white d-xl-flex d-xl-none me-2">Sale end:</span> */}
                        <CustomText Text="Sale end:" className="text-white d-xl-flex d-xl-none me-2" />
                        <div className="countdown d-flex">
                            <div className="countdown-item">
                                <strong>{timeLeft.days}</strong><span> Days</span>
                            </div>
                            <div className="countdown-item">
                                <strong>{timeLeft.hours}</strong><span> Hours</span>
                            </div>
                            <div className="countdown-item">
                                <strong>{timeLeft.minutes}</strong><span> Minutes</span>
                            </div>
                            <div className="countdown-item">
                                <strong>{timeLeft.seconds}</strong><span> Sec.</span>
                            </div>
                        </div>
                    </div>
                    <div className="header-offers d-none d-md-flex justify-content-center mb-2 mb-md-0">
                        <p className="header-offers mb-0 text-white" style={{ fontFamily: 'Quicksand' }}>
                            Buy one get one free <span style={{ color: '#ffcc53', fontFamily: 'Quicksand' }}> first Order</span>
                        </p>
                    </div>
                    <div className="me-5">
                        <ul className="header-links mb-0">
                            <li className="d-none d-md-flex"><a href="#" className='text-white' style={{ fontFamily: 'Quicksand' }}>Order Tracking</a></li>
                            <li className="d-none d-md-flex"><a href="#" className='d-none d-md-flex text-white' style={{ fontFamily: 'Quicksand' }}>About Us</a></li>
                            <li className="dropdown">
                                <a href="#" style={{ fontFamily: 'Quicksand' }}>Eng</a>
                                <ul className="dropdown-menu" style={{ fontFamily: 'Quicksand' }}>
                                    <li>English</li>
                                    <li>Japanese</li>
                                    <li>French</li>
                                    <li>Germany</li>
                                    <li>Bangladesh</li>
                                    <li>South Korea</li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="#" style={{ fontFamily: 'Quicksand' }}>USD</a>
                                <ul className="dropdown-menu" style={{ fontFamily: 'Quicksand' }}>
                                    <li>USD</li>
                                    <li>Yen</li>
                                    <li>Franc</li>
                                    <li>EURO</li>
                                    <li>BDT</li>
                                    <li>WON</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* NAVBAR */}
            <header style={{ height: '100px', display: 'flex', alignItems: 'center', borderBottom: '1px solid grey' }}>
                <div className='container-fluid'>
                    <div className='row align-items-center'>
                        <div className='col-6 col-md-2 text-start'>
                            <img className='img-fluid' src={Logo} alt="MarketPro Logo" style={{ height: '50px' }} />
                        </div>
                        <div className="col-lg-7 d-none d-lg-block">
                            <div className="input-group">
                                <select className="form-select" style={{ maxWidth: '21%' }}>
                                    <option>All categories</option>
                                    <option>Electronics</option>
                                    <option>Fashion</option>
                                    <option>Home & Garden</option>
                                    <option>Beauty</option>
                                    <option>Sports</option>
                                </select>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search for products, categories or brands..."
                                    aria-label="Search"
                                    style={{ height: '50px' }}
                                />
                                <button type="button" style={{ backgroundColor: '#1C799B', border: 'none' }} className="btn btn-outline-secondary">
                                    <img src={Search} style={{ height: '20px', width: '20px' }} />
                                </button>
                            </div>
                        </div>
                        <div className="col-6 col-md-10 col-lg-3 d-flex justify-content-end align-items-center gap-3 pe-3">
                            <div className="d-lg-none cursor-pointer">
                                <img src={SearchBlack} style={{ height: '20px', width: '20px' }} />
                            </div>
                            <div className="d-flex align-items-center gap-1 cursor-pointer">
                                <img src={User} style={{ height: '20px', width: '20px' }} />
                                <span className="d-none d-sm-inline">Profile</span>
                            </div>
                            <div className="d-flex align-items-center gap-1 cursor-pointer position-relative">
                                <img src={Wishlist} style={{ height: '20px', width: '20px' }} />
                                <span className="d-none d-sm-inline">Wishlist</span>
                            </div>
                            <div className="d-flex align-items-center gap-1 cursor-pointer position-relative">
                                <img src={Cart} style={{ height: '20px', width: '20px' }} />
                                <span className="d-none d-sm-inline">Cart</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* BROWSE CATEGORIES & NAVIGATION */}
            <div className="border-top border-bottom py-3 position-relative">
                <div className="container-fluid">
                    <div className="row align-items-center justify-content-between">
                        <div
                            className="col-auto"
                            onMouseEnter={() => setShowCategories(true)}
                            onMouseLeave={() => setShowCategories(false)}
                        >
                            <button
                                className="d-flex align-items-center px-4 py-2 rounded"
                                style={{ backgroundColor: '#2ABC79', border: 'none', color: 'white' }}
                            >
                                Browse Categories
                                <BaselineKeyboardArrowDown
                                    height="20"
                                    width="20"
                                    className={`ms-2 mt-1 transition-icon ${showCategories ? 'rotate-up' : ''}`}
                                />
                            </button>

                            {showCategories && (
                                <div
                                    className="shadow p-3 bg-white rounded mt-2 position-absolute category-dropdown"
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="top-bottom"
                                >
                                    <div className="row">
                                        {categories.map((item, index) => (
                                            <div key={index} className="col-6 col-md-4 text-center">
                                                <div className="category-card">
                                                    <img src={item.img} alt={item.name} className="img-fluid mb-2" style={{ height: '40px' }} />
                                                    <h6>{item.name}</h6>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>


                        <div className="col-auto d-md-none">
                            <button className="btn" onClick={toggleMobileMenu}>
                                <HamburgerMd height="40" width="40" />
                            </button>
                        </div>

                        <div className={`NavigationMenu col d-md-flex gap-2 ${showMobileMenu ? 'd-block' : 'd-none'}`}>
                            <div className="nav-link dropdown">
                                <a href="#" className="text-dark dropdown-toggle">Home</a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Home Page</a></li>
                                    <li><a href="#">Grocery</a></li>
                                </ul>
                            </div>
                            <div className="nav-link dropdown">
                                <a href="#" className="text-dark dropdown-toggle">Shop</a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Shop 1</a></li>
                                    <li><a href="#">Shop 2</a></li>
                                </ul>
                            </div>
                            <div className="nav-link dropdown">
                                <a href="#" className="text-dark dropdown-toggle">Pages</a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </div>
                            <div className="nav-link dropdown">
                                <a href="#" className="text-dark dropdown-toggle">Vendors</a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Vendor 1</a></li>
                                    <li><a href="#">Vendor 2</a></li>
                                </ul>
                            </div>
                            <div className="nav-link">
                                <a href="#" className="text-dark">Contact Us</a>
                            </div>
                        </div>
                        <div className="col-auto  d-none d-lg-flex align-items-center gap-2">
                            <div className="d-flex flex-column">
                                <span className="text-dark small">Need any Help! call Us</span>
                                <span className="fw-bold " style={{ color: '#1C799B' }}>+(2) 871 382 023</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBar;
