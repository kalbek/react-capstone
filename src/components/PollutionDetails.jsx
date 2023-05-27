import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const PollutionDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    weather, isLoading, isSuccess, isError, error,
  } = useSelector(
    (store) => store.weathers,
  );

  const handleGoBack = () => {
    const navigateObject = {
      type: 'NAVIGATE',
      payload: navigate('/'),
    };
    dispatch(navigateObject);
  };

  return (
    <>
      <div className="main bg-primary flex-column-centered">
        <div className="main-intro flex-column-centered p-1 mt-30">
          {isLoading && (
            <>
              <div className="loading flex-column-centered">
                <div className="flex">
                  <div className="dot-flashing" />
                </div>
              </div>
            </>
          )}
          {isSuccess && (
            <>
              <div className="intro-content coordiantes flex-column-centered">
                <p className="coords">Coordinates:</p>
                <div className="flex gap-1 lat-long">
                  <p>
                    Latitude:
                    {' '}
                    <span>
                      {' '}
                      {weather.coord.lat}
                    </span>
                  </p>
                  <p>
                    Longitude:
                    <span>
                      {' '}
                      {weather.coord.lon}
                    </span>
                  </p>
                </div>
              </div>
            </>
          )}
          {isSuccess && (
            <>
              <div className="intro-content flex-column-centered">
                <div className="date">
                  {new Date(weather.list[0].dt * 1000).toDateString()}
                </div>
                <div className="aqi">
                  AQI : &nbsp; 
                  <span>
                    {weather.list[0].main.aqi},   &nbsp; Status is
                    &nbsp;
                  </span>
                  <>
                    {weather.list[0].main.aqi === 1 && <>Good</>}
                    {weather.list[0].main.aqi === 2 && <>Fair</>}
                    {weather.list[0].main.aqi === 3 && <>Moderate</>}
                    {weather.list[0].main.aqi === 4 && <>Poor</>}
                    {weather.list[0].main.aqi === 4 && <>Very Poor </>}
                  </>
                </div>
                <div className="concentrations">
                  <p className="title">
                    <u> Concentrations:</u>
                  </p>
                  <p>
                    CO2:
                    ...................................................
                    <span>{weather.list[0].components.co}</span>
                  </p>
                  <p>
                    NO :
                    ................................................... 
                    <span>{weather.list[0].components.no}</span>
                  </p>
                  <p>
                    NO2:
                    ................................................... 
                    <span>{weather.list[0].components.no2}</span>
                  </p>
                  <p>
                    O3:
                    ................................................... 
                    <span>{weather.list[0].components.o3}</span>
                  </p>
                  <p>
                    SO2:
                    .................................................. 
                    <span>{weather.list[0].components.so2}</span>
                  </p>
                  <p>
                    PM2.5:
                    .................................................. 
                    <span>{weather.list[0].components.pm2_5}</span>
                  </p>
                  <p>
                    PM10:
                    ................................................. 
                    <span>{weather.list[0].components.pm10}</span>
                  </p>
                  <p>
                    NH:
                    ................................................. 
                    <span>{weather.list[0].components.nh3}</span>
                  </p>
                </div>
              </div>
            </>
          )}

          {isError && (
            <>
              <div className="error-container relative">
                <div className="error absolute">
                  <div className="invalid">
                    <p>Invalid Coordinates!</p>
                    <p>{error}</p>
                  </div>
                </div>
              </div>
            </>
          )}
          <button
            className="ptr btn-goback flex-column-centered"
            onClick={handleGoBack}
            type="button"
          >
            Go Back
          </button>
        </div>
      </div>
    </>
  );
};

export default PollutionDetails;
