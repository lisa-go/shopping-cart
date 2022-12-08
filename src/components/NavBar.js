import { Link } from "react-router-dom"
import Logo from "../images/maplestory-logo.png";

export default function NavBar ({ cart }) {

    return (
        <div id="NavBar">
            <span className="logo">
                <Link to="/">
                    <img src={Logo} alt="Logo" />
                    MapleStore
                </Link>
            </span>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/shop">Cart ({cart.length})</Link>
            </div>
        </div>
    )
}