import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import TodoItem from "./TodoItem";

export default {
  title: "TodoItem",
  component: TodoItem,
  decorators: [withKnobs],
};

export const incompleteTodo = () => (
  <TodoItem
    title="abc"
    completed={false}
    onDelete={() => {}}
    onToggle={() => {}}
  />
);

export const completedTodo = () => (
  <TodoItem
    title="def"
    completed={true}
    onDelete={() => {}}
    onToggle={() => {}}
  />
);

export const triggerToggle = () => {
  return (
    <TodoItem
      title="abc"
      completed={true}
      onDelete={() => {}}
      onToggle={action("toggle triggered")}
    />
  );
};

export const variableProps = (args: any) => {
  return (
    <TodoItem
      title={args.title}
      completed={args.completed}
      onDelete={() => {}}
      onToggle={() => {}}
    />
  );
};
variableProps.args = { title: "abc", completed: false };
