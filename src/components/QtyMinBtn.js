

export default function QtyMinBtn ({ crt, removeFromCart }) {

    return (
        <button key={crt.id} onClick={() => removeFromCart(crt)}>
            -
        </button>
    )
}