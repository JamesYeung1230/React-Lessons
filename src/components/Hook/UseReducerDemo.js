import { useReducer } from "react";

/**
 * useReducer 和 redux 的区别
 * useReducer 是 useState 的代替方案，用于 state 复杂变化
 * useReducer 是单组件状态管理，组件通讯还需要props
 * redux 是全局状态管理，多组件共享数据
 */

const initialState = { count: 0 }

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1}

        case 'decrement':
            return { count: state.count - 1}
    
        default:
            return state;
    }
}

function UseReducerDemo() {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            count: {state}
            <button onClick={() => dispatch({ type: 'increment'})}>increment</button>
            <button onClick={() => dispatch({ type: 'decrement'})}>decrement</button>
        </div>
    )
}

export default UseReducerDemo