import React from "react";

class ListDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [
                {
                    id: '1',
                    title: 'name-1'
                },
                {
                    id: '2',
                    title: 'name-2'
                },
                {
                    id: '3',
                    title: 'name-3'
                },
            ]
        }
    }
    render() {
        return this.state.list.map(item => <p ket={item.id}>{item.title}</p>)
    }
}

export default ListDemo