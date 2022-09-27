import React, { useContext } from 'react'

const Themes = {
    light: {
        bgColor: '#FFFFFF',
        color: '#000000'
    },
    dark: {
        bgColor: '#000000',
        color: '#FFFFFF'
    }
}

// 创建context
const ThemeContext = React.createContext(Themes.light)

function ThemeButton() {
    const theme = useContext(ThemeContext)

    return (
      <button style={{ backgroundColor: theme.bgColor, color: theme.color }}>change theme</button>
    )  
}

function ToolBar() {
    return (
      <div>
        <ThemeButton />
      </div>
    )
}

function UseContextDemo() {


    return (
        <ThemeContext.Provider value={Themes.dark}>
            <ToolBar />
            {/* <ThemeButton /> */}
        </ThemeContext.Provider>
    )
}

export default UseContextDemo