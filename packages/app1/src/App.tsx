import React from "react";
import * as Remote from "app2/App";
import { multiply } from "app2/utils";

export const App = () => {
  return (
    <div>
      Hello from app1
      <Remote.App greeting="Greeting from props" />
      {multiply(2, 3)}
    </div>
  );
};
