import React from 'react';
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Checkbox,
  IconButton
} from '@mui/material';
import { Delete } from '@mui/icons-material';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <ListItem divider>
      <Checkbox
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        color="primary"
      />
      <ListItemText
        primary={todo.text}
        sx={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          color: todo.completed ? 'text.secondary' : 'text.primary'
        }}
      />
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => deleteTodo(todo.id)}
        >
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TodoItem;