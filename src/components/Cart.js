import CartPrices from "./CartPrices";
import CartTotal from "./CartTotal";
import loadgif from "../images/mushroom_loading.gif";

export default function Cart({ cart, loading, addToCart, removeFromCart }) {
    //only show 1 instance of the item picture
    const uniqueItem = cart.filter((e, i, a) => a.indexOf(e) === i);

    return (
        <div id="shopCart">
            <div id="cartTitle">CART ({cart.length})</div>

            {loading ? 
            <img src={loadgif} alt="loading" style={{height: '80px', objectFit: 'contain'}} />
            : 
                    uniqueItem.map((crt) => 
                <div className="cartItem" key={crt.id}>
                    <img src={crt.image} alt={crt.id} />
                    <div className="cartName">{crt.name}</div>
                    <div className="cartCat">{crt.typeInfo.subCategory}</div>
                    <CartPrices crt={crt} 
                        cart={cart} 
                        key={crt.id} 
                        addToCart={addToCart} 
                        removeFromCart={removeFromCart} />
                </div>
                )}  
            <CartTotal cart={cart} />
            <button id="cartCO">Check Out</button>
        </div>
    )
}