
const Person = (props) => {
  return (
    <li>
      <span>{props.name}</span>
      <button onClick={props.delete}>Usuń</button>
    </li>

  )
}

class DeleteListElement extends React.Component {

  state = {
    people: [
      { id: 10, name: "Jan K." },
      { id: 20, name: "Piotr C." },
      { id: 30, name: "Maria A." },
      { id: 40, name: "John S." },
    ]
  }

  handleDelete(id) {
    const people = [...this.state.people];
    const index = people.findIndex(person => person.id === id)
    people.splice(index, 1)
    this.setState({
      people
    })
  }

  render() {
    const people = this.state.people.map(person => (
      <Person
        key={person.id}
        name={person.name}
        delete={this.handleDelete.bind(this, person.id)}
      />
    )
    )
    return (
      <ul>
        {people}
      </ul>
    )
  }
}

ReactDOM.render(<DeleteListElement />, document.getElementById("root"))