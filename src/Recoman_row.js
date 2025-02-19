import "./recoman.css"
import RecomanCol from "./Recoman_col";
function RecomanRow(){
    return(
        <div className="row">
            <RecomanCol/>
            <RecomanCol/>
            <RecomanCol/>
            <RecomanCol/>
        </div>
    )
}
export default RecomanRow;