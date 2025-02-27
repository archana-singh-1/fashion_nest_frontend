import "./recoman.css";
import RecomanCol from "./Recoman_col";

function RecomanRow({ item, item1, item2, item3, addToFavorites }) {
  return (
    <div className="row">
      <RecomanCol item={item} addToFavorites={addToFavorites} />
      <RecomanCol item={item1} addToFavorites={addToFavorites} />
      <RecomanCol item={item2} addToFavorites={addToFavorites} />
      <RecomanCol item={item3} addToFavorites={addToFavorites} />
    </div>
  );
}

export default RecomanRow;
