/**
 * Redux使用
 * 和vuex作用相同, 但比vuex学习成本高
 * 不可变值, 纯函数
 * 面试常考
 */

/**
 * redux api
 * store
 * reducer
 * action
 * dispatch
 * 单向数据流模型
 * 中间件redux-thunk/redux-saga/redux-promise
 */

/**
 * react-redux api
 * provider
 * connect
 * mapStateToProps
 * mapDispatchToProps
 */

/**
 * 单向数据流概述
 * 1. dispatch(action)
 * 2. reducer -> newState
 * 3. subscribe 触发通知
 */

/**
 * react-redux
 * 1. <Provider>
 * 2. connect
 * 3. mapStateToProps mapDispatchToProps
 */

/**
 * 异步action
 */

// 同步action
// export const addTodo = (text) => {
//     // 返回 action 对象
//     return {
//         type: 'ADD_TODO',
//         id: nextTodoId++,
//         text
//     }
// }
// 异步action (需要使用中间件: 如redux-thunk, redux-promise, redux-saga)
// export const addTodoAsync = text => {
//     // 返回函数,其中有dispatch参数
//     return (dispatch) => {
//         // ajax异步获取数据
//         fetch(url).then(res => {
//             // 执行异步action
//             dispatch(addTodo(res.text))
//         })
//     }
// }