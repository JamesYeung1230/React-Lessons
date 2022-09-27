import React from 'react';

class ClickCount extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }
    render() {
        return <div>
            <p>click count: {this.state.count}</p>
            <button onClick={this.handleClick}>click</button>
        </div>
    }

    handleClick() {
        this.setState({count: this.state.count + 1})
    }
}
export default ClickCount