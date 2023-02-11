import React, { useState } from "react";

//custom hooks
import useAvailableTimes from "../hooks/useAvailableTimes";

//custom components
import Header from "../components/header";
import BookingForm from "../components/bookingForm";
import Footer from "../components/footer";

//
const BookingPage = () => {
  const availableTimes = useAvailableTimes();

  const initializeTimes = () => {
    return availableTimes;
  };

  // const myFunc = () => {
  //   console.log("fetchAPI()");
  //   console.log(fetchAPI("2022-01-01"));
  // };

  // myFunc();

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
      <BookingForm availableTimes={availableTimes} />
      <Footer />
    </>
  );
};

export default BookingPage;
