import banner from '../images/MapleStory_BloomForest.png';

export default function Home() {

    return (
        <div id="home">
            <div className="bannerSlider">
                <img src={banner} alt="banner" />
            </div>
        </div>
    )
}