import { React, useState, useEffect } from "react";
import './TopBar.css';
import Logo from '../Images/MarketPro Logo.png';
import Search from '../Images/search.png';
import User from '../Images/user.png';
import Wishlist from '../Images/wishlist.png';
import Cart from '../Images/trolley.png';
import SearchBlack from '../Images/searchBlack.png';
import { BaselineKeyboardArrowDown, HamburgerMd } from "../Images/SvgImages";
import AOS from 'aos';
import 'aos/dist/aos.css';
import CustomText from "./CustomText";
import CategoryCollection from "./CategoryCollection";
import { useNavigate } from 'react-router-dom';


function TopBar() {
    const navigate = useNavigate();
    const handleCategoryClick = (id) => {
        navigate(`/category/${id}`);
    };
    const [timeLeft, setTimeLeft] = useState({
        days: 832,
        hours: 8,
        minutes: 29,
        seconds: 34,
    });
    const [showCategories, setShowCategories] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 500, once: true });
    }, []);

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


    return (
        <div>
            {/* Top Bar */}
            <div className="header-top">
                <div className="header-top-wrapper d-flex flex-wrap align-items-center justify-content-between">
                    <div className="header-countdown d-flex align-items-center flex-wrap mb-2 mb-md-0">
                        <CustomText Text="Until the end of the sale:" className="sale-text text-white d-none d-md-flex me-2" />
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
            <header style={{ height: '100px', display: 'flex', alignItems: 'center', borderBottom: '1px solid #DBDBDB' }}>
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
                        <div className="col-6 col-md-10 col-lg-3 d-flex justify-content-end align-items-center gap-3 pe-3 ProfileDiv">
                            <div className="d-lg-none cursor-pointer">
                                <img src={SearchBlack} style={{ height: '20px', width: '20px' }} />
                            </div>
                            <div className="d-flex align-items-center gap-1 cursor-pointer ">
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
                                className="d-flex align-items-center px-5 py-3 rounded browse-button"
                                style={{ backgroundColor: '#2ABC79', border: 'none', color: 'white' }}
                            >
                                <span className="">Browse Categories</span>
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
                                        {CategoryCollection.map((item, index) => (
                                            <div key={index} className="col-6 col-md-4 text-center"
                                                onClick={() => handleCategoryClick(item.id)}
                                            >
                                                <div className="category-card">
                                                    <img src={item.image} alt={item.label} className="img-fluid mb-2" style={{ height: '40px' }} />
                                                    <h6>{item.label}</h6>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* HAMBURGER BUTTON - show only on small & medium */}
                        <div className="col-auto d-lg-none">
                            <button
                                className="btn"
                                type="button"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#mobileNavMenu"
                                aria-controls="mobileNavMenu"
                            >
                                <HamburgerMd height="40" width="40" />
                            </button>
                        </div>

                        {/* OFFCANVAS MENU for small & medium */}
                        <div
                            className="offcanvas offcanvas-start d-lg-none w-75"
                            tabIndex="-1"
                            id="mobileNavMenu"
                            aria-labelledby="mobileNavMenuLabel"
                        >
                            <div className="offcanvas-header">
                                <img className='img-fluid' src={Logo} alt="MarketPro Logo" style={{ height: '50px' }} />
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="offcanvas"
                                    aria-label="Close"
                                ></button>
                            </div>

                            <div className="offcanvas-body">
                                <ul className="nav flex-column">
                                    {/* HOME */}
                                    <li className="nav-item dropdown border-bottom py-2">
                                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                            Home
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Home Page</a></li>
                                            <li><a className="dropdown-item" href="#">Grocery</a></li>
                                        </ul>
                                    </li>

                                    {/* SHOP with NEW badge */}
                                    <li className="nav-item dropdown border-bottom py-2">
                                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                            Shop
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Shop 1</a></li>
                                            <li><a className="dropdown-item" href="#">Shop 2</a></li>
                                        </ul>
                                    </li>

                                    {/* PAGES with NEW badge */}
                                    <li className="nav-item dropdown border-bottom py-2">
                                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                            Pages
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">About Us</a></li>
                                            <li><a className="dropdown-item" href="#">Contact</a></li>
                                        </ul>
                                    </li>

                                    {/* VENDORS */}
                                    <li className="nav-item dropdown border-bottom py-2">
                                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                            Vendors
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Vendor 1</a></li>
                                            <li><a className="dropdown-item" href="#">Vendor 2</a></li>
                                        </ul>
                                    </li>

                                    {/* CONTACT */}
                                    <li className="nav-item py-2">
                                        <a href="#" className="nav-link">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>


                        {/* DESKTOP NAV - only visible on large+ */}
                        <div className="col d-none d-lg-flex gap-3 align-items-center">
                            <div className="nav-link dropdown">
                                <a href="#" className="text-dark dropdown-toggle" data-bs-toggle="dropdown">Home</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Home Page</a></li>
                                    <li><a className="dropdown-item" href="#">Grocery</a></li>
                                </ul>
                            </div>
                            <div className="nav-link dropdown">
                                <a href="#" className="text-dark dropdown-toggle" data-bs-toggle="dropdown">Shop</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Shop 1</a></li>
                                    <li><a className="dropdown-item" href="#">Shop 2</a></li>
                                </ul>
                            </div>
                            <div className="nav-link dropdown">
                                <a href="#" className="text-dark dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">About Us</a></li>
                                    <li><a className="dropdown-item" href="#">Contact</a></li>
                                </ul>
                            </div>
                            <div className="nav-link dropdown">
                                <a href="#" className="text-dark dropdown-toggle" data-bs-toggle="dropdown">Vendors</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Vendor 1</a></li>
                                    <li><a className="dropdown-item" href="#">Vendor 2</a></li>
                                </ul>
                            </div>
                            <div className="nav-link">
                                <a href="#" className="text-dark">Contact Us</a>
                            </div>
                        </div>

                        <div className="col-auto d-none d-lg-flex align-items-center gap-2">
                            <div className="d-flex flex-column HelpText">
                                <span className="text-dark ">Need any Help! call Us</span>
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
