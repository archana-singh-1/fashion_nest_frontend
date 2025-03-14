import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Recoman from "./Recoman";
import DetailsPage from "./DetailsPage";
import Favorites from "./Favorites";
import Cart from "./Cart";
import SuccessPage from "./SuccessPage";
import Login from "./Login";
import Signup from "./Signup";
import { CartProvider } from "./CartContext";
import { AuthProvider } from "./AuthContext";

function App() {
  const [data, setData] = useState([]); 
  const [filteredData, setFilteredData] = useState([]); 
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch("https://fashion-nest-backend-ejhs.vercel.app/api/products/product")
      .then((res) => res.json())
      .then((json) => {
        setData(json || []);
        setFilteredData(json || []); 
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

 
  useEffect(() => {
    console.log("Selected Category:", category);
    console.log("Available Categories in Data:", data.map((item) => item.category));
  
    if (category) {
      const filtered = data.filter(
        (item) =>
          item.category?.trim().toLowerCase() === category.trim().toLowerCase()
      );
      console.log("Filtered Data by Category:", filtered);
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  }, [category, data]);
  

 
  const getSimilarity = (word1, word2) => {
    if (!word1 || !word2) return 0;

    const w1 = word1.toLowerCase();
    const w2 = word2.toLowerCase();
    
    let matches = 0;
    for (let i = 0; i < Math.min(w1.length, w2.length); i++) {
        if (w1[i] === w2[i]) {
            matches++;
        }
    }
    
    return matches / Math.max(w1.length, w2.length);
};

const handleSearch = (query) => {
    console.log("Search Query:", query);
    setSearchQuery(query);

    if (query.trim() !== "") {
        const searchTerm = query.trim().toLowerCase();

        const filtered = data.filter((item) => {
            const nameMatch = item.name?.toLowerCase().includes(searchTerm);
            const categoryMatch = item.category?.trim().toLowerCase().startsWith(searchTerm);
            const fuzzyMatch = getSimilarity(searchTerm, item.category?.toLowerCase()) > 0.6; // 60% match

            return nameMatch || categoryMatch || fuzzyMatch;
        });

        console.log("Filtered Data by Search:", filtered);
        setFilteredData(filtered);
    } else {
        setFilteredData(data);
    }
};


  const addToFavorites = (item) => {
    setFavorites((prev) => {
      const isAlreadyFav = prev.some((fav) => fav._id === item._id);
      return isAlreadyFav ? prev.filter((fav) => fav._id !== item._id) : [...prev, item];
    });
  };

  
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
    if (storedFavorites) {
      setFavorites(storedFavorites);
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Navbar onSearch={handleSearch} onCategoryChange={setCategory} />
          <Routes>
            <Route path="/" element={<Recoman data={filteredData} addToFavorites={addToFavorites} />} />
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



