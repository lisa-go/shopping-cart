import QtyAddBtn from "./QtyAddBtn";
import QtyMinBtn from "./QtyMinBtn";

export default function CartPrices({ crt, cart, addToCart, removeFromCart }) {
    //* finding duplicates in array *//
    let quantity = cart.reduce((n, x) => n + (x === crt), 0);

    let tprice = quantity * crt.price;

    return (
        <div className="priceContainer">
            <div className="cartQuantity">
                Qty:
                <QtyMinBtn crt={crt}
                    removeFromCart={removeFromCart} />
                {quantity}
                <QtyAddBtn crt={crt}
                    addToCart={addToCart} />
            </div>
            <div className="cartPrice">Unit Price: {crt.price} NX</div>
            <div className="cartTprice">Total Price: {tprice} NX</div>
        </div>
    )
}