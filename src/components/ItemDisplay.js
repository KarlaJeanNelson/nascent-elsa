import React, { useState } from 'react';

const classes = {
	heroBody: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	buttonContainer: {
		display: 'flex',
		justifyContent: 'center',
		padding: '0.5rem',
	},
	button: {
		whiteSpace: 'nowrap',
		flex: '1 1 0',
		margin: '0.5rem',
		maxWidth: '200px',
	},
};

const ItemDisplay = ({ enabled, processItems }) => {
	const [items, setItems] = useState(0);
	const background = enabled ? 'is-primary' : 'is-grey';
	return (
		<div className={`hero is-fullheight-with-navbar ${background}`}>
			<div className="hero-head" />
			<div className="hero-body" style={classes.heroBody}>
				<div className="columns is-centered fullwidth">
					<div className="column" />
					<div className="column is-8">
						<div className="card">
							<div className="card-header">
								<div className="card-header-title is-centered is-size-3">
									Items: {items >= 10 ? '10+' : items.toString()}
								</div>
							</div>
							<footer className="tile is-12 " style={classes.buttonContainer}>
								<button
									className="button is-warning"
									disabled={!enabled}
									onClick={() => setItems(items + 1)}
									style={classes.button}
								>
									Add Item
								</button>
								<button
									className="button is-warning"
									disabled={!enabled}
									onClick={() => setItems(Math.max(0, items - 1))}
									style={classes.button}
								>
									Remove Item
								</button>
								<button
									className="button is-info"
									disabled={!enabled}
									onClick={() => processItems(items)}
									style={classes.button}
								>
									Process
								</button>
							</footer>
						</div>
						<div />
					</div>
					<div className="column" />
				</div>
			</div>

			<div className="hero-foot" />
		</div>
	);
};

export default ItemDisplay;
