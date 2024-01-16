import lookup from "country-code-lookup";

const API_KEY = import.meta.env.VITE_API_KEY;

export const getBaseURL = (city) => {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
};

export function convertMpsToKph(metersPerSecond) {
  const conversionFactor = 3.6;
  const kilometersPerHour = metersPerSecond * conversionFactor;
  return kilometersPerHour;
}

export function converUtcToIst(unixTimestamp) {
  const dateUTC = new Date(unixTimestamp * 1000);
  const dateIST = new Date(dateUTC.getTime());
  const options = {
    hour12: true,
    hour: "numeric",
    minute: "numeric",
    timeZone: "Asia/Kolkata",
  };
  const istTimeHourMinute12HourFormat = dateIST.toLocaleString(
    "en-US",
    options
  );
  return istTimeHourMinute12HourFormat;
}

export function getCountryName(code) {
  let countryData = lookup.byInternet(code);
  return countryData.country;
}

export function getWeatherIcon(weather) {
  let icon = "";
  switch (weather.toLowerCase()) {
    case "clear sky":
      icon = "⛅️";
      break;
    case "few clouds" || "scscattered clouds" || "broken clouds":
      icon = "☁️";
      break;
    case "shower rain":
      icon = "🌦️";
      break;
    case "rain":
      icon = "🌧️";
      break;
    case "thunderstorm":
      icon = "🌩️";
      break;
    case "snow":
      icon = "❄️";
      break;
    case "mist":
      icon = "🌫️";
      break;
    default:
      icon = "☁️";
  }

  return `${icon} ${weather}`;
}
