const apiGetAllHotels = 'http://localhost/booking-list/api/test.php';

async function getHotelsFromServer() {
	try {
		let response = await fetch(apiGetAllHotels);
		let responseJson = await response.json();
		return responseJson;
	} catch (error) {
		console.error(error);
	}
}

export { getHotelsFromServer };