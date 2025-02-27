import { Link } from "react-router-dom";
import "./favorites.css"

function Favorites({ favorites }) {
  return (
    <section>
      <h2 className="favHead">Your Favorite Items</h2>
      <div className="favorites-container">
        {favorites.length === 0 ? (
          <p>No favorite items yet.</p>
        ) : (
          favorites.map((item) => (
            <Link to={`/details/${item._id}`} key={item._id} className="favorite-item">
              <div className="favContain">
                <img src={item.image} alt={item.name} className="fav-image" />
                <p className="fav-name">{item.name}</p>
                <p className="fav-price">₹{item.price}</p>
              </div>
              
            </Link>
          ))
        )}
      </div>
    </section>
  );
}

export default Favorites;
