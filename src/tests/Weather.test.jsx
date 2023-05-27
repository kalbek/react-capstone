import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Weather from "../components/Weather";
import { MemoryRouter } from "react-router-dom";

const mockStore = configureStore([]);

describe("Weather component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      weather: {
        data: {},
      },
    });
  });

  it("should render without crashing", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Weather />
        </MemoryRouter>
      </Provider>
    );
  });
});