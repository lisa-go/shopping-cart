import hat from '../images/detective-hat.png';
import overall from '../images/slip-dress.png';
import top from '../images/t-shirt.png';
import bottom from '../images/trousers.png';
import glove from '../images/mittens.png';
import shoes from '../images/footwear.png';
import cape from '../images/poncho.png';
import search from '../images/search.svg';
import banner1 from '../images/happy-christmas.png';
import banner2 from '../images/MapleStory_BloomForest_banner.png';
import React, { useState } from 'react';

export default function Sidebar({ retrieveItems, searchItems }) {
    const [input, setInput] = useState('');

    const onInputChange = (e) => {
        setInput(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        searchItems(input);
    }

    return (
        <div id="Sidebar">
            <form onSubmit={onSubmit}>
                <img src={search} alt="search" className="filter-bw" />
                <input type="text" placeholder="Search Items..." onChange={onInputChange} />
            </form>

            <button onClick={() => retrieveItems('Hat')}>
                <img src={hat} alt="hat" />
                Hat
            </button>

            <button onClick={() => retrieveItems('Overall')}>
                <img src={overall} alt="overall" />
                Overall
            </button>

            <button onClick={() => retrieveItems('Top')}>
                <img src={top} alt="top" />
                Top
            </button>

            <button onClick={() => retrieveItems('Bottom')}>
                <img src={bottom} alt="bottom" />
                Bottom
            </button>

            <button onClick={() => retrieveItems('Glove')}>
                <img src={glove} alt="glove" />
                Glove
            </button>

            <button onClick={() => retrieveItems('Shoes')}>
                <img src={shoes} alt="shoes" />
                Shoes
            </button>

            <button onClick={() => retrieveItems('Cape')}>
                <img src={cape} alt="cape" />
                Cape
            </button>

            <img src={banner1} alt="banner1" className="banner" />
            <img src={banner2} alt="banner2" className="banner" />
        </div>
    )
}