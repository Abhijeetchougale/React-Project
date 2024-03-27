// const heading = React.createElement("h1", {id:"head"}, "Hello React world!");

const parent = React.createElement(
    "div",
    { id: 'PARENT' },
    [
        React.createElement('div',
        { id: 'child1' },
        [React.createElement('h1', {}, "Iam H1"),
         React.createElement('h2', {}, "Iam H2")
        ]
    ),
    React.createElement('div',
    { id: 'child2' },
    [React.createElement('h1', {}, "Iam H1"),
     React.createElement('h2', {}, "Iam H2")
    ]
)
    ]
   );

console.log(parent)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent)


