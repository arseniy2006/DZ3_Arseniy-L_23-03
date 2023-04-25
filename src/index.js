import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
export default {
    plugins: [
        // убрать плагин, если он был добавлен
    ]
}