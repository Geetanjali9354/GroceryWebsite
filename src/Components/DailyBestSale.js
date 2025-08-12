import BestSaleOfferImage from '../Images/BestSaleOffer.png';
import Banner34Logo from '../Images/Banner3&4Logo.png';
import './DailyBestSale.css';
import NewsletterImage from '../Images/NewsLetterImage.png';
import DailySectionImg1 from '../Images/DailySectionImg1.jpeg';
import { CartOutline } from "../Images/SvgImages";
const DailyBestSale = () => {
    const products = [
        { id: 1, title: "Product 1", bgColor: "#e6f0ff" },
        { id: 2, title: "Product 2", bgColor: "#fff6e6" },
        { id: 3, title: "Product 3", bgColor: "#f0f0f0" },
        { id: 4, title: "Product 4", bgColor: "#e6ffe6" },
    ];

    return (
        <div className="container-fluid my-4">
            <div className="Shop-brand-header">
                <h3>Daily Best Sells</h3>
            </div>
            <div className="row g-3">
                <div className="col-12 col-lg-8">
                    <div className="row g-3 bg-danger">
                        {products.map((prod) => (
                            <div key={prod.id} className="col-12 col-md-6">
                                <div className="product-card p-3 rounded mb-4 shadow-sm bg-success">
                                    <div className="row align-items-center">
                                        <div className="col-6 ">
                                            <img
                                                src={DailySectionImg1}
                                                alt="Product"
                                                className="img-fluid"
                                                style={{ maxHeight: "140px", objectFit: "contain" }}
                                            />
                                        </div>

                                        <div className="col-6 ">
                                            <div className="d-flex align-items-center gap-2 ">
                                                <span className="text-muted text-decoration-line-through">
                                                    $28.99
                                                </span>
                                                <span className="fw-bold text-dark">$14.99</span>
                                                <span className="text-muted">/Qty</span>
                                            </div>

                                            <div className="d-flex align-items-center gap-1 mb-1">
                                                <span className="text-dark fw-bold">4.8</span>
                                                <i className="bi bi-star-fill text-warning"></i>
                                                <span className="text-muted">(17k)</span>
                                            </div>

                                            <h6 className="fw-semibold text-dark mb-1" style={{ fontSize: "15px" }}>
                                                Taylor Farms Broccoli Florets Vegetables
                                            </h6>

                                            <div className="d-flex align-items-center gap-1 text-muted mb-1" style={{ fontSize: "12px" }}>
                                                <i className="bi bi-shop"></i>
                                                <span>By Lucky Supermarket</span>
                                            </div>

                                            <div className="mb-2">
                                                <div className="progress" style={{ height: "5px" }}>
                                                    <div
                                                        className="progress-bar bg-info"
                                                        role="progressbar"
                                                        style={{ width: "50%" }}
                                                 
                                                    ></div>
                                                </div>
                                                <small className="text-muted">Sold: 18/35</small>
                                            </div>

                                            <button className="Add-To-Cart-Button-Daily w-75" >
                                                Add To Cart
                                                <CartOutline height="20" width="20" style={{ marginLeft: '10px' }} />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="d-flex">
                                        <div className="badge  text-dark timer">835 Days </div>:
                                        <div className="badge  text-dark timer">20 Hours</div>:
                                        <div className="badge  text-dark timer">15 Min</div>:
                                        <div className="badge  text-dark timer">30 Sec</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>


                {/* Banner */}
                <div
                    className="col-12 col-lg-4 banner-container d-flex flex-column justify-content-center align-items-start p-4"
                    style={{
                        backgroundImage: `url(${BestSaleOfferImage})`,
                    }}
                >
                    <div className="banner-content">
                        <div className="logo-circle">
                            <img src={Banner34Logo} alt="Logo" />
                        </div>
                        <h2>$5 off your first order</h2>
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
