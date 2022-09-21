import React from "react";

class UncontrolledDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'abc',
            flag: true
        }
        this.nameInputRef = React.createRef() // 创建ref
        this.fileInputRef = React.createRef()
    }
    render() {
        // return <div>
        //     {/* 使用defaultValue 而不是value,使用ref */}
        //     <input defaultValue={this.state.name} ref={this.nameInputRef} />
        //     {/* state并不会随着改变 */}
        //     <span>state.name: {this.state.name}</span>
        //     <br />
        //     <button onClick={this.alertName}>alert name</button>
        // </div>

        // return <div>
        //     <input type="checkbox" defaultChecked={this.state.flag} />
        // </div>

        return <div>
            <input type="file" ref={this.fileInputRef} />
            <button onClick={this.alertFile}>alert file</button>
        </div>
    }

    alertName = () => {
        const elem = this.nameInputRef.current
        alert(elem.value)
    }
    alertFile = () => {
        const elem = this.fileInputRef.current
        alert(elem.files[0].name)
    }
}

export default UncontrolledDemo