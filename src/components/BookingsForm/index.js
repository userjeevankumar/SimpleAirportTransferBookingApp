import React, { useState } from "react";
import { HiLocationMarker } from "react-icons/hi";
import { TbSquareRoundedArrowRightFilled } from "react-icons/tb";
import "./index.css";

const BookingsForm = () => {
  // State for form inputs
  const [pointA, setPointA] = useState("");
  const [pointB, setPointB] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [passengers, setPassengers] = useState({
    adults: 1,
    males: 0,
    females: 0,
    children: 0,
  });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy data for API response
    const apiResponse = {
      status: "success",
      message: "Booking successful!",
      bookingId: "ABC123XYZ",
      totalPrice: 50.0,
      currency: "USD",
      details: {
        pointA: pointA,
        pointB: pointB,
        date: date,
        time: time,
        passengers: passengers,
      },
    };

    // Simulate API call delay
    setTimeout(() => {
      // Replace this with actual API call code
      console.log("Form submitted:", pointA, pointB, date, time, passengers);
      console.log("API Response:", apiResponse);
      // Add logic to handle the API response here (e.g., show a success message, update state, etc.)
    }, 1000); // Simulating 1 second delay for API response
  };

  return (
    <div className="bookings-form">
      <form onSubmit={handleSubmit}>
        <div className="booking-container">
          <div className="one-way">
            <p>From</p>
            <div className="input-container">
              <HiLocationMarker className="icon" />
              <input
                type="text"
                placeholder="From start type your dropoff location"
                value={pointA}
                onChange={(e) => setPointA(e.target.value)}
              />
            </div>
            <input
              type="datetime-local"
              value={date + "T" + time}
              onChange={(e) => {
                const dateTime = e.target.value.split("T");
                setDate(dateTime[0]);
                setTime(dateTime[1]);
              }}
            />
          </div>

          <TbSquareRoundedArrowRightFilled className="arrow-icon" />

          <div className="return">
            <p>To</p>
            <div className="input-container">
              <HiLocationMarker className="icon" />
              <input
                type="text"
                placeholder="From start type your dropoff location"
                value={pointB}
                onChange={(e) => setPointB(e.target.value)}
              />
            </div>
            <input
              type="datetime-local"
              value={date + "T" + time}
              onChange={(e) => {
                const dateTime = e.target.value.split("T");
                setDate(dateTime[0]);
                setTime(dateTime[1]);
              }}
            />
          </div>
        </div>
        <div className="add-btn-container">
          <button className="add-return-btn">+ Add Return</button>
        </div>
        <div className="search-count-container">
          <div className="passenger-count">
            <label>No of Passengers:</label>
            <div className="passenger-input">
              <p>Adults</p>
              <input
                className="input-count"
                type="number"
                min="1"
                value={passengers.adults}
                onChange={(e) =>
                  setPassengers({
                    ...passengers,
                    adults: parseInt(e.target.value),
                  })
                }
              />
            </div>
            <div className="passenger-input">
              <p>Males</p>
              <input
                type="number"
                min="0"
                value={passengers.males}
                onChange={(e) =>
                  setPassengers({
                    ...passengers,
                    males: parseInt(e.target.value),
                  })
                }
              />
            </div>
            <div className="passenger-input">
              <p>Females</p>
              <input
                type="number"
                min="0"
                value={passengers.females}
                onChange={(e) =>
                  setPassengers({
                    ...passengers,
                    females: parseInt(e.target.value),
                  })
                }
              />
            </div>
            <div className="passenger-input">
              <p>Children</p>
              <input
                type="number"
                min="0"
                value={passengers.children}
                onChange={(e) =>
                  setPassengers({
                    ...passengers,
                    children: parseInt(e.target.value),
                  })
                }
              />
            </div>
          </div>

          <button className="search-btn" type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingsForm;
