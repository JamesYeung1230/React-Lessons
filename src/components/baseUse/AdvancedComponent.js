/**
 * 关于组件公共逻辑的抽离
 * 1. mixin, 已被React弃用
 * 2. 高阶组件HOC(High Order Component)
 * 3. Render Props
 */

import React from "react"

/**
 * 高阶组件 基本用法
 */
// 高阶组件不是一种功能,而是一种模式
const HOCFactory = (Component) => {
    class HOC extends React.Component {
        // 在此定义多个组件的公共逻辑
        render() {
            return <Component {...this.props} /> // 返回拼装的结果
        }
    }
    return HOC
}

// const EnhancedComponent1 = HOCFactory(WrappedComponent1)
// const EnhancedComponent2 = HOCFactory(WrappedComponent2)

// demo
const withMouse = (Component) => {
    class withMouseComponent extends React.Component {
        constructor(props) {
            super(props)
            this.state = {x: 0, y: 0}
        }

        handleMouseMove = (ev) => {
            this.setState({x: ev.clientX, y: ev.clientY})
        }

        render() {
            return (
                <div style={{height: '500px'}} onMouseMove={this.handleMouseMove}>
                    {/* 1. 透传所有props, 2. 增加mouse属性 */}
                    <Component {...this.props} mouse={this.state} />
                </div>
            )
        }
    }

    return withMouseComponent
}

const App = (props) => {
    const {x, y} = props.mouse // 接收mouse属性
    return (
        <div style={{height: '500px'}}>
            <h1>The mouse position is ({x}, {y})</h1>
        </div>
    )
}

export default withMouse(App) // 返回高阶组件