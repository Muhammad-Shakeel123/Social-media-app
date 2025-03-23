import { StrictMode } from 'react'; // Importing StrictMode (optional)
import { createRoot } from 'react-dom/client'; // Importing createRoot
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <App />, // ✅ Correct usage of createRoot
);
