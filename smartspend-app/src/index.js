import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Import the consolidated styles for the entire application
import './styles/global.css'; 
import './styles/pages.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);