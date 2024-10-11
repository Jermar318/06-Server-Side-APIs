### Weather Dashboard

## Overview

The Weather Dashboard is a web application that allows users to view the current and future weather conditions for multiple cities. By leveraging the OpenWeather API, the application provides dynamically updated weather data, including temperature, humidity, wind speed, and weather conditions. Users can search for cities, view detailed weather forecasts, and store their search history for easy access.

## Features

- **Current Weather Conditions**: Displays the city name, date, weather icon, temperature, humidity, and wind speed.
- **5-Day Forecast**: Provides a 5-day weather forecast with date, weather icon, temperature, wind speed, and humidity.
- **Search History**: Stores and displays a list of previously searched cities for quick access.
- **Responsive Design**: Ensures a seamless user experience across different devices and screen sizes.

## Usage

To use the Weather Dashboard, follow these steps:

1. **Search for a City**: Enter the name of a city in the search bar and click the search button.
2. **View Weather Data**: The current weather conditions and 5-day forecast for the searched city will be displayed.
3. **Access Search History**: Click on any city in the search history to view its weather data again.

## API Integration

The application uses the [5 Day Weather Forecast](https://openweathermap.org/forecast5) API from OpenWeather to retrieve weather data. The base URL for the API is:

```
https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
```

To obtain geographical coordinates (latitude and longitude) from a city name, the application uses the OpenWeather Geocoding API:

```
http://api.openweathermap.org/geo/1.0/direct?q={city name}&limit=5&appid={API key}
```

## Local Storage

The application uses `localStorage` to store the search history, ensuring that users can access their previously searched cities even after refreshing the page.

## User Story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```


## Technologies Used

- **HTML5**: Provides the structure of the web application.
- **CSS3**: Styles the application for a visually appealing and responsive design.
- **JavaScript**: Implements the core functionality, including API calls and DOM manipulation.
- **jQuery**: Simplifies JavaScript operations and enhances interactivity.
- **Bootstrap**: Ensures a responsive and mobile-first design.
- **OpenWeather API**: Supplies the weather data for the application.

## Installation

To run the Weather Dashboard locally, follow these steps:

1. **Clone the Repository**: Clone the project repository from GitHub to your local machine.
    ```bash
    git clone https://github.com/your-username/weather-dashboard.git
    ```
2. **Navigate to the Project Directory**: Move into the project directory.
    ```bash
    cd weather-dashboard
    ```
3. **Open the Index File**: Open `index.html` in your preferred web browser to view the application.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to create an issue or submit a pull request. Please ensure that your contributions align with the project's coding standards and guidelines.

## License

This project is licensed under the MIT License. See the [MIT License](LICENSE) file for more details.

## Contact

For any questions or inquiries, please contact the project maintainer:

- **Name**: Jermar Smith
- **Email**: jermarnsmith@gmail.com
- **GitHub**: [Jermar318](https://github.com/Jermar318)
