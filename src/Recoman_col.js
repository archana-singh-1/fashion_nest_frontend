

import { Link } from "react-router-dom";
import "./recoman.css";
import { useState } from "react";

function RecomanCol({ item, addToFavorites }) {
  const [isFav, setIsFav] = useState(false);

 
  if (!item) {
    return null
  }

  const handleFavClick = (e) => {
    e.preventDefault(); 
    setIsFav(!isFav);
    addToFavorites(item);
  };

  return (
    <Link to={`/details/${item?._id || ""}`} className="col">
      <img src={item?.image || "default-image.png"} alt="Product" className="images" />
      <img 
        src="./fav.png" 
        alt="Favorite" 
        className="favs" 
        style={{ filter: isFav ? "invert(30%) sepia(100%) saturate(500%) hue-rotate(0deg)" : "none" }}
        onClick={handleFavClick} 
      />
      <p className="name">{item?.name || "No Name Available"}</p>
      <p className="price"><span>₹</span>{item?.price || "N/A"}</p>
      <p className="desc">{item?.description || "No Description"}</p>
    </Link>
  );
}

export default RecomanCol;


