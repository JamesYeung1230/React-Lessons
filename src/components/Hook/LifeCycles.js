import { useState, useEffect } from "react"

function ClickCounter() {

    const [count, setCount] = useState(0)

    // 模拟的是 class 组件中的 DidMount 和 DidUpdate
    useEffect(() => {
        console.log('send an ajax request')
    })

    // 模拟的是 class 组件中的 DidMount
    useEffect(() => {
        console.log('send an ajax request at DidMount')
    }, [])

    // 模拟的是 class 组件中的 DidUpdate
    useEffect(() => {
        console.log('send an ajax request at DidUpdate')
    }, [count])

    // 模拟的是 class 组件中的 WillUnMount, 并不完全等同于 WillUnMount
    // props 发生变化,即更新也会执行
    // 准确的说: 返回的函数,会在下一次effect执行前执行
    /**
     * useEffect 中返回函数fn
     * useEffect 的依赖是 [], 组件销毁时执行fn, 等同于 WillUnMount
     * useEffect 无依赖或依赖其他 state ([a,b])时, 下一次执行useEffect之前会执行fn, 无论更新或卸载
     */
    useEffect(() => {
        let timer = window.setInterval(() => {
            console.log(new Date().getTime())
        })
        return () => {
            window.clearInterval(timer)
        }
    }, [])

    return <div>
        <p>你点击了{count}次</p>
        <button onClick={() => setCount(count + 1)}>点击</button>
    </div>
}

export default ClickCounter