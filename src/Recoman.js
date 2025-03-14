
// import "./recoman.css";
// import RecomanRow from "./Recoman_row";

// function Recoman({ data, addToFavorites }) {
//   let news_row = "";
//   if (data.length > 1) {

//     news_row = (
//       <>
//         <RecomanRow item={data[0]} item1={data[1]} item2={data[2]} item3={data[3]} addToFavorites={addToFavorites} />
//         <RecomanRow item={data[4]} item1={data[5]} item2={data[6]} item3={data[7]} addToFavorites={addToFavorites} />
//         <RecomanRow item={data[8]} item1={data[9]} item2={data[10]} item3={data[11]} addToFavorites={addToFavorites} />
//       </>
//     );
//   }
//   else{
//     return <p>Loading products...</p>;
//   }

//   return (
//     <section>
//       <div className="main_container">{news_row}</div>
//     </section>
//   );
// }

// export default Recoman;


import "./recoman.css";
import RecomanRow from "./Recoman_row";

function Recoman({ data, addToFavorites }) {
  if (!data || data.length === 0) {
    return <p>No products found.</p>; // Show message when search result is empty
  }

  // Group data into rows of 4 items each dynamically
  const rows = [];
  for (let i = 0; i < data.length; i += 4) {
    rows.push(
      <RecomanRow
        key={i}
        item={data[i]}
        item1={data[i + 1] || null}
        item2={data[i + 2] || null}
        item3={data[i + 3] || null}
        addToFavorites={addToFavorites}
      />
    );
  }

  return (
    <section>
      <div className="main_container">{rows}</div>
    </section>
  );
}

export default Recoman;
