import React, { Component } from "react";
import PropTypes from "prop-types";

import "./TodoItem.css";

class TodoItem extends Component {
  render() {
    // this.props.todo.id
    // this.props.todo.completed
    return (
      <li
        className={this.props.todo.completed ? "todo completed" : "todo"}
        onClick={() => {
          this.props.onToggle(this.props.todo.id);
        }}
      >
        {this.props.todo.completed ? "DONE:" : "TODO:"} {this.props.todo.title}
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }),
  onToggle: PropTypes.func
};

export default TodoItem;
