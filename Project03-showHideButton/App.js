class Message extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            messageIsActive: false
        }
        this.handleMessageButton = this.handleMessageButton.bind(this)
    }

    handleMessageButton() {
        this.setState({
            messageIsActive: !this.state.messageIsActive
        })
    }
    render() {
        console.log(this.state.messageIsActive);
        const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Et amet unde minus mollitia necessitatibus natus dolor cumque saepe nostrum cum.Porro, eos corrupti beatae architecto voluptatum facilis dolorum quas autem.'
        return (
            <React.Fragment>
                <button onClick={this.handleMessageButton}>
                    {this.state.messageIsActive ? 'Hide' : 'Show'}
                </button>
                {this.state.messageIsActive ? <p>{text}</p> : null}
                {/* <p>{this.state.messageIsActive && text}</p> */}
            </React.Fragment>
        )
    }
}
ReactDOM.render(<Message />, document.getElementById('root'))