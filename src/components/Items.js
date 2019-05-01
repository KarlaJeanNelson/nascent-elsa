import React, { Component } from 'react';
import Toggle from './Toggle';
import ItemDisplay from './ItemDisplay';
import Modal from './Modal';

export default class Items extends Component {
	state = {
		enabled: true,
		modal: false,
		items: 0,
	};

	toggleDisplay = () => {
		this.setState({
			enabled: !this.state.enabled,
		});
	};

	processItems = items => {
		this.setState({
			modal: true,
			items,
		});
	};

	closeModal = () => {
		this.setState({
			modal: false,
		});
	};

	render() {
		const { enabled, modal, items } = this.state;
		return (
			<div>
				<Toggle toggleDisplay={this.toggleDisplay} enabled={enabled} />
				<ItemDisplay enabled={enabled} processItems={this.processItems} />
				{modal && <Modal items={items} closeModal={this.closeModal} />}
			</div>
		);
	}
}
