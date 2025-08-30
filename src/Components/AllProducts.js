// src/components/AllProducts.js
import { ProductCollection } from "./CategoryCollection";
import ProductsPage from "./ProductsPage";

const AllProducts = () => {
  return (
    <ProductsPage
      title="All Products"
      breadcrumb="All Products"
      products={ProductCollection}
    />
  );
};

export default AllProducts;
