import React from "react";

export const App = (props: { greeting?: string }) => {
  return <div> Hello from app 2. {props.greeting}</div>;
};
