import { Link } from "react-router-dom";
import header from "../assets/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png"

function Header() {
    return(
        <div id="header">
        <Link to={"/"}>
            <img src={header} alt="header" width={"100%"}></img>
        </Link>
        </div>
    )
}

export default Header