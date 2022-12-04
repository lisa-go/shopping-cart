import CartPrices from "./CartPrices";
import CartTotal from "./CartTotal";

export default function Cart({ cart, loading }) {
    //only show 1 instance of the item picture
    const uniqueItem = cart.filter((e, i, a) => a.indexOf(e) === i);

    return (
        <div id="shopCart">
            <div id="cartTitle">CART ({cart.length})</div>

            {loading ? <div>empty...</div> : 
                    uniqueItem.map((crt) => 
                <div className="cartItem" key={crt.id}>
                    <img src={crt.image} alt={crt.id} />
                    <div className="cartName">{crt.name}</div>
                    <div className="cartCat">{crt.typeInfo.subCategory}</div>
                    <CartPrices crt={crt} cart={cart} />
                </div>
                )}  
            <CartTotal cart={cart} />
        </div>
    )
}