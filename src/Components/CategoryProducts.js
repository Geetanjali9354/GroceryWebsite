import { useParams } from 'react-router-dom';
import './CategoryProducts.css'; // Adjust the path as necessary
import CategoryCollection from './CategoryCollection'; // adjust if path is different
import TopBar from './TopBar';
import Footer from './Footer';
import { BaselineHome } from '../Images/SvgImages';
import CustomText from './CustomText';
import { CartOutline } from '../Images/SvgImages';
import ServiceHighlights from './ServiceHighlights';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../Utils/cartUtils';
import { toast } from 'react-toastify';

const CategoryProducts = () => {
    const navigate = useNavigate();
    const handleProductClick = (productId) => {
        navigate(`/product/${productId}`);
    };
    const { id } = useParams();

    const category = CategoryCollection.find((cat) => cat.id === id);

    if (!category) return <div>Category not found</div>;
    const HandleAddToCart = (product => {
        addToCart(product);
        toast.success(`${product.name} added to cart!`);
    })
    return (
        <div className="container-fluid m-0 g-0" style={{ overflowX: 'hidden' }}>
            <TopBar />

            <div className="d-flex justify-content-between align-items-center" style={{
                height: '80px',
                backgroundColor: '#E9EEFB',
                padding: '0 20px'
            }}>
                <h4 className="m-0 fw-bold" style={{ fontFamily: 'Quicksand' }}>{category.label}</h4>
                <div className="d-flex align-items-center text-muted" style={{ fontSize: '14px', fontFamily: 'Quicksand' }}>
                    <BaselineHome height="18px" width="18px" className="me-2" />
                    <a className="me-1" href="/" style={{ textDecoration: 'none' }}>Home</a>
                    <span className="mx-1">{'>'}</span>
                    <span className="text-primary">{category.label}</span>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="container-fluid m-0 g-0 mt-4">
                <div className="row p-4">
                    {/* Left Column (col-5) - Red Box */}
                    <div className="col-3 d-none d-lg-block p-3">
                        {/* Product Category Section */}
                        <div className="category-sidebar mb-4">
                            <h5 className="category-title">Product Category</h5>
                            <hr className="category-divider" />
                            <div className="category-list">
                                {CategoryCollection.map((item, index) => (
                                    <div key={index} className="category-item">
                                        {item.label} (12)
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Filter by Price Section */}
                        <div className="filter-sidebar">
                            <h5 className="category-title">Filter by Price</h5>
                            <hr className="category-divider" />

                            {/* Price Range Slider or Placeholder Bar */}
                            <div className="price-bar-placeholder"></div>
                            <div className="d-flex justify-content-between align-items-center mt-3">
                                <button className="filter-button">Filter</button>
                                <span className="text-muted ">Price:</span>
                            </div>
                        </div>
                        {/* Filter by Rating Section */}
                        <div className="rating-filter-sidebar mt-4">
                            <h5 className="category-title">Filter by Rating</h5>
                            <hr className="category-divider" />
                            <div className="rating-options">
                                {[5, 4, 3, 2, 1].map((rating, index) => {
                                    const ratingCounts = [124, 52, 12, 5, 2]; // example counts
                                    const widths = ["70%", "60%", "40%", "25%", "10%"]; // for progress bars

                                    return (
                                        <div className="rating-option d-flex align-items-center mb-3" key={index}>
                                            <input type="radio" name="rating" className="form-check-input me-2" />

                                            <div className="flex-grow-1 me-2">
                                                <div className="rating-progress-bar">
                                                    <div
                                                        className="rating-progress-fill"
                                                        style={{ width: widths[index] }}
                                                    ></div>
                                                </div>
                                            </div>

                                            <div className="rating-stars me-2">
                                                {'★'.repeat(rating)}
                                                {'☆'.repeat(5 - rating)}
                                            </div>

                                            <div className="rating-count text-muted">{ratingCounts[index]}</div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        {/* Filter by Color Section */}
                        <div className="color-filter-sidebar mt-4">
                            <h5 className="category-title">Filter by Color</h5>
                            <hr className="category-divider" />
                            <div className="color-options ">
                                {[
                                    { color: 'Black', hex: '#000' },
                                    { color: 'Blue', hex: '#007bff' },
                                    { color: 'Gray', hex: '#6c757d' },
                                    { color: 'Green', hex: '#28a745' },
                                    { color: 'Red', hex: '#dc3545' },
                                    { color: 'White', hex: 'black' },
                                    { color: 'Purple', hex: '#6f42c1' },
                                ].map((item, index) => (
                                    <label className="color-option d-flex align-items-center mb-3" key={index}>
                                        <input
                                            type="radio"
                                            name="color"
                                            className="color-radio me-2"
                                            style={{ borderColor: item.hex }}
                                        />
                                        <span className="color-label">{item.color} (12)</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="brand-filter-sidebar mt-4">
                            <h5 className="category-title">Filter by Brand</h5>
                            <hr className="category-divider" />
                            <div className="brand-options">
                                {['Amul', 'Nestlé', 'Britannia', 'Aashirvaad', 'Fortune', 'Cadbury', 'Tata Tea'].map((brand, index) => (
                                    <label className="brand-option d-flex align-items-center mb-3" key={index}>
                                        <input type="radio" name="brand" className="form-check-input me-2" />
                                        <span className="brand-label">{brand}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                    </div>


                    {/* Right Column (col-7) - Product List */}
                    <div className="col-7">
                        <div className="four-box-grid-catProduct">
                            {category.products.map((item, index) => (
                                <div
                                    key={index}
                                    className="box-catProduct "
                                    data-aos="fade-up"
                                    data-aos-delay="100"
                                    data-aos-anchor-placement="top-bottom"
                                    onClick={() => handleProductClick(item.id)}
                                    style={{ width: '250px' }}
                                >
                                    <div className="catProduct-image-container">
                                        <img src={item.images?.[0]} alt={item.name} />
                                    </div>
                                    <CustomText Text={item.name} className='catProduct-product-name' fontWeight='bold' fontSize='20px' />

                                    <p className="catProduct-price">
                                        ${item.price} <span className="per-qty">/Qty</span>
                                        <span className="original-price">${item.originalPrice}</span>
                                    </p>
                                    <p className="catProduct-rating">
                                        <strong>{item.rating}</strong> ⭐ (17k)
                                    </p>

                                    <button className="Add-To-Cart-Button-catProduct" onClick={(e) => {
                                        e.stopPropagation();
                                        HandleAddToCart(item);
                                    }}>
                                        Add To Cart
                                        < CartOutline height="20" width="20" style={{ marginLeft: '10px' }
                                        } />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


            {/* Static Pagination Row */}
            <div className="row justify-content-center mt-4 mb-5">
                <div className="col-auto">
                    <div className="pagination-static d-flex align-items-center gap-2">
                        {/* Left Arrow */}
                        <button className="pagination-btn disabled"><FaArrowLeft color='black' /></button>

                        {/* Static Pages */}
                        <button className="pagination-btn active">01</button>
                        <button className="pagination-btn">02</button>
                        <button className="pagination-btn">03</button>
                        <button className="pagination-btn">04</button>
                        <button className="pagination-btn">05</button>
                        <button className="pagination-btn">06</button>
                        <button className="pagination-btn">07</button>

                        {/* Right Arrow */}
                        <button className="pagination-btn"><FaArrowRight /></button>
                    </div>
                </div>
            </div>

            <ServiceHighlights />
            <Footer />
        </div >

    );
};

export default CategoryProducts;
