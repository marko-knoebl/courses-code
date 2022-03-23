import { Box, Button } from "@mui/material";
import classNames from "classnames";
import { Component } from "react";
import { Todo } from "./Todo";

import "./TodoItem.css";

type Props = {
  todo: Todo;
  onDelete: (id: number) => void;
  onChangeCompleted: (id: number, completed: boolean) => void;
};
type State = {};

class TodoItem extends Component<Props, State> {
  render() {
    return (
      <li
        key={this.props.todo.id}
        className={classNames({
          todoitem: true,
          completed: this.props.todo.completed,
          incomplete: !this.props.todo.completed,
          longtitle: this.props.todo.title.length > 25,
        })}
      >
        {/* flexbox - siehe https://css-tricks.com/snippets/css/a-guide-to-flexbox/ */}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              width: 400,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
            }}
          >
            <div>
              <input
                type="checkbox"
                checked={this.props.todo.completed}
                onChange={(event) =>
                  this.props.onChangeCompleted(
                    this.props.todo.id,
                    event.target.checked
                  )
                }
              />
              {this.props.todo.completed ? "DONE" : "TODO"}:{" "}
              {this.props.todo.title}
            </div>
            <Button
              onClick={() => this.props.onDelete(this.props.todo.id)}
              color="secondary"
            >
              delete
            </Button>
          </Box>
        </Box>
      </li>
    );
  }
}

export default TodoItem;
