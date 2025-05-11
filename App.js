/*
ReactElement(onject)=> HTML(Browser understands)

*/

const heading = React.createElement(
    "h1",
    {id:"heading",xyz:"abc"},
    "Hello world from React!!!"
);
console.log(heading)//object-(rect element)
const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)


//Nested structure
const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
        React.createElement(
            "h1",
            {},
            "I'm h1 tag here!!")
    )
)

console.log(parent);
root.render(parent)

//Sibling structure
const parent1 = React.createElement(
    "div",
    {id:"parent"},
    React.createElement("div", {id:"child"},[
        React.createElement( "h1",{}, "I'm h1 tag here!!"),
        React.createElement( "h2",{}, "I'm h2 tag here!!")
    ]
    )
)
root.render(parent1)

//Multiple Nested

const parent2 = React.createElement(
    "div",
    {id:"parent"},
    React.createElement("div", {id:"child1"},[
        React.createElement( "h1",{}, "I'm h1 tag here!!"),
        React.createElement( "h2",{}, "I'm h2 tag here!!")
    ]
    ),
      React.createElement("div", {id:"child2"},[
        React.createElement( "h1",{}, "I'm h1 tag here!!"),
        React.createElement( "h2",{}, "I'm h2 tag here!!")
    ]
    )
)
root.render(parent2)