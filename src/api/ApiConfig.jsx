const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5';
const WEATHER_API_KEY = '68728f0d80eed1f5ba4bf7e35e080760';

export async function fetchWeatherData(lat, lon) {

    try {

        let [weatherPromise, forcastPromise] = await Promise.all([

            fetch(

            `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`

            ),

            fetch(

            `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`

            ),

        ]);

        const weatherResponse = await weatherPromise.json();

        const forcastResponse = await forcastPromise.json();

        return [weatherResponse, forcastResponse];

    } catch (error) {

        console.log(error);

    }
    
}