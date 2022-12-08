import { useState, useEffect } from 'react';
import banner1 from '../images/MapleStory_BloomForest.png';
import banner2 from '../images/MapleStory_BTS_banner.png';
import banner3 from '../images/MapleStory_New_banner.png';
import left from '../images/chevron_left.svg';
import right from '../images/chevron_right.svg';

export default function Home() {
    const image = [
         banner1 ,
         banner2 ,
         banner3];

    const [imageIndex, setImageIndex] = useState(0);
     
    const handleImage = (direction) => {
        if (direction == 'right') {
        setImageIndex(prev => (prev + 1) % 3)
        }
        else if (direction == 'left') {
        setImageIndex(prev => (prev + 2) % 3) 
        }
    }

    useEffect(() => {
      const interval = setInterval(() => handleImage('right'), 5000);
      return () => clearInterval(interval);
    }, []);

    return (
        <div id="home">

            <div id="bannerSlider">
                <button onClick={() => handleImage('left')} className="imgnavL">
                    <img src={left} alt="left" />
                </button>

                <img src={image[imageIndex]} alt="banner" className="banner" />

                <div className="imgNavContainer">
                    <div className="imgNav" 
                    style={imageIndex === 0 ?{backgroundColor: 'grey'} : null}> </div>

                    <div className="imgNav" 
                    style={imageIndex === 1 ?{backgroundColor: 'grey'} : null}> </div>

                    <div className="imgNav" 
                    style={imageIndex === 2 ?{backgroundColor: 'grey'} : null}> </div>
                </div>

                <button onClick={() => handleImage('right')} className="imgnavR">
                    <img src={right} alt="right" />
                </button>
            </div> 

            <div id="homeContent">
                testing
            </div> 
        </div>
    )
}