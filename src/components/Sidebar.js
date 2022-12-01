

export default function Sidebar({ retrieveItems }) {

    return (
        <div id="Sidebar">
            <button onClick={() => retrieveItems('Hat')}>Hat</button>
            <button onClick={() => retrieveItems('Overall')}>Overall</button>
            <button onClick={() => retrieveItems('Top')}>Top</button>
            <button onClick={() => retrieveItems('Bottom')}>Bottom</button>
            <button onClick={() => retrieveItems('Glove')}>Glove</button>
            <button onClick={() => retrieveItems('Shoes')}>Shoes</button>
            <button onClick={() => retrieveItems('Cape')}>Cape</button>
        </div>
    )
}