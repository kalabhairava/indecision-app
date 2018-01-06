"use strict";

var app = {
  title: "Indecision App",
  subtitle: "Put yourself in the hands of a computer",
  options: ["One", "Two"]
};

var appTemplate = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title ? app.title : "Anonymous App"
  ),
  app.subtitle && React.createElement(
    "p",
    null,
    app.subtitle
  ),
  getOptions(),
  React.createElement(
    "ul",
    null,
    React.createElement(
      "li",
      null,
      app.options[0]
    ),
    React.createElement(
      "li",
      null,
      app.options[1]
    )
  )
);

function getOptions(options) {
  if (options && options.length > 0) return React.createElement(
    "p",
    null,
    "Here are your options"
  );
}

var user = {
  name: "Manjunatha D",
  age: 17,
  location: "Bengaluru"
};

var userTemplate = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name ? user.name : "Anonymous"
  ),
  user.age >= 18 && React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  getLocation(user.location)
);

// Conditional rendereing => call a function inside JSX expression, have all the conditional logic inside that function
function getLocation(location) {
  return location && React.createElement(
    "p",
    null,
    user.location
  );
}

var appRoot = document.getElementById("app");

ReactDOM.render(appTemplate, appRoot);

// You can have JSX expressions inside a pair of curly braces
// If the JSX expression evaluates to `undefined`, null, or boolean, it will be removed from the DOM (kind of ng-if)
// You can use ternary operator directly inside JSX expressions
// undefined, null, and boolean values are ignored by JSX

// If you use an undefined variable inside JSX template, the whole template won't show up. Why??

// -------------------------------------------------------------------------------
// Condition Rendering
//
// 1. Use ternary operator direcly inside JSX expression // handling user.name
// 2. Call a function inside JSX expression, return JSX template conditionally // handling user.location
// 3. Use logical AND (&&) // handling user.age
//
// Ternary operator is good when you want to do two things, logical AND is good when you want to do one thing,
// functions are good when you want to do things based on multiple things
// -------------------------------------------------------------------------------
