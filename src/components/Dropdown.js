import React from 'react'
import { Link } from "react-router-dom";

class Dropdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: "coconut" };

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	render() {
		return (
			<select value={this.state.value} onChange={this.handleChange} className='dropdown__container'>
				<option value="Restaurant" className='dropdown__content'>
					<Link className="placetop__links">Restaurant</Link>
				</option>
				<option value="Cottage">
					<Link className="placetop__links">Cottage</Link>
				</option>
				<option value="Castle">
					<Link className="placetop__links">Castle</Link>
				</option>
				<option value="fantasy city">
					<Link className="placetop__links">fantasy city</Link>
				</option>
				<option value="beach">
					<Link className="placetop__links">beach</Link>
				</option>
				<option value="Carbins">
					<Link className="placetop__links">Carbins</Link>
				</option>
				<option value="Off-grid">
					<Link className="placetop__links">Off-grid</Link>
				</option>
				<option value="Farm">
					<Link className="placetop__links">Farm</Link>
				</option>
			</select>
		);
	}
}

export default Dropdown
