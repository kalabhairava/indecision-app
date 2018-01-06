"use strict";

var userName = "Manjunatha D";
var userAge = 23;
var userLocation = "Bengaluru";

// JSX Expresssions
// Wrap them in a pair of moustaches => {userName}
// They are just JavaScript expressions. You can do something like {userName.toUppercase() + !}, etc

// SyntaxError: src/app.js: Adjacent JSX elements must be wrapped in an enclosing tag
// wrap the adjacent elements in a div => called 'wrapper div'
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    userName
  ),
  React.createElement(
    "p",
    null,
    "Age: ",
    userAge
  ),
  React.createElement(
    "p",
    null,
    "Location: ",
    userLocation
  )
);

// You cannot render a object in JSX. React wouldn't know what to do with an object
// However, you can render object properties inside JSX expressions

var appRoot = document.getElementById("app");

// takes 2 arguments => the JSX template to be rendered, and the element where you want to render it
ReactDOM.render(template, appRoot);

// To compile JSX using babel, run `babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch` in command line
// Babel presets are collections of plugins. Set presets so that you don't have to set each of those plugins
// The preset env consists of ES6/7/8 features
