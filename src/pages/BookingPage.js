import React, { useState } from "react";

//custom hooks
import useAvailableTimes from "../hooks/useAvailableTimes";

//custom components
import Header from "../components/header";
import Main from "../components/main";
import BookingForm from "../components/bookingForm";
import Footer from "../components/footer";

//
const BookingPage = () => {
  const availableTimes = useAvailableTimes();

  const initializeTimes = () => {
    return availableTimes;
  };

  const availableTimesReducer = (state = initializeTimes, action) => {
    switch (action.type) {
      case "weekday":
        return { ...state };
      case "weekend":
        return { ...state };
      default:
        return state;
    }
  };

  const updateTimes = () => {};

  return (
    <>
      <Header />
      <Main>
        <BookingForm availableTimes={availableTimes} />
      </Main>
      <Footer />
    </>
  );
};

export default BookingPage;
