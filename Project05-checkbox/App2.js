
// const displayMessage = (isConfirmed, isFormSubmitted) => {
//     if (isFormSubmitted) {
//         if (isConfirmed) {
//             return <ValidationMessage txt="Możesz kupić pieska!" />
//         } else {
//             return <ValidationMessage txt="Nie możesz kupić pieska! Musisz mieć więcej niż 18 lat!" />
//         }
//     } else { return null }
// }

const ValidationMessage = (props) => {
    const { txt } = props
    return (
        <p>{txt}</p>
    )
}

const OrderForm = (props) => {
    const { submit, isConfirmed, change } = props;
    return (
        <form onSubmit={submit}>
            <input type="checkbox" id="age" onChange={change} checked={isConfirmed} />
            <label htmlFor="age">Mam co najmniej 18 lat</label>
            <br />
            <button type="submit">Kup bilet</button>
        </form>
    )
}

class TicketShop extends React.Component {
    state = {
        isConfirmed: false,
        isFormSubmitted: false,
    }

    handleCheckboxChange = () => {
        this.setState({
            isConfirmed: !this.state.isConfirmed,
            isFormSubmitted: false,

        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        console.log("działam")
        if (!this.state.isFormSubmitted) {
            this.setState({
                isFormSubmitted: true
            })
        }

    }
    displayMessage = () => {
        if (this.state.isFormSubmitted) {
            if (this.state.isConfirmed) {
                return <ValidationMessage txt="Możesz kupić pieska!" />
            } else {
                return <ValidationMessage txt="Nie możesz kupić pieska! Musisz mieć więcej niż 18 lat!" />
            }
        } else { return null }
    }

    render() {
        const { isConfirmed, isFormSubmitted } = this.state
        return (
            <>
                <h1>Kup Pieska</h1>
                <OrderForm
                    change={this.handleCheckboxChange}
                    submit={this.handleFormSubmit}
                    checked={isConfirmed}
                />
                {this.displayMessage()}
            </>
        )
    }
}

ReactDOM.render(<TicketShop />, document.getElementById('root'))