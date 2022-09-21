import React from "react";
import ReactDOM from "react-dom";
import './style.css'

class PortalsDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        // 正常渲染
        // return <div className="modal">
        //     {this.props.children}
        // </div>

        // 使用Portals渲染到body上
        // fixed元素要放在body上,有更好的浏览器兼容性
        return ReactDOM.createPortal(
            <div className="modal">{this.props.children}</div>,
            document.body
        )
    }

}

export default PortalsDemo