import React from "react";

// 创建 Context, 填入默认值(任何一个js变量)
const ThemeContext = React.createContext('light')

// 底层组件 - 函数式组件
function ThemeLink(props) {
    // const theme = this.context // 会报错, 函数式组件没有实例,即没有this
    // 函数式组件使用 Consumer
    return <ThemeContext.Consumer>
        {value => <p>link`s theme is {value}</p>}
    </ThemeContext.Consumer>
}

// 底层组件 - class组件
class ThemeButton extends React.Component {
    // 指定 contextType 读取当前的 theme context
    // static contextType = ThemeContext // 也可以使用 ThemeButton.contextType = ThemeContext
    render() {
        const theme = this.context // React会向上寻找到最近的theme Provider
        return <div>
            <p>button`s theme is {theme}</p>
        </div>
    }
}

ThemeButton.contextType = ThemeContext // 指定 contextType 读取当前的 theme context

function Toolbar(props) {
    return <div>
        <ThemeButton />
        <ThemeLink />
    </div>
}

class ContextDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            theme: 'light'
        }
    }
    render() {
        return <ThemeContext.Provider value={this.state.theme}>
            <Toolbar />
            <hr />
            <button onClick={this.changeTheme}>change theme</button>
        </ThemeContext.Provider>
    }
    changeTheme = () => {
        this.setState({
            theme: this.state.theme === 'light' ? 'dark' : 'light'
        })
    }

}

export default ContextDemo