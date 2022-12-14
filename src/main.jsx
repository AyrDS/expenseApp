import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { ExpensesProvider } from './context/ExpensesContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ExpensesProvider>
      <App />
    </ExpensesProvider>
  </React.StrictMode>
)
