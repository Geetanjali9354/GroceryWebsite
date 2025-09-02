import React from "react";
import './BannerImage.css';
import NewsletterImage from '../Images/NewsLetterImage.png';

function BannerImage() {
    return (
        <div>
            <section className="newsletter-proDetail mt-5 p-3">
                <div className="container-fluid container-fluid-lg Main-proDetail">
                    <div className="py-5 px-4 px-md-5  rounded-4 d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap gap-4 ">
                        <div className="max-w-700 Text-proDetail">
                            <div
                                data-aos="fade-right"
                                data-aos-duration="1000"
                            >
                                <h3 >Don't Miss Out on   <br />Grocery Deals</h3>
                                <h4 className="mb-5">SIGN UP FOR THE UPDATE NEWSLETTER</h4>
                            </div>
                            <form action="#" className="subscribe-box d-flex align-items-center"
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                            >
                                <input
                                    type="email"
                                    placeholder="Your email address..."
                                    className="form-control border-0 shadow-none bg-transparent flex-grow-1 text-white"
                                />
                                <button type="submit" className="   subscribe-btn"
                                    data-aos="fade-right"
                                    data-aos-duration="1000"
                                >
                                    Subscribe
                                </button>
                            </form>

                        </div>
                        <div className="d-none d-lg-block "
                        data-aos="zoom-in"
                        >
                            <img src={NewsletterImage} alt="Thumbnail" className="img-fluid " />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default BannerImage;
