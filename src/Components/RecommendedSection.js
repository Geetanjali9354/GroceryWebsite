import React from "react";
import './RecommendedSection.css';
import Banner3 from '../Images/Banner3.jpeg';
import Banner4 from '../Images/Banner4.jpeg';
import CustomText from "./CustomText";
function RecommendedSection() {
    return (
        <div className="p-3 my-4">
            <div className="row">
                <div className="col-md-6">
                    <div
                        className="rectangle-box banner-box"
                        style={{
                            backgroundImage: `url(${Banner4})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            display: 'flex',
                            justifyContent: 'end',
                        }}
                    >
                        <div className="banner-content">
                            <CustomText Text="X-Connect Smart Television" fontWeight='bold' className='banner-contentText' />
                            {/* <p className="subtext">Time remaining until the end of the offer.</p> */}
                            <CustomText Text="Time remaining until the end of the offer." className='subtext' fontWeight='bold' />
                            <div className="countdown1 ">
                                <div className="countdown-item-Baner1 mt-3"><span style={{ fontFamily: 'quicksand' }}>874</span > D</div>
                                <div className="countdown-item-Baner1 mt-3"><span style={{ fontFamily: 'quicksand' }}>16</span> H</div>
                                <div className="countdown-item-Baner1 mt-3"><span style={{ fontFamily: 'quicksand' }}>28</span> M</div>
                                <div className="countdown-item-Baner1 mt-3"><span style={{ fontFamily: 'quicksand' }}>17</span> S</div>
                            </div>
                            <button className="shop-now-btn-banner1">Shop Now →</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div
                        className="rectangle-box banner-box"
                        style={{
                            backgroundImage: `url(${Banner3})`,
                        }}
                    >
                        <div className="banner-content ">
                            {/* <h2>Vegetables Combo Box</h2> */}
                            <CustomText Text="Vegetables Combo Box" fontWeight='bold' className='banner-contentText' />
                            {/* <p className="subtext">Time remaining until the end of the offer.</p> */}
                            <CustomText Text="Time remaining until the end of the offer." className='subtext' fontWeight='bold' />
                            <div className="countdown1 ">
                                <div className="countdown-item-Baner2 mt-3"><span style={{ fontFamily: 'quicksand' }}>874</span > D</div>
                                <div className="countdown-item-Baner2 mt-3"><span style={{ fontFamily: 'quicksand' }}>16</span> H</div>
                                <div className="countdown-item-Baner2 mt-3"><span style={{ fontFamily: 'quicksand' }}>28</span> M</div>
                                <div className="countdown-item-Baner2 mt-3"><span style={{ fontFamily: 'quicksand' }}>17</span> S</div>
                            </div>
                            <button className="shop-now-btn-banner2">Shop Now →</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
};
export default RecommendedSection;