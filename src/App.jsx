import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./router/routing";

const App = () => {
  return (
    <>
      {/* <Header />
      <Sidebar /> */}
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </>
  );
};

export default App;
