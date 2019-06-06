import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
ToDoItem.propTypes = {
    test: PropTypes.string.isRequired, 
    //设定是支持两种数据格式的写法
    content: PropTypes.oneOfType(PropTypes.number,PropTypes.string),
    deleteItem: PropTypes.func,
    index: PropTypes.number,
}
ToDoItem.defaultProps = {
    test: 'hello world',
}
export default ToDoItem;