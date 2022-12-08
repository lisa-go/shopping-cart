import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import Item from "./Item";
import Cart from "./Cart";
import loadgif from "../images/mushroom_loading.gif";

export default function Shop({ cart, setCart }) {
    const [loading, setLoading] = useState(false)

    const [items, setItems] = useState([{}]);

    const [title, setTitle] = useState();

    useEffect(() => {
        setLoading(true);
        axios({
            method: 'GET',
            url: 'https://maplestory.io/api/GMS/237/item?count=40&overallCategoryFilter=equip&categoryFilter=armor&subCategoryFilter=overall&cashFilter=true'
        })
        .then(Response => {console.log(Response.data)
            setItems(Response.data)
            setTitle('Search Results for ' + 'Overall')})
        .catch(Error => {console.log(Error)})
        .finally(() => {setLoading(false)})
    }, []);

    function retrieveItems(category) {
        setLoading(true);
        axios({
            method: 'GET',
            url: 'https://maplestory.io/api/GMS/237/item?count=40&overallCategoryFilter=equip&categoryFilter=armor&subCategoryFilter='
             + category + 
             '&cashFilter=true'
        })
        .then(Response => {console.log(Response.data)
            setItems(Response.data)
            setTitle('Search Results for ' + category)})
        .catch(Error => {console.log(Error)})
        .finally(() => {setLoading(false)})
    }

    function searchItems(string) {
        setLoading(true);
        axios({
            method: 'GET',
            url: 'https://maplestory.io/api/GMS/237/item?count=40&cashFilter=true&searchFor='
             + string + 
             '&cashFilter=true'
        })
        .then(Response => {console.log(Response.data)
            setItems(Response.data)
            if (Response.data.length >= 1) {
            setTitle('Search Results for ' + string)}
            else {
                setTitle('No Results for ' + string)
            }
            })
        .catch(Error => {console.log(Error)})
        .finally(() => {setLoading(false)})
    }

    const addToCart = (product) => {
        setCart(current => [...current, product]);
    }
    const removeFromCart = (product) => {
        let newData = [...cart];
        const index = newData.findIndex((element) => element === product);
        if (index !== -1) {
            newData.splice(index, 1);
            setCart(newData);
        }
    }

    return (
        <div id="content">
            <Sidebar
                retrieveItems={retrieveItems} 
                searchItems={searchItems} />

            <div id="shopContainer">
                <div id="shopSearch">{title}</div>
                {loading ? 
                <img src={loadgif} alt="loading" style={{height: '100px'}}/>
                : 
                    items.map((item) => 
                        <Item 
                        key={item.id}
                        item={item} 
                        addToCart={addToCart} />
                )}  
            </div>

            <Cart cart={cart} 
                loading={loading}
                addToCart={addToCart} 
                removeFromCart={removeFromCart} />
        </div>
    )
}
