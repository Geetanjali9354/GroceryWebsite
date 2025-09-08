// FilterSidebar.js
import { CategoryCollection } from './CategoryCollection'; // Adjust the import path as necessary
import CustomText from './CustomText'; // Assuming you already have this component
import './FilterSection.css'; // Create and adjust the CSS file as necessary
const FilterSection = ({ handleCategoryClick }) => {
    return (
        <div className=" d-none d-lg-flex p-3 ">
            <div className='w-100'>
                {/* Product Category Section */}
                <div className="category-sidebar mb-4">
                    <CustomText Text="Product Category" fontWeight="bold" fontSize="18px" />
                    <hr className="category-divider" />
                    <div className="category-list">
                        {CategoryCollection.map((item, index) => (
                            <div
                                key={index}
                                className="category-item"
                                onClick={() => handleCategoryClick(item.id)}
                            >
                                {item.label} (12)
                            </div>
                        ))}
                    </div>
                </div>

                {/* Filter by Price Section */}
                <div className="filter-sidebar">
                    <CustomText Text="Filter by Price" fontWeight="bold" fontSize="18px" />
                    <hr className="category-divider" />
                    <div className="price-bar-placeholder"></div>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                        <button className="filter-button">Filter</button>
                        <span className="text-muted">Price:</span>
                    </div>
                </div>

                {/* Filter by Rating Section */}
                <div className="rating-filter-sidebar mt-4">
                    <CustomText Text="Filter by Rating" fontWeight="bold" fontSize="18px" />
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
                    <CustomText Text="Filter by Color" fontWeight="bold" fontSize="18px" />
                    <hr className="category-divider" />
                    <div className="color-options ">
                        {[
                            { color: 'Black', hex: '#000' },
                            { color: 'Blue', hex: '#007bff' },
                            { color: 'Gray', hex: '#6c757d' },
                            { color: 'Green', hex: '#28a745' },
                            { color: 'Red', hex: '#dc3545' },
                            { color: 'White', hex: '#DBDBDB' },
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

                {/* Filter by Brand Section */}
                <div className="brand-filter-sidebar mt-4">
                    <CustomText Text="Filter by Brand" fontWeight="bold" fontSize="18px" />
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
        </div>
    );
};

export default FilterSection;
