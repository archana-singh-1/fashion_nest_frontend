import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="nav">
        <div>
          <img src="./homelogo.png" alt="Home Logo" className="homelogo" />
        </div>
        <div className="search-container">
          <input type="text" placeholder="Search here" className="inputbtn" />
          <img src="./search.png" alt="Search Icon" className="search-icon" />
        </div>
        <Link to="/favorites">
          <img src="./fav.png" alt="Favorites" className="fav" />
        </Link>
        <img src="./cart.png" alt="Cart" className="cart" />
        <img src="./profile.png" alt="Profile" className="profile" />
      </div>
    </nav>
  );
}

export default Navbar;
