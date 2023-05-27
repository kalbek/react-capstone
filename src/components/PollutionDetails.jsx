import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getWeathers } from "../redux/weatherSlice";
import { setCoords } from "../redux/weatherSlice";

const PollutionDetails = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCoords({ lat: 7, long: 7 }));
    dispatch(getWeathers({ lat: 7, long: 7 }));
  }, [dispatch]);
  const { weather } = useSelector((store) => store.weathers);
  const { coords } = useSelector((store) => store.weathers);
  console.log("hey: ", weather);
  console.log("coords: ", coords);
  return <div>PollutionDetails</div>;
};

export default PollutionDetails;
