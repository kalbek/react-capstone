import weatherSlice from "../redux/weatherSlice";
import { useDispatch, useSelector } from "react-redux";
import { getWeathers } from "../redux/weatherSlice";

import { useEffect } from "react";

const Weather = () => {
  const dispatch = useDispatch();
  console.log("heloooooooooooooooooooo");
  const { weather } = useSelector((store) => store.weathers);
  console.log("weathers: ", weather);
  useEffect(() => {
    dispatch(getWeathers());
  }, []);
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
                  <p>Get your weather data instantly.</p>
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
