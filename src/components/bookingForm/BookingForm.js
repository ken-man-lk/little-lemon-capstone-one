import React, { useState } from "react";

//
import styles from "./BookingForm.module.css";

//
const BookingForm = ({ availableTimes }) => {
  const [formData, setFormData] = useState({
    bookingDate: "",
    bookingTime: "17:00",
    numberOfGuest: "1",
    occasion: "Birthday",
  });

  const handleChange = (event) => {
    console.log("handleChange");
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.mainContainer}>
        <form className={styles.bookingForm} onSubmit={handleSubmit}>
          <div className={styles.formFlexRow}>
            <label htmlFor="res-date">Choose date</label>
            <input
              type="date"
              id="res-date"
              name="bookingDate"
              onChange={handleChange}
            />
          </div>

          <div className={styles.formFlexRow}>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time " name="bookingTime" onChange={handleChange}>
              {availableTimes.map((time) => (
                <option key={time}>{time}</option>
              ))}
            </select>
          </div>

          <div className={styles.formFlexRow}>
            <label htmlFor="guests">Number of guests</label>
            <input
              type="number"
              placeholder="1"
              min="1"
              max="10"
              id="guests"
              name="numberOfGuest"
              onChange={handleChange}
            />
          </div>

          <div className={styles.formFlexRow}>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" name="occasion" onChange={handleChange}>
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
          </div>

          <input
            className={styles.btnSubmit}
            type="submit"
            value="Make Your reservation"
          />
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
