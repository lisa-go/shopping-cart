export default function CartTotal({ cart }) {
    //totals everything in cart
    const total = cart.reduce((p, c) => {
        return p + c.price
    }, 0)

    return (
        <div id="totalContainer">
            <div className="totalQuantity">Items: {cart.length}</div>
            <div className="totalPrice">Total Price: {total} NX</div>
        </div>
    )
}