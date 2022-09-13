/**
 * React <= 17 setState
 */

/**
 * setState
 * 不可变值
 * 可能是异步更新
 * 可能会被合并
 */

 import React, { useEffect, useState } from "react";

 class StateDemo extends React.Component {
     constructor(props) {
         super(props)
        //  第一,state要在构造函数中定义
         this.state = {
          count: 0
         }

        }
        render() {
          return <div>
            <p>{this.state.count}</p>
            <button onClick={this.increase}>add</button>
          </div>
        }

        increase = () => {
          /** 
           * 第二,不可以直接修改state,使用不可变数据
           * this.state.count++ 是错误的
           */
          // this.setState({count: this.state.count + 1})

          /**
           * 第三,setState可能是异步更新(也可能是同步更新)
           */
          // this.setState(
          //   {count: this.state.count + 1},
          //   () => {
          //     console.log('count in callback', this.state.count); // 回调函数,拿到最新的值
          //   }
          // )
          // console.log('count', this.state.count); // 异步更新,拿不到最新的值
          /** 
           * setTimeout中setState是同步的
           */
          // setTimeout(() => {
          //   this.setState({count: this.state.count + 1})
          //   console.log('count in setTimeout', this.state.count);
          // }, 0);
          /**
           * 在自定义的DOM事件中,setState是同步的
           */

          /**
           * 第四,state异步更新的话,更新前会被合并
           * 传入对象会被合并(类似Object.assgin).执行结果只一次 +1
           */
          //  this.setState({count: this.state.count + 1})
          //  this.setState({count: this.state.count + 1})
          //  this.setState({count: this.state.count + 1})
          /**
           * 传入函数不会被合并.执行结果是 +3
           */
          //  this.setState((prev, props) => {
          //    return {count: prev.count + 1}
          //  })
          //  this.setState((prev, props) => {
          //    return {count: prev.count + 1}
          //  })
          //  this.setState((prev, props) => {
          //    return {count: prev.count + 1}
          //  })
        }

        bodyClickHandler = () => {
          this.setState({count: this.state.count + 1})
          console.log('count in body click', this.state.count);
        }

        componentDidMount() {
          // 在自定义的DOM事件中,setState是同步的

          // document.body.addEventListener('click', this.bodyClickHandler)
        }
        componentWillUnmount() {
          // 及时销毁绑定事件

          // document.body.removeEventListener('click', this.bodyClickHandler)
        }
 }
 
 export default StateDemo

//  ================================我是分割线=============================================
// 不可变值(函数式编程,纯函数) - 数组
// const listCopy = this.state.list5.slice()
// listCopy.splice(2, 0, 'a') // 中间插入/删除
// this.setState({
//   list1: this.state.list1.concat(100), // 追加
//   list2: [...this.state.list2, 100], // 追加
//   list3: this.state.list3.slice(0, 3), // 截取
//   list4: this.state.list4.filter(item => item > 1), // 筛选
//   list5: listCopy // 其他操作
// })
// 注意: 不能直接对 this.state.list 进行push,pop,splice等操作,这样违反不可变值的原则

// 不可变值 - 对象
// this.setState({
//   obj1: Object.assign({}, this.state.obj1, {a: 1}),
//   obj2: {...this.state.obj2, a: 1}
// })
// 注意: 不能直接对 this.state.obj 进行属性设置,这样违反不可变值的原则

//  ================================我是另一个分割线=============================================

/**
 *  React <= 17 setState
 * React组件事件: 异步更新 + 合并state
 * DOM事件,setTimeout: 同步更新 + 不合并state
 */

/**
 * React 18 setState
 * React组件事件: 异步更新 + 合并state
 * DOM事件,setTimeout: 异步更新 + 合并state
 * Automatic Batching自动批处理
 */

/**
 * React <= 17: 只有React组件事件才批处理
 * React 18: 所有事件都自动批处理 Automatic Batching
 */

function useStateDemo() {
  const [value, setValue] = useState(0)
  function clickHandler() {
    // // 合并state
    // setValue(value + 1)
    // setValue(value + 1)
    // setValue(value + 1)
    // console.log(value); // 异步更新

    // setTimeout(() => {
    //   // 合并state
    //   setValue(value + 1)
    //   setValue(value + 1)
    //   setValue(value + 1)
    //   console.log(value); // 异步更新
    // }, 0);
  }
  useEffect(() => {
    document.getElementById('btn2').addEventListener('click', () => {
      // 合并state
      setValue(value + 1)
      setValue(value + 1)
      setValue(value + 1)
      console.log(value); // 异步更新
    })
  })
  return <div>
    <span>{value}</span>
    <button onClick={clickHandler}>add1</button>
    <button id="btn2">add2</button>
  </div>
}
