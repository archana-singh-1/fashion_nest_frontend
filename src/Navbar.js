import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useCart } from "./CartContext";
import "./navbar.css";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const { cart } = useCart();
  const [showDropdown, setShowDropdown] = useState(false);

  // Function to close dropdown
  const closeDropdown = () => setShowDropdown(false);

  return (
    <nav>
      <div className="nav">
        <Link to="/">
          <img src="./homelogo.png" alt="Home Logo" className="homelogo" />
        </Link>

        <div className="search-container">
          <input type="text" placeholder="Search here" className="inputbtn" />
          <img src="./search.png" alt="Search Icon" className="search-icon" />
        </div>

        <Link to="/favorites">
          <img src="./fav.png" alt="Favorites" className="fav" />
        </Link>

        <Link to="/cart" className="cart-container">
          <img src="./cart.png" alt="Cart" className="cart" />
          {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
        </Link>

        {/* Profile Icon */}
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
                  <button onClick={() => { logout(); closeDropdown(); }} className="logout-btn">Logout</button>
                </>
              ) : (
                <>
                  <Link to="/login" className="dropdown-link" onClick={closeDropdown}>Login</Link>
                  <Link to="/signup" className="dropdown-link" onClick={closeDropdown}>Signup</Link>
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


