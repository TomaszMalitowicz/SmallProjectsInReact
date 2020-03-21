const data = {
    users: [
        {
            id: 1,
            age: 29,
            name: "Stasiu",
            sex: "male",
        },
        {
            id: 2,
            age: 18,
            name: "Kasia",
            sex: "female",
        },
        {
            id: 3,
            age: 26,
            name: "Ala",
            sex: "female",
        },
        {
            id: 4,
            age: 30,
            name: "Tomasz",
            sex: "male",
        },
    ]
}

const Item = ({ user }) => (
    <div className="UserInfo">
        <h1>{user.name}</h1>
        <p>Informacje o użytkowniku</p>
        <p>Wiek użytkownika <strong>{user.age}</strong></p>
        <p>Płeć użytkownika: {user.sex}</p>
    </div>
)
class ListItems extends React.Component {
    state = {
        select: "all",
    }

    handleUserFilter(option) {
        this.setState({
            select: option
        })
    }

    userList = () => {
        let users = this.props.data.users;
        switch (this.state.select) {
            case "all":
                return users.map((user) => <Item user={user} key={user.id} />)
            case "female":
                users = users.filter((user) => user.sex === "female");
                return users.map((user) => <Item user={user} key={user.id} />)
            case "male":
                users = users.filter((user) => user.sex === "male");
                return users.map((user) => <Item user={user} key={user.id} />)
            default:
                return "Brak danych"
        }
    }

    render() {

        return (
            <div>
                <button onClick={this.handleUserFilter.bind(this, "all")}>Pokaż wszystkich</button>
                <button onClick={this.handleUserFilter.bind(this, "female")}>Pokaż kobiety</button>
                <button onClick={this.handleUserFilter.bind(this, "male")}>Pokaż mężczyzn</button>
                {this.userList()}
            </div>
        )
    }
}


ReactDOM.render(<ListItems data={data} />, document.getElementById('root'))