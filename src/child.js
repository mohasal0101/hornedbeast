import React from "react";


class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clickCounter: 0
        }
}

handleClick = () => {
    this.setState({
        clickCounter: this.state.clickCounter + 1
    })
}

render () {
    return (
        <>
            <h2> </h2>
            <img src={this.props.imageUrl} alt={this.props.title} />
            <p>{this.props.description}</p>
            <button onClick={this.handleClick}>Like</button>
            <p>💖{this.state.clickCounter}</p>
        </>
    )
}
}

export default Child;