//
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";

//
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
