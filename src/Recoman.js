import { useState,useEffect } from "react";
import "./recoman.css";
import RecomanRow from "./Recoman_row";

function Recoman() {
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

    let news_row='';
    if (1<data.length){
        news_row=(
            <>
            <RecomanRow item={data[0]} item1={data[1]} item2={data[2]} item3={data[3]}/>
            <RecomanRow item={data[4]} item1={data[5]} item2={data[6]} item3={data[7]}/> 
            <RecomanRow item={data[8]} item1={data[9]} item2={data[10]} item3={data[11]}/> 

            </>
            

        )
    }

  return (
    <section>
      <div classitem="main_container">
        {news_row}
      
      </div>
    </section>
  );
}

export default Recoman;
