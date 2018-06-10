// Init weather obj
const weather = new Weather('Moscow', 'RU');
// Init UI
const ui = new UI;

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation('Miami', 'FL');

function getWeather() {
	weather.getWeather()
	.then((results) => {
		ui.paint(results);
	}).catch((err) => {
		console.log(err);
	});
}