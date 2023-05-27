import weatherSlice from "../redux/weatherSlice";
import { useDispatch, useSelector } from "react-redux";
import { getWeathers } from "../redux/weatherSlice";
import { NavLink } from "react-router-dom";
import { setCoords } from "../redux/weatherSlice";

import { useEffect, useState } from "react";

const Weather = () => {
  const dispatch = useDispatch();
  const [coor, setCoor] = useState("");
  const { weather } = useSelector((store) => store.weathers);
  const { coords } = useSelector((store) => store.weathers);
  console.log("weathers: ", weather);
  console.log("coords: ", coords);
  // useEffect(() => {
  //   dispatch(getWeathers(coords));
  // }, []);
  // useEffect(() => {
  //   dispatch(getWeathers(coords));
  // }, [coords]);

  const topCoordinates = [
    { coordinates: [50, 50] },
    { coordinates: [60, 60] },
    { coordinates: [70, 70] },
    { coordinates: [80, 80] },
  ];

  function handleCoords(coords) {
    dispatch(getWeathers(coords));
  }

  return (
    <>
      <div className="flex-centered z-0">
        <div className="flex-column">
          <div className="phone flex-centered">
            {/* <img src="/images/model-phones.png" alt="phone image" /> */}
            <div className="group-1 flex-column-centered gap-1 absolutea">
              <div className="hero-image g-1-1 absolute flex-column">
                <img src="/images/temp.jpg" alt="" />
                <div className="temp-text">
                  <p>Get your weather data instantly.</p>
                </div>
              </div>
              <div className="coordinate-control relative gap-p5">
                <div className="top-apis ">
                  <h3>Top Coordinates</h3>
                </div>
                {topCoordinates.map((coord) => (
                  <>
                    <div className="card flex-column">
                      <div className="flex">
                        <p>X: {coord.coordinates[0]}</p>
                        <p>Y: {coord.coordinates[1]}</p>
                      </div>
                      <NavLink to="/pollution-details"></NavLink>
                      <button
                        className="see-pollution"
                        // onClick={() => console.log(coord.coordinates[0])}
                        onClick={() => {
                          handleCoords({
                            lat: coord.coordinates[0],
                            lon: coord.coordinates[1],
                          });
                        }}
                      >
                        Pollution Details
                      </button>
                    </div>
                  </>
                ))}
                <p className="custom-coord-title">Custom Coordinates</p>
                <div className="card custom-card flex-column-centered">
                  <div className="flex-column-centered custom-coord">
                    <div className="flex gap-10 relative">
                      <label htmlFor="x">
                        X: &nbsp;
                        <input id="x" type="text" />
                      </label>
                      <label htmlFor="x">
                        Y: &nbsp;
                        <input id="y" type="text" />
                      </label>
                      <NavLink to="/pollution-details">
                        <button className="ptr go see-pollution flex-column-centered">
                          GO
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-image g-1-2 absolute flex-column">
                <img src="/images/not-yours.jpg" alt="" />
                <div className="temp-text">
                  <p>Absolutely ture!</p>
                </div>
              </div>
              {/*  */}
              <div className="hero-image g-1-3 absolute flex-column">
                <img src="/images/sunny-cloud.jpg" alt="" />
                <div className="temp-text">
                  <p>Only you and I can keep the sky blue.</p>
                </div>
              </div>
            </div>
            {/* Group 2 */}
            <div className="group-2 flex-column-centered gap-1">
              <div className="hero-image  g-2-1 absolute flex-column">
                <img src="/images/coords.jpg" alt="" />
                <div className="temp-text">
                  <p>Get data by latitude & longitude.</p>
                </div>
              </div>
              <div className="hero-image  g-2-2 absolute flex-column">
                <img src="/images/chemical.jpg" alt="" />
                <div className="temp-text">
                  <p>Get component concentration.</p>
                </div>
              </div>
              <div className="hero-image  g-2-3 absolute flex-column">
                <img src="/images/aqi.jpg" alt="" />
                <div className="temp-text">
                  <p>Get accurate AQI data.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
