import React from 'react';

const classes = {
	modalFoot: {
		display: 'flex',
		justifyContent: 'flex-end',
	},
};

const Modal = ({ items, closeModal }) => (
	<div className="modal is-active">
		<div className="modal-background" onClick={closeModal} />
		<div className="modal-card">
			<header className="modal-card-head">
				<p className="modal-card-title">Actual Item Count</p>
				<button className="delete" aria-label="close" onClick={closeModal} />
			</header>
			<section className="modal-card-body">
				<p>{`You have ${items} ${items === 1 ? 'item' : 'items'}.`}</p>
			</section>
			<footer className="modal-card-foot" style={classes.modalFoot}>
				<button className="button is-warning" onClick={closeModal}>
					Done
				</button>
			</footer>
		</div>
	</div>
);

export default Modal;
