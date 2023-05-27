import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  getWeathers,
  getSampleData,
  clearSampleAqi,
} from '../redux/weatherSlice';

const Weather = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [xCoor, setXCoor] = useState(0);
  const [yCoor, setYCoor] = useState(0);

  const sampleCoordinates = [
    { id: uuidv4(), x: 40, y: 40 },
    { id: uuidv4(), x: 60, y: 60 },
    { id: uuidv4(), x: 70, y: 70 },
    { id: uuidv4(), x: 80, y: 80 },
  ];
  const { sampleAQIData } = useSelector((store) => store.weathers);

  useEffect(() => {
    dispatch(clearSampleAqi());
    sampleCoordinates.forEach((coord) => {
      dispatch(getSampleData(coord));
    });
  }, [dispatch]);

  function handleCoords(coords) {
    console.log('koor: ', coords);
    dispatch(getWeathers(coords));
    const navigateObject = {
      type: 'NAVIGATE',
      payload: navigate('/pollution-details'),
    };
    dispatch(navigateObject);
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
                <label htmlFor="x">
                  <input
                    value={xCoor}
                    onChange={(e) => setXCoor(Number(e.target.value))}
                    id="x"
                    type="number"
                  />
                </label>
                <label htmlFor="x">
                  <input
                    value={yCoor}
                    onChange={(e) => setYCoor(Number(e.target.value))}
                    id="y"
                    type="number"
                  />
                </label>
              </div>
            </div>

            {/* button to get data */}
            <div
              className="get-pollution"
              onClick={() => {
                handleCoords({
                  lat: xCoor,
                  lon: yCoor,
                });
              }}
            >
              Get pollution data
            </div>

            <div className="intro-content sample-intro">Sample Coordinates</div>
          </div>
          {/* display sample data form api. */}
          <div className="flex-column-start w-100">
            {sampleAQIData.map((data, index) => (
              <div
                key={data.id}
                onClick={() => {
                  handleCoords({
                    lat: data.coord.lat,
                    lon: data.coord.lon,
                  });
                }}
                className="sample-container"
              >
                {/* sample aqi card */}
                <div className="aqi-good sample-card">
                  <div className="flex">
                    <div className="image">
                      <img
                        src={`/images/small-earth-${index + +1}.jpg`}
                        alt=""
                      />
                    </div>
                    <div className="flex-column aqis">
                      <div className="aqi-status">
                        <p>
                          {' '}
                          Air Quality Index
                          {data.list[0].main.aqi}
                        </p>
                      </div>
                      <div className="coord">
                        <p>
                          [
                          {data.coord.lon}
                          ,
                          {' '}
                          {data.coord.lat}
                          ]
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    </>
  );
};

export default Weather;
