class Form extends React.Component {
  state = {
    city: "Lądek-Zdrój",
    text: "",
    isLiked: true,
    number: "1",
  }

  handleChange = (event) => {
    console.log(event.target.type)
    if (event.target.type === "checkbox") {
      this.setState({
        [event.target.name]: event.target.checked
      })
    } else {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  }

  // handleCityChange = (event) => {
  //   this.setState({
  //     city: event.target.value,
  //   })
  // }
  // handleTextChange = (event) => {
  //   this.setState({
  //     text: event.target.value,
  //   })
  // }
  // handleIsLikedChange = (event) => {
  //   this.setState({
  //     isLiked: event.target.checked,
  //   })
  // }
  // handleVisitsNumberChange(event) {
  //   this.setState({
  //     number: event.target.value,
  //   })
  // }
  render() {
    return (
      <div>
        <label>
          Podaj miast
            <input name="city" value={this.state.city} onChange={this.handleChange} type="text" />
        </label>
        <br />
        <label>
          Napisz coś o tym mieście
          <textarea name="text" value={this.state.text} onChange={this.handleChange}></textarea>
        </label>
        <br />
        <label>
          Czy lubisz to miasto ?
          <input name="isLiked" type="checkbox" checked={this.state.isLiked}
            onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Ile razy byłes w tym mieście?
          <select name="number" value={this.state.number} onChange={this.handleChange}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="more">więcej</option>
          </select>
        </label>
      </div>);
  }
}

ReactDOM.render(<Form />, document.getElementById("root"))