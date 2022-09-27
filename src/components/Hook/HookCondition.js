/**
 * Hook 使用规范
 * 1. 只能用于 React 函数组件和自定义 Hook 中, 其他地方不可以
 * 2. 只能用于顶层代码, 不能在循环和判断中使用 Hook
 */

/**
 * 函数组件是纯函数, 执行完即销毁
 * 所以无论组件初始化(render)还是组件更新(re-render), 都会重新执行一次这个函数来获取最新的组件
 * 这一点和 class 组件不一样
 * 
 * 简述组件加载过程:
 * 1. render: 初始化 state 的值
 * 2. re-render: 读取 state 的值 (hook严格按照函数执行顺序进行, 以保证每次state拿到的值与定义时的顺序相同)
 * 
 * 1. render: 添加effect函数
 * 2. re-render: 替换effect函数, 内部的函数也会重新定义
 * 
 * 总结: 
 * 无论是render还是re-render, Hooks调用顺序必须一致
 * 如果Hooks出现在循环/判断里,则无法保证顺序一致
 * Hooks严重依赖于调用顺序
 */

/**
 * React Hooks 组件逻辑复用
 * class:
 * 1. mixin(已废弃)
 * 缺点: 
 * 变量作用域来源不清
 * 属性重名
 * mixins引入过多会导致顺序冲突
 * 2. HOC
 * 缺点:
 * 组件层级嵌套过多,不易渲染, 不易调试
 * HOC会劫持props, 必须严格规范,容易出现疏漏
 * 3. Render Props
 * 缺点:
 * 学习成本高,不易理解
 * 只能传递纯函数,而默认情况下纯函数功能有限
 */

/**
 * Hooks 做组件逻辑复用的好处
 * 完全符合 Hooks 原有规则, 没有其他要求, 易于理解记忆
 * 变量作用域明确
 * 不会产生组件嵌套
 */

/**
 * React Hooks 注意事项
 * 1. useState 初始化值, 只有第一次有效, 只能用setState修改
 * 2. useEffect 内部不能修改state, 可以定义中间变量,先改变后setState, 但是打破了纯函数的规则, 推荐使用useRef作为中间变量
 * 3. useEffect 可能出现死循环
 */

/**
 * useEffect 依赖为 [] 时: re-render 不会重新执行 effect 函数
 * useEffect 没有依赖时: re-render 会重新执行 effect 函数
 * useEffect 的依赖中有引用数据类型时, 会引发死循环, 解决办法是将引用类型拆开
 * useEffect 在判断依赖是否变化时, 使用的是Object.is方法, 会始终认为依赖在变化
 */