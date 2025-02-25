import { Link } from "react-router-dom";
import "./recoman.css";

function RecomanCol({item}) {
  return (
    <Link to={`/details/${item._id}`} className="col">
      <img src={item.image} alt="" className="images"/>
      <p className="name">{item.name}</p>
      <p className="price"> <span>₹</span>{item.price}</p>
      <p className="desc">{item.description}</p>
      
    </Link>
  );
}

export default RecomanCol;
