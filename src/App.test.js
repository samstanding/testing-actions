import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("App renders turbo team", async () => {
  const { findByText } = render(<App />);
  const text = await findByText("Turbo Team");
  expect(text).toHaveTextContent("Turbo Team");
});
