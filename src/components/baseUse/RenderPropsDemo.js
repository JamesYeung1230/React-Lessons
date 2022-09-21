/**
 * Render Props
 * 通过一个函数将 class 组件的 state 作为 props 传递给纯函数组件
 */

import React from "react";

class Factory extends React.Component {
    constructor() {
        this.state = {
            // state 即多个组件的公共逻辑的数据
        }
    }
    render() {
        // 修改 state
        return <div>{this.props.render(this.state)}</div>
    }
}

const App = () => {
    <Factory render={
        // render 是一个函数组件
        (props) => <p>{props.a} {props.b} ...</p>
    } />
}

export default App

/**
 * HOC vs Render Props
 * HOC: 模式简单,但会增加组件层级
 * Render Props: 代码简洁,学习成本较高
 * 按需使用
 */