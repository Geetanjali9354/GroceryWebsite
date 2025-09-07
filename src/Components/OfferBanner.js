import Banner1 from '../Images/Banner1.png';
import Banner2 from '../Images/Banner2.png';
import './OfferBanner.css';
import CustomText from './CustomText';
import { useEffect, useState } from 'react';
function OfferBanner() {
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
        <div className="p-3 my-4">
            <div className="row">
                <div className="col-lg-6 col-sm-12 col-md-12 "
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                >
                    <div
                        className="rectangle-box"
                        style={{
                            backgroundImage: `url(${Banner1})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            display: 'flex',
                            justifyContent: 'end',
                        }}
                    >
                        <div className="banner-content ">
                            <CustomText Text="X-Connect Smart Television" fontWeight='bold' className='text-dark' fontSize='30px' />
                            <CustomText Text="Time remaining until the end of the offer." className='subtext' fontWeight='600' />
                            <div className="countdown-offer-banner">
                                <div className="countdown-item-Baner1 mt-3 TextElement"><span>{timeLeft.days}</span > D</div>
                                <div className="countdown-item-Baner1 mt-3 TextElement"><span>{timeLeft.hours}</span> H</div>
                                <div className="countdown-item-Baner1 mt-3 TextElement"><span>{timeLeft.minutes}</span> M</div>
                                <div className="countdown-item-Baner1 mt-3 TextElement"><span>{timeLeft.seconds}</span> S</div>
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
                        className="rectangle-box "
                        style={{
                            backgroundImage: `url(${Banner2})`,
                        }}
                    >
                        <div className="banner-content ">
                            <CustomText Text="Vegetables Combo Box" fontWeight='bold' className='text-dark' fontSize='30px'  />
                            <CustomText Text="Time remaining until the end of the offer." className='subtext' fontWeight='bold' />
                            <div className="countdown-offer-banner ">
                                <div className="countdown-item-Baner2 mt-3 TextElement"><span>{timeLeft.days}</span > D</div>
                                <div className="countdown-item-Baner2 mt-3 TextElement"><span>{timeLeft.hours}</span> H</div>
                                <div className="countdown-item-Baner2 mt-3 TextElement"><span>{timeLeft.minutes}</span> M</div>
                                <div className="countdown-item-Baner2 mt-3 TextElement"><span>{timeLeft.seconds}</span> S</div>
                            </div>
                            <button className="shop-now-btn-banner2">Shop Now →</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>)
};
export default OfferBanner;