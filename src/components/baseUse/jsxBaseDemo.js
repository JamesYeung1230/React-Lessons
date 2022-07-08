import React from "react";

class JSXBaseDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "base demo",
            img: '../../logo.svg',
            flag: true
        }
    }

    render() {
        // 获取变量 插值
        const pEl = <p>{this.state.name}</p>

        // 原生HTML
        const rowHTML = '<p><span>test content</span><i>i tag</i><b>b tag</b></p>'
        const rowHTMLData = {
            __html: rowHTML // 注意： 必须是这种写法
        }

        return <>
            {pEl}
            <div dangerouslySetInnerHTML={rowHTMLData}></div>
            <div>{rowHTML}</div>
        </>
    }
}

export default JSXBaseDemo