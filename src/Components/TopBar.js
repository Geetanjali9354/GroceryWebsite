import { React, useState, useEffect } from "react";
import './TopBar.css';
import Logo from '../Images/MarketPro Logo.png';
import Search from '../Images/search.png';
import User from '../Images/user.png';
import Wishlist from '../Images/wishlist.png';
import Cart from '../Images/trolley.png';
import SearchBlack from '../Images/searchBlack.png';
import { BaselineKeyboardArrowDown, HamburgerMd, Mobile } from "../Images/SvgImages";
import { FaTruck } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CustomText from "./CustomText";
import { CategoryCollection } from "./CategoryCollection";
import { useNavigate } from 'react-router-dom';
import { FaThLarge } from 'react-icons/fa';
import { getWishlist } from '../Utils/Wishlist';
import { getCart } from "../Utils/cartUtils";
function TopBar() {
    const [wishlistCount, setWishlistCount] = useState(0);
    const [cartCount, setCartCount] = useState(0);

    const navigate = useNavigate();
    const handleCategoryClick = (id) => {
        navigate(`/category/${id}`);
    };
    const handleCartClick = () => {
        navigate(`/cart`);
    };
    const handleShopClick = () => {
        navigate(`/shop`);
    };
    const handleBlogDetailClick = () => {
        navigate(`/blog`);
    };
    const handleWishlistClick = () => {
        navigate(`/wishlist`);
    };
    const handleContactClick = () => {
        navigate(`/contact`);
    };
    const handleProfileClick = () => {
        navigate(`/profile`);
    };
    const handleVendorsClick = () => {
        navigate(`/vendors`);
    };
    const [showCategories, setShowCategories] = useState(false);
    useEffect(() => {
        AOS.init({ duration: 500, once: true });
    }, []);

    // Count for Wishlist
    useEffect(() => {
        const updateWishlistCount = () => {
            const wishlist = getWishlist();
            setWishlistCount(wishlist.length);
        }
        updateWishlistCount();
        window.addEventListener('wishlistUpdated', updateWishlistCount);
    }, []);
    // Count for Cart
    useEffect(() => {
        const updateCartCount = () => {
            const cart = getCart();
            setCartCount(cart.length);
        };
        updateCartCount();
        window.addEventListener('cartUpdated', updateCartCount);
    }, []);
    // count for Timer
    const [timeLeft, setTimeLeft] = useState({
        days: 832,
        hours: 8,
        minutes: 29,
        seconds: 34,
    });
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
            <div className="header-top ">
                <div className="header-top-wrapper d-flex flex-wrap align-items-center justify-content-between ms-2 ">
                    <div className="header-countdown d-flex align-items-center flex-wrap mb-2 mb-md-0">
                        <CustomText Text="Until the end of the sale:" className="sale-text text-white d-none d-lg-flex me-2" />
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
                    <div className="header-offers d-none d-lg-flex justify-content-center mb-2 mb-md-0">
                        <p className="header-offers mb-0 text-white" style={{ fontFamily: 'Quicksand' }}>
                            Buy one get one free <span style={{ color: '#ffcc53', fontFamily: 'Quicksand' }}> first Order</span> | <FaTruck /> Track Your Order
                        </p>
                    </div>
                    <div className="me-5">
                        <div className="header-links d-flex gap-4 align-items-center">
                            {/* Order Tracking */}
                            <p className="d-none d-lg-flex mb-0">
                                <a href="#" className="text-white" style={{ fontFamily: 'Quicksand' }}>Order Tracking</a>
                            </p>

                            {/* About Us */}
                            <p className="d-none d-lg-flex mb-0">
                                <a href="#" className="text-white" style={{ fontFamily: 'Quicksand' }}>About Us</a>
                            </p>

                            {/* Language Dropdown */}
                            <div className="dropdown custom-dropdown">
                                <p className="text-white dropdown-toggle" style={{ fontFamily: 'Quicksand', cursor: 'pointer' }}>
                                    Eng
                                </p>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">English</a></li>
                                    <li><a className="dropdown-item" href="#">Japanese</a></li>
                                    <li><a className="dropdown-item" href="#">French</a></li>
                                    <li><a className="dropdown-item" href="#">German</a></li>
                                    <li><a className="dropdown-item" href="#">Bangla</a></li>
                                    <li><a className="dropdown-item" href="#">Korean</a></li>
                                </ul>
                            </div>

                            {/* Currency Dropdown */}
                            <div className="dropdown custom-dropdown">
                                <p className="text-white dropdown-toggle" style={{ fontFamily: 'Quicksand', cursor: 'pointer' }}>
                                    USD
                                </p>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* NAVBAR */}
            <header style={{ height: '100px', display: 'flex', alignItems: 'center', borderBottom: '1px solid #DBDBDB' }}>
                <div className='container-fluid'>
                    <div className='row align-items-center justify-content-between'>
                        <div className='w-auto col-lg-3 col-md-6 col-sm-3 text-start '>
                            <img className=' responsive-logo' src={Logo} alt="MarketPro Logo" />
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-4 d-none d-lg-flex">
                            <div className="input-group">
                                <select className="form-select" style={{ maxWidth: '25%' }}>
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
                        <div className="w-auto  col-lg-3 col-md-6 col-sm-6 d-flex justify-content-end align-items-center gap-3 pe-3 ProfileDiv">
                            <div className="d-lg-none cursor-pointer">
                                <img src={SearchBlack} style={{ height: '20px', width: '20px' }} />
                            </div>
                            <div className="d-flex align-items-center gap-1 cursor-pointer" onClick={handleProfileClick}>
                                <img src={User} style={{ height: '20px', width: '20px' }} />
                                <span className="d-none d-lg-flex">Profile</span>
                            </div>
                            <div
                                className="d-flex align-items-center gap-1 cursor-pointer position-relative"
                                onClick={handleWishlistClick}
                            >
                                {/* Heart Icon with Badge */}
                                <div className="position-relative" style={{ height: '20px', width: '20px' }}>
                                    {/* Badge Count */}
                                    {wishlistCount > 0 && (
                                        <span
                                            className="position-absolute  start-100 translate-middle badge rounded-pill"
                                            style={{ fontSize: '10px', backgroundColor: '#1C799B', color: 'white' }}
                                        >
                                            {wishlistCount}
                                        </span>
                                    )}
                                    <img src={Wishlist} style={{ height: '20px', width: '20px' }} className="mb-4" alt="wishlist" />
                                </div>

                                {/* Wishlist Text */}
                                <span className="d-none d-lg-flex">Wishlist</span>
                            </div>


                            <div className="d-flex align-items-center gap-1 cursor-pointer position-relative"
                                onClick={handleCartClick}
                            >
                                <div className="position-relative" style={{ height: '20px', width: '20px' }}>
                                    {cartCount > 0 && (
                                        <span className=" position-absolute start-100 translate-middle badge rounded-pill "
                                            style={{ fontSize: '10px', backgroundColor: '#1C799B', color: 'white' }}
                                        >
                                            {cartCount}
                                        </span>
                                    )}
                                    <img src={Cart} style={{ height: '20px', width: '20px' }} className="mb-4" alt="cart" />
                                </div>
                                <span className="d-none d-lg-flex">Cart</span>
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
                                className="d-flex align-items-center px-4 py-3 rounded browse-button"
                                style={{ backgroundColor: '#2ABC79', border: 'none', color: 'white' }}
                            >
                                <FaThLarge className="BrowseIcon" />
                                <span className="ms-3">Browse Categories</span>
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
                                                <div className="category-card p-1">
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
                                            <li><a className="dropdown-item" href="/">Home Page</a></li>
                                            <li><a className="dropdown-item" href="#">Grocery</a></li>
                                        </ul>
                                    </li>

                                    {/* SHOP with NEW badge */}
                                    <li className="nav-item dropdown border-bottom py-2">
                                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                            shop
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#" onClick={handleShopClick}>Shop 1</a></li>
                                            <li><a className="dropdown-item" href="#">Shop 2</a></li>
                                        </ul>
                                    </li>

                                    {/* PAGES with NEW badge */}
                                    <li className="nav-item dropdown border-bottom py-2">
                                        <a href="#" className="nav-link dropdown-toggle position-relative" data-bs-toggle="dropdown">
                                            Pages
                                            <span className="badgeeee badgeeee-yellow mt-3 ms-3">New</span>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#" onClick={handleCartClick}>Cart</a></li>
                                            <li><a className="dropdown-item" href="#" >Contact</a></li>
                                        </ul>
                                    </li>

                                    {/* VENDORS */}
                                    <li className="nav-item dropdown border-bottom py-2">
                                        <a href="#" className="nav-link dropdown-toggle " data-bs-toggle="dropdown">
                                            Vendors
                                            <span className="badgeeee badgeeee-blue mt-3 ms-4">New</span>

                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#" onClick={handleVendorsClick}>Vendor 1</a></li>
                                            <li><a className="dropdown-item" href="#">Vendor 2</a></li>
                                        </ul>
                                    </li>
                                    {/* blog */}
                                    <li className="nav-item dropdown border-bottom py-2">
                                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                            Blog
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#" onClick={handleBlogDetailClick}>Blog Details</a></li>
                                            <li><a className="dropdown-item" href="#">Blog </a></li>
                                        </ul>
                                    </li>

                                    {/* CONTACT */}
                                    <li className="nav-item py-2">
                                        <a href="#" className="nav-link" onClick={handleContactClick}>Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>


                        {/* DESKTOP NAV - only visible on large+ */}
                        <div className="col d-none d-lg-flex  align-items-center"

                        >
                            <div className="nav-link dropdown nav-link-hover"
                            >
                                <a href="#" > <span className="Heading">Home</span>
                                    <BaselineKeyboardArrowDown
                                        height="20"
                                        width="20"
                                        className="dropdown-icon"
                                    />
                                </a>
                                <ul className="dropdown-menu ">
                                    <li><a className="dropdown-item" href="/">Home Page</a></li>
                                    <li><a className="dropdown-item" href="#">Grocery</a></li>
                                </ul>
                            </div>
                            <div className="nav-link dropdown nav-link-hover">
                                <a href="#" >
                                    <span>Shop</span>
                                    <BaselineKeyboardArrowDown
                                        height="20"
                                        width="20"
                                        className="dropdown-icon"
                                    />
                                </a>

                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#" onClick={handleShopClick}>Shop 1</a></li>
                                    <li><a className="dropdown-item" href="#">Shop 2</a></li>
                                </ul>
                            </div>
                            <div className="nav-link dropdown nav-link-hover ">
                                <a href="#">
                                    <span className="position-relative">
                                        Pages
                                        <span className="badgeeee badgeeee-yellow">New</span>
                                    </span>
                                    <BaselineKeyboardArrowDown
                                        height="20"
                                        width="20"
                                        className="dropdown-icon"
                                    />
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#" onClick={handleCartClick}>
                                            Cart
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="nav-link dropdown nav-link-hover">
                                <a href="#">
                                    <span className="position-relative">
                                        Vendors
                                        <span className="badgeeee badgeeee-blue">New</span>
                                    </span>
                                    <BaselineKeyboardArrowDown
                                        height="20"
                                        width="20"
                                        className="dropdown-icon"
                                    />
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="#"
                                            onClick={handleVendorsClick}
                                        >
                                            Vendor 1
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Vendor 2
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="nav-link dropdown nav-link-hover">
                                <a href="#" > <span >Blog</span>
                                    <BaselineKeyboardArrowDown
                                        height="20"
                                        width="20"
                                        className="dropdown-icon"

                                    /></a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#" onClick={handleBlogDetailClick}>Blog Details</a></li>
                                    <li><a className="dropdown-item" href="#">Blog</a></li>
                                </ul>
                            </div>
                            <div className="nav-link">
                                <a href="#" className="text-dark" onClick={handleContactClick}>Contact Us</a>
                            </div>
                        </div>


                        <div className="col-auto d-none d-lg-flex align-items-center gap-2">
                            <Mobile height="30" width="30" />
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
