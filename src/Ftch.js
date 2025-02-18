import { useState, useEffect } from "react";

function FetchData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fashion-nest-backend-ejhs.vercel.app/api/products/product")
      .then((res) => res.json())
      .then((json) => {
        console.log("API Response:", json);
        setData(json || []); 
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <>
      <h2>Fetch Data</h2>
      {data.length > 0 ? (
        <ul>
          {data.slice(0, 5).map((item) => (
            <li key={item._id}>
              <p>{item.name}</p>
              <img 
                src={item.image} 
                alt={item.name}
                width="100" 
              />
            </li> 
          ))}
        </ul>
      ) : (
        <p>Data not available or still loading...</p>
      )}
    </>
  );
}

export default FetchData;
