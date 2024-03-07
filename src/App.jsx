import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.scss";


import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Error from "./pages/error/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
