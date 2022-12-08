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

                <a href="/shop">Shop Now!</a>
            </div> 
        </div>
    )
}