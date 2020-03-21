
const PositiveMessage = () => <p>Możesz oberzeć film. Zapraszamy!</p>
const NegativeMessage = () => <p>Nie możesz obejrzeć tego filmu jeśli masz mniej niż 16 lat!</p>

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
        if (!this.state.isFormSubmitted) {
            this.setState({
                isFormSubmitted: true
            })
        }
    }
    displayMessage = () => {
        if (this.state.isFormSubmitted) {
            if (this.state.isConfirmed) {
                return <PositiveMessage />
            } else {
                return <NegativeMessage />
            }
        } else { return null }
    }
    render() {
        // console.log(this.state.isConfirmed);
        return (
            <>
                <h1>Kup bilet na horror roku! It Chapter Two!!</h1>
                <form onSubmit={this.handleFormSubmit}>
                    <input type="checkbox" id="age" onChange={this.handleCheckboxChange} checked={this.state.isConfirmed} />
                    <label htmlFor="age">Mam co najmniej 16 lat</label>
                    <br />
                    <button type='submit'>Kup bilet</button>
                </form>
                {this.displayMessage()}
            </>
        )
    }
}

ReactDOM.render(<TicketShop />, document.getElementById('root'))