import { Link } from "react-router-dom";
import "./successpage.css";

function SuccessPage() {
  return (
    <div className="success-container">
      <h2>🎉 Your Order is Successful! 🎉</h2>
      <p>Thank you for shopping with us.</p>
      <Link to="/">
        <button className="home-btn">Go to Home</button>
      </Link>
    </div>
  );
}

export default SuccessPage;
