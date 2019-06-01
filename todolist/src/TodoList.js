import React, { Component, Fragment } from 'react';

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
                    <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)} />
                    <button onClick={this.handleBtnClick.bind(this)}>提交</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            // 使用map遍历的时候,最好是为每一项设置一个key值.
                            return <li key={index} onClick={this.handleItemDelete.bind(this,index)}>{item}</li>
                        })
                    }
                </ul>
            </Fragment>
        )
    }
    // 删除某一项
    handleItemDelete(index) {
        //immutable 
        // state 不允许我们做任何的直接的赋值改变
        const list = [...this.state.list];
        list.splice(index,1);
        this.setState({
            list:list
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