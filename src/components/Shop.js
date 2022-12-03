import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import Item from "./item";

export default function Shop() {
    const [loading, setLoading] = useState(false)

    const [items, setItems] = useState([{}]);


    useEffect(() => {
        setLoading(true);
        axios({
            method: 'GET',
            url: 'https://maplestory.io/api/GMS/237/item?count=50&overallCategoryFilter=equip&categoryFilter=armor&subCategoryFilter=overall&cashFilter=true'
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
            url: 'https://maplestory.io/api/GMS/237/item?count=50&overallCategoryFilter=equip&categoryFilter=armor&subCategoryFilter='
             + category + 
             '&cashFilter=true'
        })
        .then(Response => {console.log(Response.data)
            setItems(Response.data)})
        .catch(Error => {console.log(Error)})
        .finally(() => {setLoading(false)})
    }



    return (
        <div id="content">
            <Sidebar retrieveItems={retrieveItems} />

            <div id="shopContainer">
                {loading ? <div>loading...</div> : 
                
                    items.map((item) => 
                    
                <Item 
                    item={item} 
                    setItems={setItems} 
                    items={items} />
                

        )}
                    
            </div>
        </div>
    )
}
