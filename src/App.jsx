import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Search from './components/Search'
import axios from 'axios'; 
import ProductList from "./components/ProductList";
import LoadingSpinner from "./components/LoadingSpinner";
import Error from "./components/Error";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage"; 
import { AuthContextProvider } from "./context/Authcontext";
import { CartProvider } from "./context/CartContext";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Privacy from "./pages/Privacy";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setPosts(response.data);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <Error message={error} />;

  return (
    <AuthContextProvider>
      <CartProvider>
        <Router>
          <Navbar />
          <div className="min-h-screen bg-gray-100">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductList posts={posts} searchTerm={searchTerm} />} />
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/privacy" element={<Privacy />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </CartProvider>
    </AuthContextProvider>
  );
}

export default App;
