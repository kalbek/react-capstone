import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getWeathers } from '../redux/weatherSlice';

const Weather = () => {
  const dispatch = useDispatch();
  const [xCoor, setXCoor] = useState();
  const [yCoor, setYCoor] = useState();

  const pinnedCoordinates = [
    { id: uuidv4(), x: 50, y: 50 },
    { id: uuidv4(), x: 60, y: 60 },
    { id: uuidv4(), x: 70, y: 70 },
    { id: uuidv4(), x: 80, y: 80 },
  ];

  function handleCoords(coords) {
    dispatch(getWeathers(coords));
  }

  return (
    <>
      <div className="flex-centered z-0">
        <div className="flex-column">
          <div className="phone flex-centered">
            <div className="group-1 flex-column-centered gap-1 absolutea">
              <div className="hero-image g-1-1 absolute flex-column">
                <img src="/images/temp.jpg" alt="" />
                <div className="temp-text">
                  <p>Get your weather data instantly.</p>
                </div>
              </div>
              <div className="coordinate-control z-100 relative gap-p5">
                <div className="top-apis ">
                  <h3>Pinned Coordinates</h3>
                </div>
                {pinnedCoordinates.map((coord) => (
                  <div className="card flex-column" key={coord.id}>
                    <div className="flex">
                      <p>
                        X:
                        {coord.x}
                      </p>
                      <p>
                        Y:
                        {coord.y}
                      </p>
                    </div>
                    <NavLink
                      to="/pollution-details"
                      onClick={() => {
                        handleCoords({
                          lat: coord.x,
                          lon: coord.y,
                        });
                      }}
                    >
                      <button
                        id="btn-po"
                        className="see-pollution"
                        type="button"
                      >
                        Pollution Details
                      </button>
                    </NavLink>
                  </div>
                ))}
                <p className="custom-coord-title">Custom Coordinates</p>
                <div className="card custom-card flex-column-centered">
                  <div className="flex-column-centered custom-coord">
                    <div className="flex gap-10 relative">
                      <label htmlFor="x">
                        <input
                          value={xCoor}
                          onChange={(e) => setXCoor(e.target.value)}
                          placeholder="X"
                          id="x"
                          type="text"
                        />
                      </label>
                      <label htmlFor="x">
                        <input
                          value={yCoor}
                          onChange={(e) => setYCoor(e.target.value)}
                          placeholder="Y"
                          id="y"
                          type="text"
                        />
                      </label>
                      <NavLink
                        to="/pollution-details"
                        onClick={() => {
                          handleCoords({
                            lat: xCoor,
                            lon: yCoor,
                          });
                        }}
                      >
                        <button
                          className="ptr go see-pollution flex-column-centered"
                          type="button"
                        >
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
