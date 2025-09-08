import { FaUser, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLock, FaSignOutAlt } from 'react-icons/fa';
import TopBar from './TopBar';
import { BaselineHome } from '../Images/SvgImages';
import './Profile.css';
import CustomText from './CustomText';
import ServiceHighlights from './ServiceHighlights';
import Footer from './Footer';
const Profile = () => {
    return (
        <div className="container-fluid  g-0" style={{ overflow: 'hidden' }}>
            <TopBar />
            <div className="d-flex justify-content-between align-items-center" style={{
                height: '80px',
                backgroundColor: '#E9EEFB',
                padding: '0 20px'
            }}>
                <h4 className="m-0 fw-bold" style={{ fontFamily: 'Quicksand' }}>Profile Page</h4>
                <div className="d-flex align-items-center text-muted" style={{ fontSize: '14px', fontFamily: 'Quicksand' }}>
                    <BaselineHome height="18px" width="18px" className="me-2" />
                    <a className="me-1" href="/" style={{ textDecoration: 'none' }}>Home</a>
                    <span className="mx-1">{'>'}</span>
                    <span className="text-primary">Profile Page</span>
                </div>
            </div>
            <div className="row rounded p-4 bg-white mt-5">
                {/* Left Column - Profile Edit Form */}
                <div className="col-lg-8 col-sm-12 MainProfile p-4">
                    <CustomText Text="My Profile" fontSize="22px" fontFamily="Quicksand" fontWeight={700} />
                    <form className='Font'>
                        <div className="row mb-3 mt-4">
                            <div className="col-md-6 mb-3 ">
                                <label className="form-label input-Text">Full Name <span className="text-danger">*</span></label>
                                <input type="text" className="form-control input-box" placeholder="Full name" />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label input-Text">Email Address <span className="text-danger">*</span></label>
                                <input type="email" className="form-control input-box" placeholder="Email address" />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-6 mb-3">
                                <label className="form-label input-Text">Phone Number <span className="text-danger">*</span></label>
                                <input type="text" className="form-control input-box" placeholder="Phone Number" />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label input-Text">Address</label>
                                <input type="text" className="form-control input-box" placeholder="Address" />
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className="form-label input-Text">Pincode</label>
                            <input type="text" className="form-control input-box" placeholder="Pincode" />
                        </div>

                        <button type="submit" className=" updateprofile-btn px-4 py-2 mt-2">
                            Update Profile
                        </button>
                    </form>
                </div>

                {/* Right Column - Profile Summary Box */}
                <div className="col-lg-4 col-sm-12 mt-4 mt-lg-0 d-flex flex-column justify-content-between">

                    {/* Info Box */}
                    <div className="border rounded p-4 flex-grow-1">
                        <CustomText Text="Profile Info" fontSize="22px" fontFamily="Quicksand" fontWeight={600} />
                        <div className='mt-4 contact-details p-2'>
                            <div className="d-flex align-items-center mb-3">
                                <FaUser className="text-primary me-3 mb-2" />
                                <span>John Doe</span>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <FaEnvelope className="text-primary me-3 mb-2" />
                                <span>johndoe@example.com</span>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <FaPhoneAlt className="text-primary me-3 mb-2" />
                                <span>+91 9876543210</span>
                            </div>
                            <div className="d-flex align-items-center mb-4">
                                <FaMapMarkerAlt className="text-primary me-3 mb-2" />
                                <span>Mumbai, India</span>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="d-flex gap-3 mt-4  button-div">
                        <button className="btn contact-btn d-flex align-items-center gap-2 flex-grow-1">
                            <FaLock />
                            Change Password
                        </button>
                        <button className="btn  logout-btn  d-flex align-items-center gap-2 flex-grow-1">
                            <FaSignOutAlt />
                            Logout
                        </button>
                    </div>
                </div>
            </div>
            <ServiceHighlights/>
            <Footer/>
        </div>
    );
};

export default Profile;
