

export default function ItemImage({ itemid }) {
    const imageSource = 'https://maplestory.io/api/GMS/237/item/' + itemid + '/icon';
    return (
        <img src={imageSource} />
    )
}