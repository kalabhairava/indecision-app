console.log("app.js is running");

// const template = <p>This is JSX from app.js</p>;
var template = React.createElement("p", null, "Boom ");
const appRoot = document.getElementById("app");

// takes 2 arguments => the JSX template to be rendered, and the element where you want to render it
ReactDOM.render(template, appRoot);
