class UI {
	constructor() {
		 this.location = document.getElementById('w-location');
		 this.desc = document.getElementById('w-desc');
		 this.string = document.getElementById('w-string');
		 this.details = document.getElementById('w-details');
		 this.icon = document.getElementById('w-icon');
		 this.humidity = document.getElementById('w-humidity');
		 this.dewpoint = document.getElementById('w-dewpoint');
		 this.feelsLike = document.getElementById('w-feels-like');
		 this.wind = document.getElementById('w-wind');
	}

	paint (weather) {
		this.location.textContent = weather.display_location.full;
		this.desc.textContent = weather.weather;
		this.string.textContent = `${weather.temp_c} °C (${weather.temp_f} °F)`;
		this.icon.setAttribute('src', weather.icon_url);
		this.humidity.textContent = `Relative Humidity: ${weather.relative_humidity}`;
		this.dewpoint.textContent = `Dewpoint: ${weather.dewpoint_c} °C (${weather.dewpoint_f} °F)`;
		this.feelsLike.textContent = `Feels Like: ${weather.feelslike_c} °C (${weather.feelslike_f} °F)`;
		this.wind.textContent = `Wind: ${weather.wind_kph} kph`;
	}
}