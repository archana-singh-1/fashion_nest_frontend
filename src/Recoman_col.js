import { Link } from "react-router-dom";
import "./recoman.css";
import { useState } from "react";

function RecomanCol({ item, addToFavorites }) {
  const [isFav, setIsFav] = useState(false);

  const handleFavClick = (e) => {
    e.preventDefault(); 
    setIsFav(!isFav);
    addToFavorites(item);
  };

  return (
    <Link to={`/details/${item._id}`} className="col">
      <img src={item.image} alt="" className="images" />
      <img 
        src="./fav.png" 
        alt="Favorite" 
        className="favs" 
        style={{ filter: isFav ? "invert(30%) sepia(100%) saturate(500%) hue-rotate(0deg)" : "none" }}
        onClick={handleFavClick} 
      />
      <p className="name">{item.name}</p>
      <p className="price"><span>₹</span>{item.price}</p>
      <p className="desc">{item.description}</p>
    </Link>
  );
}

export default RecomanCol;
