


import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useCart } from "./CartContext";
import "./navbar.css";

function Navbar({ onSearch, onCategoryChange }) {
  const { user, logout } = useContext(AuthContext);
  const { cart } = useCart();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchTerm(query);
    onSearch(query); 
  };

  const handleCategoryClick = (category) => {
    console.log("Category Clicked:", category);
    onCategoryChange(category);
    setShowCategoryDropdown(false); 
  };

  return (
    <nav>
      <div className="nav">
        <Link to="/">
          <img src="./homelogo.png" alt="Home Logo" className="homelogo" />
        </Link>

        
        <div className="category-container">
          <button
            className="category-btn"
            onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
          >
            Categories
          </button>

          {showCategoryDropdown && (
            <div className="categories">
              <button onClick={() => handleCategoryClick("mens")}>Mens</button>
              <button onClick={() => handleCategoryClick("womens")}>Womens</button>
              <button onClick={() => handleCategoryClick("Childern")}>Childern</button>
              <button onClick={() => handleCategoryClick("")}>All</button>
            </div>
          )}
        </div>

        
        <div className="search-container">
          <input
            type="text"
            placeholder="Search here"
            className="inputbtn"
            value={searchTerm}
            onChange={handleSearch} 
          />
          <img src="./search.png" alt="Search Icon" className="search-icon" />
        </div>

        <Link to="/favorites">
          <img src="./fav.png" alt="Favorites" className="fav" />
        </Link>

        <Link to="/cart" className="cart-container">
          <img src="./cart.png" alt="Cart" className="cart" />
          {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
        </Link>

        <div className="profile-container">
          <img
            src="./profile.png"
            alt="Profile"
            className="profile-icon"
            onClick={() => setShowDropdown(!showDropdown)}
          />

          {showDropdown && (
            <div className="dropdown">
              {user ? (
                <>
                  <span>{user.username}</span>
                  <button
                    onClick={() => {
                      logout();
                      setShowDropdown(false);
                    }}
                    className="logout-btn"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="dropdown-link"
                    onClick={() => setShowDropdown(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="dropdown-link"
                    onClick={() => setShowDropdown(false)}
                  >
                    Signup
                  </Link>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

