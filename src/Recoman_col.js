import "./recoman.css";

function RecomanCol({item}) {
  return (
    <div className="col">
      <p>{item.name}</p>
      <p>{item.price}</p>
      <p>{item.description}</p>
      <img src={item.image} alt="" width="200px"/>
    </div>
  );
}

export default RecomanCol;
