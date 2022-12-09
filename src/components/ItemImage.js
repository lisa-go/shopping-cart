export default function ItemImage({ item }) {
    if (item.image == null) {
        item.image = 'https://maplestory.io/api/GMS/237/item/' + item.id + '/icon';
    }

    return (
        <img src={item.image} alt={item.id} />
    )
}