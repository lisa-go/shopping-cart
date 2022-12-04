import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import Item from "./item";
import Cart from "./Cart";

export default function Shop() {
    const [loading, setLoading] = useState(false)

    const [items, setItems] = useState([{}]);

    useEffect(() => {
        setLoading(true);
        axios({
            method: 'GET',
            url: 'https://maplestory.io/api/GMS/237/item?count=40&overallCategoryFilter=equip&categoryFilter=armor&subCategoryFilter=overall&cashFilter=true'
        })
        .then(Response => {console.log(Response.data)
            setItems(Response.data)})
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
            setItems(Response.data)})
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
            setItems(Response.data)})
        .catch(Error => {console.log(Error)})
        .finally(() => {setLoading(false)})
    }

    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
        setCart(current => [...current, product]);
    }

    return (
        <div id="content">
            <Sidebar
                retrieveItems={retrieveItems} 
                searchItems={searchItems} />

            <div id="shopContainer">
                {loading ? <div>loading...</div> : 
                    items.map((item) => 
                        <Item key={item.id}
                        item={item} 
                        addToCart={addToCart} />
                )}  
            </div>

            <Cart cart={cart} loading={loading}/>
        </div>
    )
}
