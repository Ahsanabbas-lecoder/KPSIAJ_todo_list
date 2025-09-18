import React from 'react';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Box,
  Fab,
  List
} from '@mui/material';
import { Add } from '@mui/icons-material';
import TodoItem from '../TodoItem';

const TodoList = ({ todos, setTodos, newTodo, setNewTodo }) => {
  // Add a new todo
  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  // Handle key press for adding todo
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  // Toggle todo completion
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4, mb: 10 }}>
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center" color="primary">
          My Tasks
        </Typography>
        
        {/* Add Todo Input */}
        <Box sx={{ display: 'flex', mb: 2 }}>
          <TextField
            fullWidth
            variant="outlined"
            label="Add a new task"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyPress={handleKeyPress}
            sx={{ mr: 1 }}
          />
          <Fab color="primary" aria-label="add" onClick={addTodo} size="medium">
            <Add />
          </Fab>
        </Box>
        
        {/* Todo List */}
        {todos.length > 0 ? (
          <List>
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
              />
            ))}
          </List>
        ) : (
          <Typography variant="body1" align="center" sx={{ py: 3, color: 'text.secondary' }}>
            No tasks yet. Add a task to get started!
          </Typography>
        )}
      </Paper>
    </Container>
  );
};

export default TodoList;
