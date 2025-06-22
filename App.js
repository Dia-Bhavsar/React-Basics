import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement('div', { id: "parent" }, [
    React.createElement('div', { key: "child1" },
        [
            React.createElement('h1', { key: 'h1' }, "Hello Dia"),
            React.createElement('h2', { key: 'h2' }, "How are you?")
        ]
        ,
        React.createElement('div', { key: "child2" },
            [
                React.createElement('h1', { key: 'h3' }, "Namaste From India"),
                React.createElement('h2', { key: 'h4' }, "I am fine, thank you!")
            ]
        ))])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);