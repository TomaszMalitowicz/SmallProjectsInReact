class App extends React.Component {
    state = {
        availableProducts: 7,
        shoppingCart: 0,
    }

    handleRemoveFromCart = () => {
        this.setState({
            shoppingCart: this.state.shoppingCart - 1,
        })
    }
    handleAddToCart = () => {
        this.setState({
            shoppingCart: this.state.shoppingCart + 1,
        })
    }

    handleBuy = () => {
        this.setState({
            availableProducts: this.state.availableProducts - this.state.shoppingCart,
            shoppingCart: 0,
        })
        console.log("kupione!")
    }
    render() {
        const { shoppingCart, availableProducts } = this.state
        const grayStyleFor0 = shoppingCart === 0 ? { opacity: 0.3 } : {}
        return (
            <div>
                <button disabled={shoppingCart === 0 ? true : false} onClick={this.handleRemoveFromCart}>-</button>
                <span style={grayStyleFor0}> {shoppingCart} </span>
                <button disabled={shoppingCart === availableProducts ? true : false} onClick={this.handleAddToCart}>+</button>
                {shoppingCart > 0 && <button style={{ color: "green", width: "auto", marginLeft: "20px" }} onClick={this.handleBuy}> Kup</button>}
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'))