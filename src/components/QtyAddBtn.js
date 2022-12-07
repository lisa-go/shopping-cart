

export default function QtyAddBtn ({ crt, addToCart }) {

    return (
        <button key={crt.id} onClick={() => addToCart(crt)}>
        +
        </button>
    )
}