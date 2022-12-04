

export default function CartPrices({ crt, cart }) {

    //* find duplicates in array *//
    function countInArray(array, value) {
        return array.reduce((n, x) => n + (x === value), 0);
    }
    crt.quantity = countInArray(cart,crt);

    crt.tprice = crt.quantity * crt.price;

    return (
        <div className="priceContainer">
            <div className="cartQuantity">Qty: {crt.quantity}</div>
            <div className="cartPrice">Unit Price: {crt.price} NX</div>
            <div className="cartTprice">Total Price: {crt.tprice} NX</div>
        </div>
    )
}