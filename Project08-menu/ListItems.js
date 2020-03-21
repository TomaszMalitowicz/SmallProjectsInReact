const ListItems = (props) => {
    const items = props.items.map(item => (
        <Item
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            active={item.active}
            changeStatus={props.changeStatus}
        />
    ))
    // console.log(items);
    return (
        <div className="list">
            < h1 > Twoje zamówienie:</h1 >
            <ul>
                {items}
            </ul>
        </div>
    )
}