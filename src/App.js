import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './Components/MainPage';
import CategoryProducts from './Components/CategoryProducts'; // Create this file as shown earlier
import ProductsDetail from './Components/ProductsDetail';
import Cart from './Components/Cart';
import Wishlist from './Components/Wishlist';
import AllProducts from './Components/AllProducts';
import ContactPage from './Components/ContactPage';
import ProfilePage from './Components/ProfilePage';
import Blog from './Components/Blog';
import Vendors from './Components/Vendors';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      {/* Toast container must be outside Routes */}
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/category/:id" element={<CategoryProducts />} />
        <Route path="/product/:id" element={<ProductsDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/shop" element={<AllProducts />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/vendors" element={<Vendors />} /> {/* Assuming Vendors component is created */}
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}


export default App;
