import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "../App";

//Can either do a mock using the __mock__ folder, or inline as a callback for the second argument in jest.mock. For some reason their example of lodash doesn't need this.
jest.mock("axios");

describe("App", () => {
  it("renders emonk", () => {
    render(<App />);
    const title = screen.getByText(/eMonk/i);
    expect(title).toBeInTheDocument();
  });

  it("gets users", async () => {
    render(<App />);

    // could either use waitFor or async await with findByText. actually if you remove await from waitFor, it still works
    await waitFor(() => {
      const user = screen.getByText(/mock username/i);
      expect(user).toBeInTheDocument();
    });
  });
});
