import { Link } from "react-router-dom";
import Banner from "./Banner";

export default function Home() {

    return (
        <div id="home">
            <Banner />
            <div id="homeContent">
                <div className="welcome">
                    Welcome to MapleStore!
                </div>

                <div className="subtext">
                    Hundreds of New Content Available Daily
                </div>

                <Link to="/shop">Shop Now!</Link>
            </div>
        </div>
    )
}