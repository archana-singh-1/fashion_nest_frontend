import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"
import Navbar from "./Navbar";
import Footer from "./Footer";
import Recoman from "./Recoman";
import DetailsPage from "./DetailsPage";
import Favorites from "./Favorites";
import Cart from "./Cart";
import SuccessPage from "./SuccessPage";
import Login from "./Login";
import Signup from "./Signup";
import { useState, useEffect } from "react";
import { CartProvider } from "./CartContext";
import { AuthProvider } from "./AuthContext";

function App() {
  const [data, setData] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch("https://fashion-nest-backend-ejhs.vercel.app/api/products/product")
      .then((res) => res.json())
      .then((json) => setData(json || []))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  const addToFavorites = (item) => {
    setFavorites((prev) => {
      const isAlreadyFav = prev.find((fav) => fav._id === item._id);
      return isAlreadyFav ? prev.filter((fav) => fav._id !== item._id) : [...prev, item];
    });
  };

  return (
    <AuthProvider>
    <CartProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Recoman data={data} addToFavorites={addToFavorites} />} />
        <Route path="/details/:id" element={<DetailsPage data={data} />} />
        <Route path="/favorites" element={<Favorites favorites={favorites} />} />
        <Route path="/cart" element={<Cart />} /> 
        <Route path="/success" element={<SuccessPage />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
      </Routes>
    </Router>
      <Footer />
    </CartProvider>
    </AuthProvider>
  );
}

export default App;
