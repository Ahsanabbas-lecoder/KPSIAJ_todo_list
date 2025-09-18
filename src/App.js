import React, { useState, useEffect } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import Header from './components/header';
import Footer from './components/footer';
import TodoList from './components/todo-list';
import { createAppTheme } from './theme';

function App() {
  // State for todos
  const [todos, setTodos] = useState([]);
  // State for new todo input
  const [newTodo, setNewTodo] = useState('');
  // State for dark mode
  const [darkMode, setDarkMode] = useState(false);
  // State for bottom navigation
  const [navValue, setNavValue] = useState(0);

  // Load todos from localStorage on initial render
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
    
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode));
    }
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Save dark mode preference to localStorage
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  // Create theme based on dark mode state
  const theme = createAppTheme(darkMode ? 'dark' : 'light');

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <TodoList 
          todos={todos} 
          setTodos={setTodos} 
          newTodo={newTodo} 
          setNewTodo={setNewTodo} 
        />
        <Footer navValue={navValue} setNavValue={setNavValue} />
      </div>
    </ThemeProvider>
  );
}

export default App;