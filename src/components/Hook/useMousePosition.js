import { useEffect } from "react"
import { useState } from "react"

/**
 * Hooks 做组件逻辑复用的好处
 * 完全符合 Hooks 原有规则, 没有其他要求, 易于理解记忆
 * 变量作用域明确
 * 不会产生组件嵌套
 */

function useMousePosition() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    useEffect(() => {
        function mouseMoveHandler(ev) {
            setX(ev.clientX)
            setY(ev.clientY)
        }
        document.body.addEventListener('mousemove', mouseMoveHandler)
        return () => {
            document.body.removeEventListener('mousemove', mouseMoveHandler)
        }
    }, [])

    return [x, y]
}

export default useMousePosition
