
import BuyBtn from "./BuyBtn";
import ItemImage from "./ItemImage";

export default function Item({ item, addToCart }){
    
    //* setting prices for items *//
    if (item.id >= 1000000 && item.id <= 1010000 || //* Hats *//
        item.id >= 1100000 && item.id <= 1110000 || //* Capes *//
        item.id >= 1080000 && item.id <= 1090000) { //* Gloves *//
        if (item.id % 14 === 0) {
            item.price = 1900;
        } 
        else if (item.id % 8 === 0) {
            item.price = 1500;
        }
        else if (item.id % 3 === 0) {
            item.price = 2100;
        }
        else {
            item.price = 1700;
        }
    }

    if (item.id >= 1040000 && item.id <= 1050000 || //* Tops *//
        item.id >= 1060000 && item.id <= 1070000 || //* Bottoms *//
        item.id >= 1070000 && item.id <= 1080000) { //* Shoes *//
        if (item.id % 30 === 0) {
            item.price = 2500;
        } 
        else if (item.id % 16 === 0) {
            item.price = 2800;
        }
        else if (item.id % 4 === 0) {
            item.price = 2900;
        }
        else {
            item.price = 2300;
        }
    }

    if (item.id >= 1050000 && item.id <= 1060000) { //* Overalls *//
        if (item.id % 20 === 0) {
            item.price = 3700;
        } 
        else if (item.id % 19 === 0) {
            item.price = 3900;
        }
        else if (item.id % 3 === 0) {
            item.price = 5000;
        }
        else {
            item.price = 4500;
        }
    }

    else if (item.price == null) {
        item.price = 2000;
    }

    return (
        <div className="itemContainer" >
            <div className="imageContainer">
                <ItemImage item={item} key={item.id}/>
            </div>

            <div className="itemName">{item.name}</div>
                    

             <div className="itemPrice">{item.price} NX</div>

            <BuyBtn 
                key={item.id}
                item={item} 
                addToCart={addToCart} />
        </div>
    )
}