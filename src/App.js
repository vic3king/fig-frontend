import React from "react";
import { MemoryRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Notifications from "react-notify-toast";
import "./App.css";

const Error = () => <span>404</span>;

const About = () => (
  <React.Fragment>
    <span>About</span>
  </React.Fragment>
);

const App = () => (
  <MemoryRouter>
    <Routes>
      <Route path="/about" exact element={<About />} />
      <Route path="/" exact element={<Home />} />
      <Route path="*" component={Error} />
    </Routes>
  </MemoryRouter>
);

export default App;
