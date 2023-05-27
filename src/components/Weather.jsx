import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { getWeathers, getSampleData } from "../redux/weatherSlice";

const Weather = () => {
  const dispatch = useDispatch();
  const [xCoor, setXCoor] = useState();
  const [yCoor, setYCoor] = useState();

  const sampleCoordinates = [
    { id: uuidv4(), x: 50, y: 50 },
    { id: uuidv4(), x: 60, y: 60 },
    { id: uuidv4(), x: 70, y: 70 },
    { id: uuidv4(), x: 80, y: 80 },
  ];
  const { sampleAQIData } = useSelector((store) => store.weathers);

  useEffect(() => {
    sampleCoordinates.forEach((coord) => {
      dispatch(getSampleData(coord));
    });
    console.log("saqK: ", sampleAQIData);
  }, [dispatch]);

  function handleCoords(coords) {
    dispatch(getWeathers(coords));
  }

  return (
    <>
      <>
        <div className="main bg-primary flex-column-centered">
          <div className="main-intro flex-column-centered p-1 mt-30">
            <h1>
              Providing air pollution data for any coordinates on the globe.
            </h1>
            <div className="intro-content">Air Quality Index</div>
            <div className="category-card wrap gap-1">
              <div className="card">
                <div className="aqi">1</div>
                <div className="status">Good</div>
              </div>
              <div className="card">
                <div className="aqi">2</div>
                <div className="status">Fair</div>
              </div>
              <div className="card">
                <div className="aqi">3</div>
                <div className="status">Moderate</div>
              </div>
              <div className="card">
                <div className="aqi">4</div>
                <div className="status">Poor</div>
              </div>
              <div className="card">
                <div className="aqi">5</div>
                <div className="status">Very Poor</div>
              </div>
            </div>
            <div className="intro-content">Pollution by Coordinate</div>
            <div className="intro-content sub-intro">
              Enter X and Y coordinates
            </div>
            <div className="coordinates">
              <div className="flex gap-1 mt-1">
                <input type="text" />
                <input type="text" />
              </div>
            </div>
            {/* button to get data */}
            <div className="get-pollution">
              <a href="/pollution-details">Get pollution data</a>
            </div>
            <div className="intro-content sample-intro">Sample Coordinates</div>
          </div>
          <div className="flex-column-start w-100">
            <div className="sample-container">
              {/* sample aqi card */}
              <div className="aqi-good sample-card">
                <div className="flex">
                  <div className="image">
                    <img src="/images/small-earth-1.jpg" alt="" />
                  </div>
                  <div className="flex-column aqis">
                    <div className="aqi-status">
                      <p>Good Air Quality Index</p>
                    </div>
                    <div className="coord">
                      <p>[50, 50]</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* second sample card */}
            <div className="sample-container">
              {/* sample aqi card */}
              <div className="aqi-good sample-card">
                <div className="flex">
                  <div className="image">
                    <img src="/images/small-earth-2.jpg" alt="" />
                  </div>
                  <div className="flex-column aqis">
                    <div className="aqi-status">
                      <p>Fair Air Quality Index</p>
                    </div>
                    <div className="coord">
                      <p>[50, 50]</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* third sample card */}
            <div className="sample-container">
              {/* sample aqi card */}
              <div className="aqi-good sample-card">
                <div className="flex">
                  <div className="image">
                    <img src="/images/small-earth-3.jpg" alt="" />
                  </div>
                  <div className="flex-column aqis">
                    <div className="aqi-status">
                      <p>Moderate Air Quality Index</p>
                    </div>
                    <div className="coord">
                      <p>[50, 50]</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* fourth sample card */}
            <div className="sample-container">
              {/* sample aqi card */}
              <div className="aqi-good sample-card">
                <div className="flex">
                  <div className="image">
                    <img src="/images/small-earth-4.jpg" alt="" />
                  </div>
                  <div className="flex-column aqis">
                    <div className="aqi-status">
                      <p>Poor Air Quality Index</p>
                    </div>
                    <div className="coord">
                      <p>[50, 50]</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* fifth sample card */}
            <div className="sample-container">
              {/* sample aqi card */}
              <div className="aqi-good sample-card">
                <div className="flex">
                  <div className="image">
                    <img src="/images/small-earth-5.jpg" alt="" />
                  </div>
                  <div className="flex-column aqis">
                    <div className="aqi-status">
                      <p>Very Poor Air Quality Index</p>
                    </div>
                    <div className="coord">
                      <p>[50, 50]</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Weather;
