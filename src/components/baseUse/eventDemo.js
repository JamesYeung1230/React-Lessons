import React from "react";

class EventDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "demo",
      list: [
        {
          id: "1",
          title: "name-1",
        },
        {
          id: "2",
          title: "name-2",
        },
        {
          id: "3",
          title: "name-3",
        },
      ],
    };
    // 改变方法的this指向
    this.clickHandler1 = this.clickHandler1.bind(this);
  }
  render() {
    return (
        <>
            <p onClick={this.clickHandler1}>{this.state.name}</p>
            <p onClick={this.clickHandler2}>{this.state.name}</p>
            <a href="www.baidu.com" onClick={this.clickHandler3}>{this.state.name}</a>
            <ul>
                {
                    this.state.list.map(item => {
                        return <li onClick={this.clickHandler4(item.id)}>{item.title}</li>
                    })
                }
            </ul>
        </>
    )
  }
  clickHandler1() {
    this.setState({ name: "test" }); // this默认undefined，所以需要改变this指向
  }
  // 静态方法，this指向当前实例
  clickHandler2 = () => {
    this.setState({ name: "test" });
  }
  clickHandler3 = (ev) => {
    ev.preventDefault()
    ev.stopPropagation()

    console.log('event', ev); // 不是原生的event，是经react包装后的SyntheticEvent
    console.log('nativeEvent', ev.nativeEvent);// 是原生event

    console.log('target', ev.target);
    console.log('current target', ev.currentTarget);
    console.log('nativeEvent target', ev.nativeEvent.target);// 事件绑定的元素
    // document，！！！注意！！！：react17之后不再绑定到document上，而是绑定到root组件上，有利于多个react版本并存，例如微前端
    console.log('nativeEvent current target', ev.nativeEvent.currentTarget);
  }
  clickHandler4 = (id, ev) => {
    console.log('id', id);
    console.log('ev', ev);// 最后追加一个参数，可接收event
  }
}

export default EventDemo;
