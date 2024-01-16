// const temp = () => {
//   return (
//     <div>
//       {" "}
//       <input
//         placeholder="Enter City"
//         value={location}
//         onKeyDown={searchWeather}
//         onChange={onChangeInput}
//         className="p-4 bg-slate-200 rounded-2xl h-10 w-[350px] text-slate-950 my-2 outline-none"
//       />
//       {data === undefined || data.cod === "404" ? (
//         <h1>{errorText}</h1>
//       ) : (
//         <>
//           <h1>{`City : ${data?.name}`}</h1>
//           <h1>{`country : ${getCountryName(data?.sys?.country)}`}</h1>
//           <h1>longitude : {data?.coord?.lon}</h1>
//           <h1>latitude : {data?.coord?.lat}</h1>
//           <h1>{`temp : ${data?.main?.temp.toFixed(1)} °C`}</h1>
//           <h1>{`feels like : ${data?.main?.feels_like.toFixed(1)} °C`}</h1>
//           <h1>{`min temp : ${data?.main?.temp_min.toFixed(1)} °C`}</h1>
//           <h1>{`max temp : ${data?.main?.temp_max.toFixed(1)} °C`}</h1>
//           <h1>{`humidity : ${data?.main?.humidity} %`}</h1>
//           {data.weather && <h1>{`sky : ${data?.weather[0]?.main}`}</h1>}
//           <h1>
//             {` wind speed : ${convertMpsToKph(data?.wind?.speed).toFixed(1)}`}
//             km/h
//           </h1>
//           <h1>sunrise : {converUtcToIst(data?.sys?.sunrise)}</h1>
//           <h1>sunset : {converUtcToIst(data?.sys?.sunset)}</h1>
//         </>
//       )}
//     </div>
//   );
// };

// export default temp;
