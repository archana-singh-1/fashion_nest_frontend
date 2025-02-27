
import "./recoman.css";
import RecomanRow from "./Recoman_row";

function Recoman({ data, addToFavorites }) {
  let news_row = "";
  if (data.length > 1) {
    news_row = (
      <>
        <RecomanRow item={data[0]} item1={data[1]} item2={data[2]} item3={data[3]} addToFavorites={addToFavorites} />
        <RecomanRow item={data[4]} item1={data[5]} item2={data[6]} item3={data[7]} addToFavorites={addToFavorites} />
        <RecomanRow item={data[8]} item1={data[9]} item2={data[10]} item3={data[11]} addToFavorites={addToFavorites} />
      </>
    );
  }

  return (
    <section>
      <div className="main_container">{news_row}</div>
    </section>
  );
}

export default Recoman;
