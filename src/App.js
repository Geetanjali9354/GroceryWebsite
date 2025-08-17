import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './Components/MainPage';
import CategoryProducts from './Components/CategoryProducts'; // Create this file as shown earlier
import ProductsDetail from './Components/ProductsDetail';
import Cart from './Components/Cart';
import Wishlist from './Components/Wishlist';
import AllProducts from './Components/AllProducts';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/category/:id" element={<CategoryProducts />} />
        <Route path="/product/:id" element={<ProductsDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/shop" element={<AllProducts />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
