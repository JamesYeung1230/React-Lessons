import { useState, memo,  useMemo } from "react"

/**
 * useMemo
 * React 默认会更新所有子组件
 * class 组件使用 SCU 和 PureComponent 做优化
 * Hooks 中使用 useMemo，但优化原理相同
 */

// function Child({ userInfo }) {
//     console.log('Child render...', userInfo)
//     return (
//         <div>
//             <p>This is Child {userInfo.name} {userInfo.age}</p>
//         </div>
//     )
// }

// memo() 类似于 class 组件中的 PureComponent，会对 props 进行浅层对比
const Child = memo(({ userInfo }) => {
    console.log('Child render...', userInfo)
    return (
        <div>
            <p>This is Child {userInfo.name} {userInfo.age}</p>
        </div>
    )
})

function UseMemoDemo() {
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
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>change</button>
            <Child userInfo={userInfo} />
        </div>
    )
}

export default UseMemoDemo
