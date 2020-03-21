const Header = (props) => {
    const activeItems = props.items.filter(item => item.active)
    const number = activeItems.length
    return (
        <header>
            <h1>Restauracja Lawendowy kosmos</h1>
            <h2>Zamówienie:{number}</h2>
            <h2>Do zapłaty: {number ? `${number * 10} złotych` : `0 złotych`} </h2>
        </header>
    )
}