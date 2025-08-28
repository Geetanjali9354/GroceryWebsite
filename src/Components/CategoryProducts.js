import { useParams } from 'react-router-dom';
import './CategoryProducts.css'; // Adjust the path as necessary
import { CategoryCollection, ProductCollection } from './CategoryCollection';
import TopBar from './TopBar';
import Footer from './Footer';
import { BaselineHome, CartOutline, HeartOutline } from '../Images/SvgImages';
import CustomText from './CustomText';
import ServiceHighlights from './ServiceHighlights';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../Utils/cartUtils';
import { toast } from 'react-toastify';
import FilterSection from './FilterSection';
import { getWishlist, addToWishlist, removeFromWishlist, isInWishlist } from "../Utils/Wishlist";
import { useEffect, useState } from 'react';
const CategoryProducts = () => {
    const navigate = useNavigate();
    const [wishlist, setWishlist] = useState([]);
    useEffect(() => {
        setWishlist(getWishlist());
    }, []);
    const handleProductClick = (productId) => {
        navigate(`/product/${productId}`);
    };
    const handleCategoryClick = (id) => {
        navigate(`/category/${id}`);
    };
    const { id } = useParams();

    const category = CategoryCollection.find((cat) => cat.id === id);
    const filteredProducts = ProductCollection.filter((prod) => prod.categoryId === id);
    console.log(filteredProducts);
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

                    <FilterSection handleCategoryClick={handleCategoryClick} />
                    {/* Right Column (col-7) - Product List */}
                    <div className="col-7">
                        <div className="four-box-grid-catProduct">
                            {filteredProducts.map((item, index) => (
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
                                    <div
                                        className="wishlist-icon"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            if (isInWishlist(item.id)) {
                                                const updated = removeFromWishlist(item.id);
                                                setWishlist(updated);
                                                toast.error(`${item.name} removed from wishlist`);
                                            } else {
                                                const updated = addToWishlist(item);
                                                setWishlist(updated);
                                                toast.success(`${item.name} added to wishlist`);
                                            }
                                        }}
                                    >
                                        <HeartOutline
                                            height="30"
                                            width="30"
                                            className={isInWishlist(item.id) ? "red-heart" : ""}
                                        />
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
