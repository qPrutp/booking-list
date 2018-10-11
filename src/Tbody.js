import React, { Component } from 'react';
class Tbody extends Component {

	render() {
		return (
			<tbody>
				{this.props.hotels.map(hotel => {
					return (
							<tr key={hotel.hotel_id}>
								<td>{hotel.name}</td>
								<td>{hotel.address}</td>
								<td>{hotel.price}</td>
							</tr>
						);
					})
				}
			</tbody>
		);
	}
}

export default Tbody