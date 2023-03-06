import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Given the App component", () => {
  describe("When it is render", () => {
    test("Then it should write work in progress", () => {
      render(<App></App>);

      const element = screen.getByRole("heading");

      expect(element).toBeInTheDocument();
    });
  });
});
