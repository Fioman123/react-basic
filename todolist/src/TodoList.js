import React, { Component, Fragment } from 'react';
import ToDoItem from './ToDoItem';
import Test from './Test';
import './style.css'; // 引用自己定义的样式,用引号来操作


class TodoList extends Component {
    // 构造函数,由于其他的函数先调用
    constructor(props) {
        super(props);
        // 定义这个组件的状态
        this.state = {
            inputValue: "我变了",
            list: []
        }
    }
    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor='inputArea'>输入内容:</label>
                    <input id='inputArea' className='input' value={this.state.inputValue} onChange={this.handleInputChange.bind(this)} />
                    <button onClick={this.handleBtnClick.bind(this)}>提交</button>
                </div>
                <ul>
                    {this.getTodoItem()}
                </ul>
                <Test content={this.state.inputValue}></Test>
            </Fragment>
        )
    }
    getTodoItem() {
        return this.state.list.map((item, index) => {
            // 使用map遍历的时候,最好是为每一项设置一个key值.
            return (
                <ToDoItem key={index} index={index} content={item} deleteItem={this.handleItemDelete.bind(this)} />
            )
        })
    }

    // 删除某一项
    handleItemDelete(index) {
        //immutable 
        // state 不允许我们做任何的直接的赋值改变
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index, 1);
            return { list }
        });
    }

    // 控制改变input框的状态
    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value,
        });
    }

    // 控制按钮的点击事件
    handleBtnClick(e) {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: '',
        });
    }
}

export default TodoList;