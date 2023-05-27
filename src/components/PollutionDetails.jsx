import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

const PollutionDetails = () => {
  const navigate = useNavigate();
  const {
    weather, isLoading, isSuccess, isError, error,
  } = useSelector(
    (store) => store.weathers,
  );

  return (
    <>
      <div className="flex-centered hero">

        <div className="details relative">
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
            <div className="coordiantes flex-column-centered">
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
          {isSuccess
          && weather.list.map((lists) => (
            <>
              <div className="flex-column-centered">
                <div className="card">
                  <div className="aqi absolute">
                    AQI:
                    <span>
                      {lists.main.aqi}
                      &nbsp;
                    </span>
                    <>
                      {lists.main.aqi === 1 && <>Good</>}
                      {lists.main.aqi === 2 && <>Fair</>}
                      {lists.main.aqi === 3 && <>Moderate</>}
                      {lists.main.aqi === 4 && <>Poor</>}
                      {lists.main.aqi === 4 && <>Very Poor </>}
                    </>
                  </div>
                  <div className="date absolute">
                    {new Date(lists.dt * 1000).toDateString()}
                  </div>
                  <div className="concentrations">
                    <p className="title">
                      <u> Concentrations:</u>
                    </p>
                    <p>
                      CO2:
                      ....................................................................
                      <span>{lists.components.co}</span>
                    </p>
                    <p>
                      NO:
                      .....................................................................
                      <span>{lists.components.no}</span>
                    </p>
                    <p>
                      NO
                      <sub>2</sub>
                      :
                      .........................................................................
                      <span>{lists.components.no2}</span>
                    </p>
                    <p>
                      O
                      <sub>3</sub>
                      :
                      .........................................................................
                      <span>{lists.components.o3}</span>
                    </p>
                    <p>
                      SO
                      <sub>2</sub>
                      :
                      .........................................................................
                      <span>{lists.components.so2}</span>
                    </p>
                    <p>
                      PM
                      <sub>2.5</sub>
                      :
                      .........................................................................
                      <span>{lists.components.pm2_5}</span>
                    </p>
                    <p>
                      PM
                      <sub>10</sub>
                      :
                      .........................................................................
                      <span>{lists.components.pm10}</span>
                    </p>
                    <p>
                      NH
                      <sub>3</sub>
                      :
                      .........................................................................
                      <span>{lists.components.nh3}</span>
                    </p>
                  </div>
                </div>
              </div>
            </>
          ))}

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
          <NavLink to="/deta" style={{ textDecoration: 'none' }} />
          <button
            className="ptr btn-goback flex-column-centered"
            onClick={() => navigate('/')}
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
