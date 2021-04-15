import React from "react";
import { Typography } from "antd";
import { CloseCircleTwoTone } from "@ant-design/icons";
import { Checkbox, IconButton, ListItem } from "@material-ui/core";

const Todo: React.FC = ({ todo, toggleComplete, removeTodo }) => {
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  return (
    <ListItem style={{ display: "flex" }}>
      <Checkbox checked={todo.completed} onClick={handleCheckboxClick} />
      <Typography.Text>{todo.title}</Typography.Text>
      <IconButton onClick={handleRemoveClick}>
        <CloseCircleTwoTone />
      </IconButton>
    </ListItem>
  );
}

export default Todo;
