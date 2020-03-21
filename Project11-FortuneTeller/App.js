class FortuneTeller extends React.Component {
    state = {
        options: ["1", "2", "3"],
        text: null,
        value: ""
    }

    // static = {
    //     omen: [
    //         { id: 1, content: "Wróżba 1" },
    //         { id: 2, content: "Wróżba 2" },
    //         { id: 3, content: "Wróżba 3" },
    //     ]
    // }
    handleFortuneTeller = () => {
        const index = Math.floor(Math.random() * this.state.options.length)
        this.setState({
            text: this.state.options[index]
        })
    }
    handleInputChange = (event) => {
        this.setState({
            value: event.target.value,
        })
    }
    handleAddOption = () => {
        if (this.state.value === "") return alert('wpisz coś!')
        const options = [...this.state.options]
        options.push(this.state.value)
        this.setState({
            options,
            value: '',
        })
        alert(`Wróżba dodana. Aktualne wróżby:${options}`)

    }
    render() {
        return (
            <div>
                <button onClick={this.handleFortuneTeller}>Zobacz wróżbę</button>
                <br />
                <input type="text" value={this.state.value} onChange={this.handleInputChange} />
                <button onClick={this.handleAddOption}>Dodaj Wróżbę</button>
                {this.state.options ? <h1>{this.state.text}</h1> : null}
            </div>
        );
    }
}

ReactDOM.render(<FortuneTeller />, document.getElementById("root"))