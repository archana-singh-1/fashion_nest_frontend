import "./navbar.css"
function Navbar(){
    return(
        <>
        <nav>
            <div className="nav">
                <div> 
                    <img src="./homelogo.png" alt="" className="homelogo"/>
                </div>
                <div className="search-container">
                    <input type="text" placeholder="Search here" className="inputbtn" />
                    <img src="./search.png" alt="Search Icon" className="search-icon" />
                </div>
                <img src="./fav.png" alt="" className="fav"></img>
                <img src="./cart.png" alt="" className="cart"/>
                <img src="./profile.png" alt="" className="profile"/>
                

            </div>
        </nav>
        </>
        
    )
}
export default Navbar;