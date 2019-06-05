import React, { Component } from 'react'

class ToDoItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    render() {
        const { content } = this.props;
        return <div onClick={this.handleClick}>{content}</div>
    }

    handleClick() {
        // alert(this.props.index);
        const { deleteItem, index } = this.props;
        deleteItem(index);
    }
}
export default ToDoItem;