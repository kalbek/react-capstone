import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import PollutionDetails from "../components/PollutionDetails";
import { Provider } from "react-redux";
import store from "../redux/store";
test("renders home page", () => {
  const root = render(
    <Provider store={store}>
      <BrowserRouter>
        <PollutionDetails />
      </BrowserRouter>
    </Provider>
  );

  expect(root).toMatchSnapshot();
});

test("renders pollutants page", () => {
  const root = render(
    <Provider store={store}>
      <BrowserRouter>
        <PollutionDetails />
      </BrowserRouter>
    </Provider>
  );

  expect(root).toMatchSnapshot();
});
