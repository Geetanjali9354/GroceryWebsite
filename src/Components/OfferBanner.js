import Banner1 from '../Images/Banner1.png';
import Banner2 from '../Images/Banner2.png';
import './OfferBanner.css';
import CustomText from './CustomText';

function OfferBanner() {
    return (
        <div className="p-3 my-4">
            <div className="row">
                <div className="col-lg-6 col-sm-12 col-md-12 "
                    data-aos="zoom-in"
                    data-aos-duration="1000"

                >
                    <div
                        className="rectangle-box banner-box"
                        style={{
                            backgroundImage: `url(${Banner1})`,
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

                <div className="col-lg-6 col-sm-12 col-md-12"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                >
                    <div
                        className="rectangle-box banner-box"
                        style={{
                            backgroundImage: `url(${Banner2})`,
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
        </div>)
};
export default OfferBanner;