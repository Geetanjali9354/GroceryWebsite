import TopBar from "./TopBar";
import { BaselineHome } from "../Images/SvgImages";
import { FaCalendarWeek, FaComment, FaSearch } from "react-icons/fa";
import BlogMainImg from '../Images/BlogMainImg.jpeg';
import './Blog.css';
import BlogProduct1 from '../Images/BlogProduct1.jpeg';
import BlogProduct2 from '../Images/BlogProduct2.jpeg';
import BlogProduct3 from '../Images/BlogProduct3.jpeg';
import BlogProduct4 from '../Images/BlogProduct4.jpeg';
import AirpodsBlog from '../Images/AirpodsBlog.jpeg';
import LaptopBlog from '../Images/LaptopBlog.jpeg';
import CustomText from "./CustomText";
import ServiceHighlights from './ServiceHighlights';
import Footer from './Footer';
function Blog() {
    const posts = [
        {
            title: "Once determined you need to come up with a name",
            date: "July 12, 2025",
            image: BlogProduct1,
        },
        {
            title: "Another post title goes here",
            date: "July 13, 2025",
            image: BlogProduct2,
        },
        {
            title: "Interesting article title here",
            date: "July 14, 2025",
            image: BlogProduct3,
        },
        {
            title: "Useful info in this blog post",
            date: "July 15, 2025",
            image: BlogProduct4,
        },
    ];

    return (
        <div className="container-fluid g-0">
            <TopBar />
            <div className="d-flex justify-content-between align-items-center" style={{
                height: '80px',
                backgroundColor: '#E9EEFB',
                padding: '0 20px'
            }}>
                <h4 className="m-0 fw-bold" style={{ fontFamily: 'Quicksand' }}>Blog </h4>
                <div className="d-flex align-items-center text-muted" style={{ fontSize: '14px', fontFamily: 'Quicksand' }}>
                    <BaselineHome height="18px" width="18px" className="me-2" />
                    <a className="me-1" href="/" style={{ textDecoration: 'none' }}>Home</a>
                    <span className="mx-1">{'>'}</span>
                    <span className="text-primary">Blog </span>
                </div>
            </div>
            <div className="container-fluid my-4 mt-5">
                <div className="row g-4">
                    {/* <!-- Left Section --> */}
                    <div className="col-lg-8">
                        <div className="card border-0  p-3 bg-white">
                            {/* Blog Image */}
                            <img src={BlogMainImg} alt="Tech Image" className="img-fluid rounded mb-4" />

                            {/* Tag */}
                            <span className="  px-3 py-2 mb-3 Gadget-btn" >
                                Gadget
                            </span>

                            {/* Title */}

                            <CustomText Text="Nice decoration make be distilled to a single house" className="blog-title mb-3" fontSize="30px" fontWeight="bold" />

                            {/* Main Text */}
                            <p className="text-muted" style={{ fontSize: "1rem", lineHeight: "1.7" }}>
                                A great commerce experience cannot be distilled to a single number. It's not a Lighthouse score, or a set of Core Web Vitals figures, although both are important inputs. A great commerce experience is a trilemma that carefully balances competing needs of delivering great customer experience, dynamic storefront capabilities, and long-term business — conversion, retention, re-engagement — objectives. As developers, we rightfully obsess about the customer experience, relentlessly working to squeeze every millisecond out of the critical rendering path, optimize input latency, and eliminate jank. At the limit, statically generated, edge delivered, and HTML-first pages look like the optimal strategy. That is until you are confronted with the realization that the next step function in improving conversion rates and business.
                            </p>

                            <p className="text-muted" style={{ fontSize: "1rem", lineHeight: "1.7" }}>
                                Re-engagement — objectives. As developers, we rightfully obsess about the customer experience, relentlessly working to squeeze every millisecond out of the critical rendering path, optimize input latency, and eliminate...
                            </p>

                            {/* Divider */}
                            <hr />

                            {/* Metadata */}
                            <div className="d-flex align-items-center gap-4 text-muted" style={{ fontSize: "14px" }}>
                                <div className="d-flex align-items-center gap-2">
                                    <FaCalendarWeek className="calendar-icon" />
                                    July 12, 2025
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <FaComment className="calendar-icon" />
                                    0 Comments
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* <!-- Right Sidebar --> */}
                    <div className="col-lg-4 d-none d-lg-block">
                        {/* <!-- Search Section --> */}
                        <div className="search-container p-4">
                            <div style={{ borderBottom: '1px solid #dbdbdb' }}>
                                <CustomText Text="Search Here" className="search-title mb-4" fontSize="22px" fontWeight="bold" />
                            </div>
                            <div className="input-group input-div mt-5">
                                <input
                                    type="text"
                                    className="form-control search-input"
                                    placeholder="Searching..."
                                />
                                <button className="search-button">
                                    <FaSearch color="white" />
                                </button>
                            </div>
                        </div>

                        {/* <!-- Recent Posts Section --> */}
                        <div className="recent-posts-container mt-5">
                            <div>
                                <CustomText Text="Recent Posts" className="recent-posts-title" fontSize="22px" fontWeight="bold" />
                            </div>
                            <hr />
                            {posts.map((post, index) => (
                                <div className="recent-post-item d-flex gap-3  p-3" key={index}>
                                    <img
                                        src={post.image}
                                        alt="Post Thumbnail"
                                        className="recent-post-img"
                                    />
                                    <div>
                                        <CustomText Text={post.title} className="recent-post-text mb-1 mt-3" fontSize="18px" fontWeight="bold" />
                                        <small className="text-muted d-flex align-items-center gap-1">
                                            {/* <FaRegCalendarAlt className="calendar-icon" /> */}
                                            <FaCalendarWeek className="calendar-icon" />
                                            {post.date}
                                        </small>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="row">
                    {/* Left Content (Images + Text) */}
                    <div className="col-12 col-lg-8">

                        {/* Image Wrapper */}
                        <div className="row g-4">
                            <div className="col-12 col-md-6">
                                <div
                                    style={{
                                        backgroundImage: `url(${AirpodsBlog})`,
                                        width: '100%',
                                        height: '450px',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        borderRadius: '10px',
                                    }}
                                ></div>
                            </div>

                            <div className="col-12 col-md-6">
                                <div
                                    style={{
                                        backgroundImage: `url(${LaptopBlog})`,
                                        width: '100%',
                                        height: '450px',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        borderRadius: '10px',
                                    }}
                                ></div>
                            </div>
                        </div>

                        {/* Shared Text */}
                        <div className="mt-5">
                            <CustomText Text=" A great commerce experience cannot be distilled to a single number. It’s not a Lighthouse score, or a set of Core Web Vitals figures,
                                although both are important inputs. A great commerce experience is a trilemma that carefully balances competing needs of delivering
                                great customer experience, dynamic storefront capabilities, and long-term business." className="mt-3 text-muted" fontSize="18px" />
                        </div>
                    </div>

                    {/* Right Side - Categories (Only on large screens) */}
                    <div className="categories-card p-4 bg-white col-4 d-none d-lg-block">
                        <CustomText Text="Categories" className=" mb-3" fontSize="22px" fontWeight="bold" />
                        <hr />
                        <div className="category-list d-flex flex-column ">
                            {['Gaming (12)', 'Smart Gadget (05)', 'Software (29)', 'Electronics (24)', 'Laptop (08)', 'Mobile & Accessories (16)', 'Apliance (24)'].map((category, index) => (
                                <div className="category-item d-flex justify-content-between align-items-center px-3 rounded" key={index}>
                                    <span>{category}</span>
                                    <div className="category-arrow d-flex justify-content-center align-items-center rounded">
                                        <span>&rarr;</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
            <ServiceHighlights />
            <Footer />
        </div>
    );
}

export default Blog;
