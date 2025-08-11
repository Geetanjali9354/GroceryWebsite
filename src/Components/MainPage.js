import React from "react";
import TopBar from "./TopBar";
import Content from "./Content";
import CircleCarousal from "./CircleCarousal";
import FlashSales from "./FlashSales";
import RecommendedSection from "./RecommendedSection";
import ShopBrand from "./ShopBrand";
import DailyBestSale from "./DailyBestSale";
import Footer from "./Footer";
import HotDeals from "./HotDeals";

function MainPage() {
  return (
    <div>
      <TopBar />
      <Content />
      <CircleCarousal />
      <FlashSales />
      <RecommendedSection />
      <HotDeals />
      <ShopBrand />
      <DailyBestSale />
      <Footer />

    </div>
  )
};
export default MainPage;