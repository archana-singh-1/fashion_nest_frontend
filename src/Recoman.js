import "./recoman.css"
import RecomanRow from "./Recoman_row";

function Recoman(){
    return(
        <>
            <section>
                <div className="main_container">
                    <RecomanRow/>
                    <RecomanRow/>
                    <RecomanRow/>
                </div>
            </section>
        </>
    )
}
export default Recoman;