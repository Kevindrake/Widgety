const apiKey = '0641705d9454b5aea687b2d6f0cda988'; //  API key
const city = 'Puerto Rico'; //  desired city

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {

        console.log(data);
        if (data.cod === '404') {
            throw new Error('City not found');
        }

        const weatherData = 
                '<p>City: ${data.name}</p>'
                '<p>Temperature: ${data.main.temp}°C</p>'
                '<p>Weather: ${data.weather[0].description}</p>';

        document.getElementById('weather-data').innerHTML = weatherData;
    })
    .catch((error) => {
        console.error('Error fetching weather data:', error);
        document.getElementById('weather-data').innerHTML = 'Error fetching weather data';
    });
