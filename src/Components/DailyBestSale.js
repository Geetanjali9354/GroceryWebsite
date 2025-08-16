import BestSaleOfferImage from '../Images/BestSaleOffer.png';
import Banner34Logo from '../Images/Banner3&4Logo.png';
import './DailyBestSale.css';
import NewsletterImage from '../Images/NewsLetterImage.png';
import { CartOutline } from "../Images/SvgImages";
import CustomText from './CustomText';
import CategoryCollection from './CategoryCollection';
import { useNavigate } from 'react-router-dom';

const DailyBestSale = () => {
    const navigate = useNavigate();
    const handleProductClick = (productId) => {
        navigate(`/product/${productId}`);
    };
    const selectedProductIds = [
        "cat-food-1",
        "pizza-1",
        "milk-1",
        "cheese-1"
    ]
    const AllProducts = CategoryCollection.flatMap(category => category.products);
    const selectedProducts = AllProducts.filter(product => selectedProductIds.includes(product.id));

    return (
        <div className="container-fluid my-4">
            <div className="Shop-brand-header">
                <h3>Daily Best Sells</h3>
            </div>
            <div className="row g-3 ">
                <div className="col-12 col-lg-8">
                    <div className="row g-3">
                        {selectedProducts.map((prod) => (
                            <div key={prod.id} className="col-12 col-md-6"
                                data-aos="fade-up"
                                data-aos-delay="100"
                                data-aos-anchor-placement="top-bottom"
                            >
                                <div className="product-card p-3 rounded shadow-sm border"
                                    onClick={() => handleProductClick(prod.id)}
                                >
                                    <div className="row">
                                        {/* LEFT SIDE: IMAGE + TIMER */}
                                        <div className="col-6 d-flex flex-column align-items-center justify-content-between Daily-image-container">
                                            <img
                                                src={prod.images?.[0]}
                                                alt={prod.name}
                                                className="img-fluid mb-3"
                                                style={{ maxHeight: "150px", objectFit: "contain" }}
                                            />
                                            <div className="d-flex gap-2 flex-wrap justify-content-center">
                                                <div className="timer">835 d</div>
                                                <div className="timer">20 h</div>
                                                <div className="timer">15 m</div>
                                                <div className="timer">30 s</div>
                                            </div>
                                        </div>

                                        {/* RIGHT SIDE: TEXT + ADD TO CART */}
                                        <div className="col-6 d-flex flex-column justify-content-between">
                                            <div className='ProductDetails'>
                                                <div className="d-flex align-items-center gap-2 mb-2 price">
                                                    <span className="text-muted text-decoration-line-through">${prod.originalPrice?.toFixed(2)}</span>
                                                    <span className="fw-bold text-dark">${prod.price?.toFixed(2)}</span>
                                                    <span className="text-muted">/Qty</span>
                                                </div>

                                                <div className="d-flex align-items-center gap-1 mb-1">
                                                    <p className="hotdeals-rating">
                                                        <strong>{prod.rating}</strong> ⭐
                                                    </p>
                                                    <span className="text-muted">({prod.sold || "1k"})</span>
                                                </div>

                                                <p className=" text-dark mb-1 " >
                                                    {prod.name}
                                                </p>

                                                <div className="d-flex align-items-center gap-1 text-muted mb-1" style={{ fontSize: "12px" }}>
                                                    {/* <i className="bi bi-shop"></i> */}
                                                    <span>By Supermarket</span>
                                                </div>

                                                <div className="mb-2">
                                                    <div className="progress" style={{ height: "3px" }}>
                                                        <div className="progress-bar bg-info" style={{ width: "50%" }}></div>
                                                    </div>
                                                    <small className="text-muted">Sold: {prod.sold}</small>
                                                </div>
                                            </div>

                                            <div>
                                                <button className="Add-To-Cart-Button-Daily">
                                                    Add To Cart
                                                    <CartOutline height="20" width="20" style={{ marginLeft: '6px', marginBottom: '2px' }} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>




                {/* Banner */}
                <div
                    className="col-12 col-lg-4 banner-container d-flex flex-column bg-danger"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="100"
                    style={{
                        backgroundImage: `url(${BestSaleOfferImage})`,
                        // backgroundSize: 'contain',
                        borderRadius: '20px'
                    }}
                >
                    <div className="banner-content mt-5">
                        <div className="logo-circle">
                            <img src={Banner34Logo} alt="Logo" />
                        </div>
                        <CustomText Text="$5 off your first order" fontSize="30px" fontWeight="bold" />
                        <p>Delivery by 6:15am <span className="expire-text">Expire Aug 5</span></p>
                        <button className="shop-now-btn-banner">Shop Now →</button>
                    </div>
                </div>
            </div>

            {/* -----------------------------------NEWSLETTER PORTION-------------------------------- */}
            <section className="newsletter-new mt-5">
                <div className="container-fluid container-fluid-lg Main">
                    <div className="py-5 px-4 px-md-5  rounded-4 d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap gap-4">
                        <div className="max-w-700 Text">
                            <h3 className="mb-5">Stay home & get your daily needs  <br /> from our shop</h3>
                            <form action="#" className="d-flex gap-2 flex-wrap flex-sm-nowrap">
                                <input
                                    type="text"
                                    placeholder="Enter your mail"
                                    className="form-control bg-white px-3 py-3 shadow-none rounded"
                                />
                                <button
                                    type="submit"
                                    className="py-3 px-4 flex-shrink-0 flex-grow-1 SubscribeButton"
                                >
                                    Subscribe now
                                </button>
                            </form>
                            <p className=" mt-3 small fw-medium">
                                I agree that my submitted data is being collected and stored.
                            </p>
                        </div>
                        <div className="d-none d-lg-block">
                            <img src={NewsletterImage} alt="Thumbnail" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DailyBestSale;
