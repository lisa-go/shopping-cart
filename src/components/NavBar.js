import { Link } from "react-router-dom"
import Logo from "../images/maplestory-logo.png";

export default function NavBar () {

    return (
        <div id="NavBar">
            <div className="logo">
                <Link to="/">
                    <img src={Logo} alt="Logo" />
                </Link>
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
            </div>

            
        </div>
    )
}