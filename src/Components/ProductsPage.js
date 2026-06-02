// src/components/ProductsPage.js
import React, { useEffect, useState } from "react";
import TopBar from "./TopBar";
import Footer from "./Footer";
import ServiceHighlights from "./ServiceHighlights";
import FilterSection from "./FilterSection";
import CustomText from "./CustomText";
import { BaselineHome, HeartOutline } from "../Images/SvgImages";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { getCart } from "../Utils/cartUtils";
import { getWishlist, addToWishlist, removeFromWishlist, isInWishlist } from "../Utils/Wishlist";
import { toast } from "react-toastify";
import './ProductsPage.css';
import CartButton from "./CartButton";

const ProductsPage = ({ title, breadcrumb, products }) => {
  const navigate = useNavigate();
const [wishlist, setWishlist] = useState([]);
const [cartItems, setCartItems] = useState(getCart());

  useEffect(() => {
    setWishlist(getWishlist());
  }, []);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="container-fluid m-0 g-0" style={{ overflowX: "hidden" }}>
      <TopBar />

      {/* Header */}
      <div
        className="d-flex justify-content-between align-items-center"
        style={{
          height: "80px",
          backgroundColor: "#E9EEFB",
          padding: "0 20px",
        }}
      >
        <h4 className="m-0 fw-bold" style={{ fontFamily: "Quicksand" }}>
          {title}
        </h4>
        <div
          className="d-flex align-items-center text-muted"
          style={{ fontSize: "14px", fontFamily: "Quicksand" }}
        >
          <BaselineHome height="18px" width="18px" className="me-2" />
          <a className="me-1" href="/" style={{ textDecoration: "none" }}>
            Home
          </a>
          <span className="mx-1">{">"}</span>
          <a className="text-primary" href={`#${breadcrumb.toLowerCase().replace(/ /g, '-')}`} style={{ textDecoration: "none" }}>
            {breadcrumb}
          </a>
        </div>
      </div>

      {/* Body */}
      <div className="container-fluid m-0 g-0 mt-4">
        <div className="row p-4">
          <div className="col-lg-3  col-sm-12">
            
            {/* =====================Filter Section =============================*/}
            <FilterSection
              handleCategoryClick={(id) => navigate(`/category/${id}`)}
            />

          </div>
          <div className="col-lg-9 col-md-12 col-sm-12 flex-wrap ">
            <div className="four-box-grid-catProduct d-flex flex-wrap  justify-content-around">
              {products.map((item, index) => (
                <div
                  key={index}
                  className="box-catProduct "
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-anchor-placement="top-bottom"
                  onClick={() => handleProductClick(item.id)}
                  style={{ width: "250px" }}
                >
                  {/* Image */}
                  <div className="catProduct-image-container">
                    <img src={item.images?.[0]} alt={item.name} />
                  </div>

                  {/* Wishlist */}
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

                  {/* Info */}
                  <CustomText
                    Text={item.name}
                    className="catProduct-product-name"
                    fontWeight="bold"
                    fontSize="20px"
                  />
                  <p className="catProduct-price">
                    ${item.price} <span className="per-qty">/Qty</span>
                    <span className="original-price">${item.originalPrice}</span>
                  </p>
                  <p className="catProduct-rating">
                    <strong>{item.rating}</strong> ⭐ (17k)
                  </p>
                  <CartButton product={item} setCartItems={setCartItems} qtyBoxClass='Add-To-Cart-Quantity-Box' addBtnClass='Add-To-Cart-Button-catProduct' title="Add to Cart" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="row justify-content-center mt-4 mb-5">
        <div className="col-auto">
          <div className="pagination-static d-flex align-items-center gap-2">
            <button className="pagination-btn disabled">
              <FaArrowLeft color="black" />
            </button>
            <button className="pagination-btn active">01</button>
            <button className="pagination-btn">02</button>
            <button className="pagination-btn">03</button>
            <button className="pagination-btn">04</button>
            <button className="pagination-btn">05</button>
            <button className="pagination-btn">06</button>
            <button className="pagination-btn">07</button>
            <button className="pagination-btn">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      <ServiceHighlights />
      <Footer />
    </div>
  );
};

export default ProductsPage;
