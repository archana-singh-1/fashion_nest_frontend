import { Link } from "react-router-dom";
import { useCart } from "./CartContext";  
import "./navbar.css";

function Navbar() {
  const { cart } = useCart();  

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
          {cart.length > 0 && <span className="cart-count">{cart.length}</span>} {/* 🛒 Cart Count */}
        </Link>

        <img src="./profile.png" alt="Profile" className="profile" />
      </div>
    </nav>
  );
}

export default Navbar;
