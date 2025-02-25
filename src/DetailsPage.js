import { useParams } from "react-router-dom";
import "./details.css"

function DetailsPage({ data }) {
  const { id } = useParams();
  const item = data.find((product) => product._id === id);

  if (!item) {
    return <h2>Item not found</h2>;
  }

  return (
    <div className="details">
      <img src={item.image} alt={item.name} className="details-image" />
      <h2 className="name">{item.name}</h2>
      <p className="price"><span>₹</span>{item.price}</p>
      <p className="desc">{item.description}</p>
      <button className="addcart">Add to Cart</button>
      <button className="buynow">Buy Now</button>
    </div>
  );
}

export default DetailsPage;
