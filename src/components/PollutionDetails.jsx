import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getWeathers } from "../redux/weatherSlice";
import { setCoords } from "../redux/weatherSlice";

const PollutionDetails = () => {
  const { weather, coords, isLoading, isSuccess } = useSelector(
    (store) => store.weathers
  );
  console.log("hey: ", weather);
  console.log("loading: ", isLoading);
  console.log("success: ", isSuccess);
  console.log("coords: ", coords);
  return (
    <>
      {isLoading && <>Loading ....</>}
      {isSuccess && (
        <>
          <div className="coords">
            coords:
            <p>long: {weather.coord.lon}</p>
            <p>lat: {weather.coord.lat}</p>
          </div>
        </>
      )}
      {isSuccess &&
        weather.list.map((lists) => (
          <>
            <div className="flex-column-centered">
              <div className="aqi">aqi: {lists.main.aqi}</div>
              <div className="date">date: {lists.dt}</div>
              <p>CO2: {lists.components.co}</p>
              <p>CO2: {lists.components.no}</p>
              <p>CO2: {lists.components.no2}</p>
              <p>CO2: {lists.components.o3}</p>
              <p>CO2: {lists.components.so2}</p>
            </div>
          </>
        ))}
    </>
  );
};

export default PollutionDetails;
