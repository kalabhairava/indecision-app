import React from 'react';

const Header = props => (
	<div class="header">
		<h1 class="header__title"> {props.title} </h1>
		<h3 class="header__subtitle"> {props.subtitle} </h3>
	</div>
);

export default Header;
