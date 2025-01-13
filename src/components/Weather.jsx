import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faTemperatureHigh,
  faCloud,
  faCloudRain,
  faCloudSun,
  faSun,
  faSnowflake,
  faBolt,
  faSmog,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const Weather = ({ latitude, longitude }) => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_APP_OPENWEATHERMAP_API_KEY;

  useEffect(() => {
    if (!latitude || !longitude) return;

    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather`,
          {
            params: {
              lat: latitude,
              lon: longitude,
              units: "imperial",
              appid: API_KEY,
            },
          }
        );
        setWeather(response.data);
      } catch (err) {
        setError("Unable to fetch weather data");
        console.error(err);
      }
    };

    fetchWeather();
  }, [API_KEY, latitude, longitude]);

  if (error) {
    return <div className="weather-error">{error}</div>;
  }

  if (!weather) {
    return <div className="weather-loading">Loading weather...</div>;
  }

  const { main, weather: weatherDetails, name } = weather;
  const weatherDescription = weatherDetails[0]?.description;
  const weatherMain = weatherDetails[0]?.main;

  // Map weather conditions to icons
  const getWeatherIcon = () => {
    switch (weatherMain.toLowerCase()) {
      case "clear":
        return faSun;
      case "clouds":
        return faCloud;
      case "rain":
        return faCloudRain;
      case "drizzle":
        return faCloudRain;
      case "thunderstorm":
        return faBolt;
      case "snow":
        return faSnowflake;
      case "mist":
      case "smoke":
      case "haze":
      case "dust":
      case "fog":
      case "sand":
      case "ash":
      case "squall":
      case "tornado":
        return faSmog;
      default:
        return faCloudSun;
    }
  };

  return (
    <div className="weather-container">
      <h3>
        <FontAwesomeIcon icon={getWeatherIcon()} /> Weather
      </h3>
      <p>
        <FontAwesomeIcon icon={faLocationDot} /> <strong>Location:</strong>{" "}
        {name}
      </p>
      <p>
        <FontAwesomeIcon icon={faTemperatureHigh} />{" "}
        <strong>Temperature:</strong> {main.temp}°F
      </p>
      <p>
        <FontAwesomeIcon icon={getWeatherIcon()} /> <strong>Condition:</strong>{" "}
        {weatherDescription}
      </p>
    </div>
  );
};

Weather.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
};

export default Weather;
