import cartIcon from '../images/shopping_cart.svg';

export default function BuyBtn({ item, addToCart }) {

    return (
        <button key={item.id} className="buyBtn" onClick={() => addToCart(item)}>
            <img src={cartIcon} alt="cart" className="filter-bw" />
            Buy
        </button>
    )
}