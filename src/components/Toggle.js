import React from 'react';

const classes = {
	navbar: {
		display: 'flex',
		justifyContent: 'flex-end',
	},
	button: {
		width: '10vw',
	},
};

const Toggle = ({ toggleDisplay, enabled }) => {
	const buttonColor = enabled ? 'is-danger' : 'is-success';
	return (
		<div className="navbar is-black" style={classes.navbar}>
			<div className="navbar-item">
				<div
					className={`button is-rounded ${buttonColor}`}
					onClick={toggleDisplay}
					style={classes.button}
				>
					{enabled ? 'disable' : 'enable'}
				</div>
			</div>
		</div>
	);
};

export default Toggle;
