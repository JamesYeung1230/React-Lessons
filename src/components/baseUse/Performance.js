/**
 * React 性能优化
 * 1. shouldComponentUpdate 简称 SCU
 * 2. PureComponent 和 React.memo
 * 3. 不可变值 immutable.js
 */
import React from "react";

class LazyDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    // SCU
    // React 默认: 父组件有更新, 子组件则无条件也更新, (SCU默认会返回true)
    // SCU 不一定每次都要使用, 需要的时候才优化
    // SCU 必须配合不可变值使用
    shouldComponentUpdate(nextProps, nextState) {
        if (nextState !== this.state.count) {
            return true // 可以渲染
        } else {
            return false // 不重复渲染
        }
    }

    render() {
        return <div>
        </div>
    }
}

// export default LazyDemo

// PureComponent(纯组件), SCU中实现了浅比较
// memo, 函数组件中的PureComponent
// 浅比较已适用大部分情况，尽量不要做深比较

// PureComponent
class LazyDemoCopy extends React.PureComponent {}

// memo
function MyComponent(props) {
    /**
     * 使用props渲染
     */
}

function areEqual(prevProps, nextProps) {
    /**
     * 如果把nextProps传入render方法的返回结果与
     * 将prevProps传入render方法的返回结果一致则返回true,
     * 否则返回false
     */
}

// export default React.memo(MyComponent, areEqual)

// immutable.js
// 彻底拥抱'不可变值'
// 基于共享数据(不是深拷贝), 速度好
// 有一定的学习和迁移成本, 按需使用
// const map1 = Immutable.Map({a: 1, b: 2, c: 3})
// const map2 = map1.set('b', 50)
// map1.get('b') // 2
// map2.get('b') // 50