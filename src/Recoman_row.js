// Recoman_row.jsx
import "./recoman.css";
import RecomanCol from "./Recoman_col";

function RecomanRow({item,item1,item2,item3}) {
  return (
    <div className="row">
     
        <RecomanCol item={item}/>
        <RecomanCol item={item1}/>
        <RecomanCol item={item2}/>
        <RecomanCol item={item3}/>
       
      
    </div>
  );
}

export default RecomanRow;
