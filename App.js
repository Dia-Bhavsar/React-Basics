const parent = React.createElement('div', { id: "parent" },
    React.createElement('div', { id: "child" },
        [React.createElement('h1', { id: "h1" }, "Hello Dia"),
        React.createElement('h1', { id: "h2" }, "How are you?"),
        ]
    )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);