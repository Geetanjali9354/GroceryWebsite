// src/components/CategoryProducts.js
import { useParams } from "react-router-dom";
import { CategoryCollection, ProductCollection } from "./CategoryCollection";
import ProductsPage from "./ProductsPage";

const CategoryProducts = () => {
  const { id } = useParams();
  const category = CategoryCollection.find((cat) => cat.id === id);
  const filteredProducts = ProductCollection.filter(
    (prod) => prod.categoryId === id
  );

  return (
    <ProductsPage
      title={category.label}
      breadcrumb={category.label}
      products={filteredProducts}
    />
  );
};

export default CategoryProducts;
