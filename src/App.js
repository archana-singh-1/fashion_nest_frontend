import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Recoman from "./Recoman";
import DetailsPage from "./DetailsPage";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fashion-nest-backend-ejhs.vercel.app/api/products/product")
      .then((res) => res.json())
      .then((json) => setData(json || []))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Recoman data={data} />} />
        <Route path="/details/:id" element={<DetailsPage data={data} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
