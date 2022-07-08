import React from "react";

class ConditionDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            theme: 'black'
        }
    }
    render() {
        const blackBtn = <button>Black Button</button>
        const whiteBtn = <button>white Button</button>
        if (this.state.theme === 'black') {
            return whiteBtn
        } else {
            return blackBtn
        }
    }
}

export default ConditionDemo