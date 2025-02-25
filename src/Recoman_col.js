import "./recoman.css";

function RecomanCol({item}) {
  return (
    <div className="col">
      <img src={item.image} alt="" className="images"/>
      <p className="name">{item.name}</p>
      <p className="price"> <span>₹</span>{item.price}</p>
      <p className="desc">{item.description}</p>
      
    </div>
  );
}

export default RecomanCol;
