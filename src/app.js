import React from 'react';
import ReactDOM from 'react-dom';

const app = {
	title: 'Indecision App',
	subtitle: 'Put yourself in the hands of a computer',
	options: ['One', 'Two']
};

const appTemplate = (
	<div>
		<h1>{app.title ? app.title : 'Indecision App'}</h1>
		{app.subtitle && <p>{app.subtitle}</p>}
		{getOptions()}
		<ul>
			<li>{app.options[0]}</li>
			<li>{app.options[1]}</li>
		</ul>
	</div>
);

function getOptions(options) {
	if (options && options.length > 0) return <p>Here are your options</p>;
}

const user = {
	name: 'Manjunatha D',
	age: 17,
	location: 'Bengaluru'
};

const userTemplate = (
	<div>
		<h1>{user.name ? user.name : 'Anonymous'}</h1>
		{user.age >= 18 && <p>Age: {user.age}</p>}
		{/* <p>Location: {getLocation(user.location)}</p> */}
		{getLocation(user.location)}
	</div>
);

// Conditional rendereing => call a function inside JSX expression, have all the conditional logic inside that function
function getLocation(location) {
	return location && <p>{user.location}</p>;
}

const appRoot = document.getElementById('app');

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
