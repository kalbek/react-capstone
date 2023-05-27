import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navigation from "../components/Navigation";

describe("Navigation", () => {
  it("should render the navigation with the logo and service text", () => {
    const { getByAltText } = render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    const logoElement = getByAltText("OpenWeatherLogo");
    expect(logoElement.src).toContain("/images/OpenWeatherLogo.png");
  });
});
