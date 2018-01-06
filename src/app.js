console.log("app.js is running");

// SyntaxError: src/app.js: Adjacent JSX elements must be wrapped in an enclosing tag
// wrap the adjacent elements in a div => called 'wrapper div'
const template = (
  <div>
    <h1>Manjunatha D</h1>
    <p>Age: 23</p>
    <p>Location: Bengaluru</p>
  </div>
);
const appRoot = document.getElementById("app");

// takes 2 arguments => the JSX template to be rendered, and the element where you want to render it
ReactDOM.render(template, appRoot);

// To compile JSX using babel, run `babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch` in command line
// Babel presets are collections of plugins. Set presets so that you don't have to set each of those plugins
// The preset env consists of ES6/7/8 features
