class App extends React.Component {
    state = {
        value: ""
    }

    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({
            value: e.target.value
        })
    }

    handleClick = () => {
        this.setState({
            value: ""
        })
    }
    render() {
        return (
            <React.Fragment>
                <input value={this.state.value} placeholder="wpisz..." onChange={this.handleChange} type="text" />
                <button onClick={this.handleClick}>Reset</button>
                <h1 className='title'>{this.state.value.toLocaleUpperCase()}</h1>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))