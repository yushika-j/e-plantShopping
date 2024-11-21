import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // Importing global styles
import { Provider } from 'react-redux'; // Importing Provider for Redux
import store from './store.js'; // Importing the Redux store

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> {/* Wrapping App with Redux Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);
