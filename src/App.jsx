import { useState } from "react";
import {
  convertMpsToKph,
  getBaseURL,
  getCountryName,
  getWeatherIcon,
} from "./utils";

function App() {
  const [location, setLocation] = useState("");
  const [data, setData] = useState(undefined);
  const [errorText, setErrorText] = useState("");

  const onChangeInput = (e) => {
    setLocation(e.target.value);
  };

  const searchWeather = (e) => {
    if (e.key === "Enter" && !(location === "")) {
      fetch(getBaseURL(location))
        .then((res) => res.json())
        .then((json) => {
          setData(json);
          console.log(json);
          if (json.cod && json.cod === "404") {
            setErrorText("CITY NAME IS INVALID!!!");
          } else {
            setLocation("");
          }
        });
    }
  };

  console.log(data);

  return (
    <div className="flex flex-col h-screen w-screen justify-between items-center py-8  bg-slate-950">
      <input
        placeholder="Enter City"
        value={location}
        onKeyDown={searchWeather}
        onChange={onChangeInput}
        className="p-4 bg-slate-200 rounded-3xl h-10 w-[90%] md:w-[50%] text-slate-950  outline-none"
      />
      {data === undefined || data.cod === "404" ? (
        <h1>{errorText}</h1>
      ) : (
        <>
          <div className="flex flex-col justify-evenly items-center h-[80%] md:h-[90%]">
            <div className="flex flex-col justify-between items-center">
              <h1 className="text-xl md:text-3xl md:mt-2 ">{`📍 ${
                data?.name
              }, ${getCountryName(data?.sys?.country)}`}</h1>
              <h1 className=" text-8xl md:text-9xl mt-[150px] mb-6 md:mt-[100px]">
                {`${data?.main?.temp?.toFixed(1)} °C`}
              </h1>
              <div className="flex flex-row justify-between items-center">
                <h1 className="py-5 px-10 text-xl md:text-3xl">{`⬇ ${data?.main?.temp_min?.toFixed(
                  1
                )} °C`}</h1>
                <h1 className="py-5 px-10 text-xl md:text-3xl">{`⬆ ${data?.main?.temp_max?.toFixed(
                  1
                )} °C`}</h1>
              </div>
              {data.weather && (
                <h1 className=" text-2xl md:text-4xl mt-[100px] mb-6 md:mt-[100px]">
                  {`${getWeatherIcon(data?.weather[0]?.main)}`}
                </h1>
              )}
            </div>
          </div>
          <div className="flex flex-row justify-evenly items-center px-4 py-2 my-2 rounded-2xl bg-slate-400 w-[90%] md:w-[50%]">
            <div className="flex flex-col justify-between items-center ">
              <h1 className="text-md md:text-2xl">{`${data?.main?.feels_like?.toFixed(
                1
              )} °C`}</h1>
              <h1 className="text-md md:text-2xl">Feels Like</h1>
            </div>
            <div className="flex flex-col justify-between items-center ">
              <h1 className="text-md md:text-2xl">{`${data?.main?.humidity} %`}</h1>
              <h1 className="text-md md:text-2xl">Humidity</h1>
            </div>
            <div className="flex flex-col justify-between items-center ">
              <h1 className="text-md md:text-2xl">{`${convertMpsToKph(
                data?.wind?.speed
              )?.toFixed(1)} km/h`}</h1>
              <h1 className="text-md md:text-2xl">Wind</h1>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
