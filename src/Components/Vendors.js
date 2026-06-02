import TopBar from "./TopBar";
import './Vendors.css'; // Assuming you have a CSS file for styling
import { BaselineHome } from "../Images/SvgImages";
import VendorProduct1 from '../Images/VendorProduct1.jpeg';
import VendorProduct2 from '../Images/VendorProduct2.jpeg';
import VendorProduct3 from '../Images/VendorProduct3.jpeg';
import VendorProduct4 from '../Images/VendorProduct4.jpeg';
import CustomText from "./CustomText";
import ServiceHighlights from "./ServiceHighlights";
import Footer from "./Footer";
import BannerImage from './BannerImage';
import { FaSearch, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import VendorsList from "./VendorsList";
function Vendors() {
    const VendorList = VendorsList();
    return (
        <div className="container-fluid g-0">
            <TopBar />
            <div className="d-flex justify-content-between align-items-center" style={{
                height: '80px',
                backgroundColor: '#E9EEFB',
                padding: '0 20px'
            }}>
                <h4 className="m-0 fw-bold" style={{ fontFamily: 'Quicksand' }}>Vendors </h4>
                <div className="d-flex align-items-center text-muted" style={{ fontSize: '14px', fontFamily: 'Quicksand' }}>
                    <BaselineHome height="18px" width="18px" className="me-2" />
                    <a className="me-1" href="/" style={{ textDecoration: 'none' }}>Home</a>
                    <span className="mx-1">{'>'}</span>
                    <span className="text-primary">Vendors </span>
                </div>
            </div>
            {/* Search and Sort Section */}
            <div className="vendor-filter-bar row px-3 py-4 align-items-center g-0">
                {/* Left: Result Count */}
                <div className="col-12 col-md-6 mb-3 mb-md-0 text-center text-md-start">
                    <div className="result-count">Showing 1–20 of 85 results</div>
                </div>

                {/* Right: Search & Sort */}
                <div className="col-12 col-md-6 d-flex flex-column flex-md-row justify-content-center justify-content-md-end align-items-center gap-3">
                    {/* Search Bar */}
                    <div className="search-bar position-relative w-75 w-md-auto">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search vendors by name or ID..."
                        />
                        <button className="btn search-btn">
                            <FaSearch />
                        </button>
                    </div>

                    {/* Sort Dropdown */}
                    <div className="sort-dropdown d-flex align-items-center">
                        <span className="me-2">Sort by:</span>
                        <button className="btn sort-btn dropdown-toggle">Latest</button>
                    </div>
                </div>
            </div>


            <div className="row w-100 p-3">
                {VendorList.map((vendor, index) => (
                    <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                        <div className="vendor-card text-center p-3" style={{ backgroundColor: vendor.bgColor }}
                            data-aos="zoom-in"
                        >
                            <img src={vendor.logo} alt="logo" className="vendor-logo mb-2" />

                            <CustomText Text={vendor.name} className="mt-4" fontSize="24px" fontWeight="bold" />

                            <CustomText Text="Delivery by 6:15am" className="mt-3" fontSize="14px" fontWeight="600" />

                            <div className="vendor-badge mt-3">
                                <CustomText Text="$5 off Snack & Candy" fontSize="12px" fontWeight="600" />
                            </div>

                            <div className="d-flex justify-content-center gap-3 mt-3 flex-wrap">
                                {[VendorProduct1, VendorProduct2, VendorProduct3, VendorProduct4, VendorProduct3].map((img, i) => (
                                    <div key={i} className="product-circle-wrapper">
                                        <img src={img} className="product-image-inside" alt="vendor"/>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                ))}
            </div>
            <div className="justify-content-center mt-4 mb-5">
                <div className="col-auto">
                    <div className="pagination1-static d-flex align-items-center gap-2">
                        {/* Left Arrow */}
                        <button className="pagination1-btn disabled"><FaArrowLeft color='black' /></button>

                        {/* Static Pages */}
                        <button className="pagination1-btn active">01</button>
                        <button className="pagination1-btn">02</button>
                        <button className="pagination1-btn">03</button>
                        <button className="pagination1-btn">04</button>
                        <button className="pagination1-btn">05</button>
                        <button className="pagination1-btn">06</button>
                        <button className="pagination1-btn">07</button>

                        {/* Right Arrow */}
                        <button className="pagination1-btn"><FaArrowRight /></button>
                    </div>
                </div>
            </div>
            <ServiceHighlights />
            <BannerImage />
            <Footer />
        </div>
        // </div >
    );
}

export default Vendors;
