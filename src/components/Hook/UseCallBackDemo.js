import { useMemo } from "react"
import { useCallback } from "react"
import { useState } from "react"
import { memo } from "react"

/**
 * useCallBack
 * useMemo 缓存数据
 * useCallBack 缓存函数
 * 两者是 React Hooks 的常见优化策略
 */

const Child = memo(({ userInfo, onChange }) => {
    console.log('Child render...', userInfo)
    return (
        <div>
            <p>This is Child {userInfo.name} {userInfo.age}</p>
            <input onChange={onChange} />
        </div>
    )
})

function UseCallBackDemo() {
    console.log('Parent render...')
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    // const userInfo = {
    //     name,
    //     age: '21'
    // }
    const userInfo = useMemo(() => {
        return {name, age: '22'}
    }, [name])

    // const childChangeHandler = (e) => {
    //     console.log(e.target.value)
    // }

    const childChangeHandler = useCallback((e) => {
        console.log(e.target.value)
    }, [])

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>change</button>
            <Child userInfo={userInfo} onChange={childChangeHandler} />
        </div>
    )
}

export default UseCallBackDemo
