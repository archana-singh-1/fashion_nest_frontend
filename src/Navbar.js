import "./navbar.css"
function Navbar(){
    return(
        <>
        <nav>
            <div className="nav">
                <div> 
                    <img src="./homelogo.png" alt="" className="homelogo"/>
                </div>
                <input type="text" placeholder="Serach here" className="inputbtn"></input>
                <img src="./fav.png" alt="" className="fav"></img>
                <img src="./cart.png" alt="" className="cart"/>
                <img src="./profile.png" alt="" className="profile"/>
                

            </div>
        </nav>
        </>
        
    )
}
export default Navbar;