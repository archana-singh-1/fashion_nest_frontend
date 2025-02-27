import { useCart } from "./CartContext";
import { Link } from "react-router-dom";
import "./cart.css";

function Cart() {
  const { cart } = useCart(); 

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty. <Link to="/">Continue Shopping</Link></p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item._id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-image" />
              <div>
                <h3 className="cartname">{item.name}</h3>
                <p className="price">₹{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
