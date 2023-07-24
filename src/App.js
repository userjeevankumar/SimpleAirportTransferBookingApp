import React from "react";
import Header from "./components/Header";
import BookingsForm from "./components/BookingsForm";
import Reviews from "./components/Reviews";
import BookingDetails from "./components/BookingDetails";
import PopularDestinations from "./components/PopularDestinations";
import DidYouKnow from "./components/DidYouKnow";
import AppDownload from "./components/AppDownload";
import BookAirportTransfer from "./components/BookAirportTransfer";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="booking-header-container">
        <Header />
        <hr />
        <BookingsForm />
      </div>

      <div className="main-content">
        <Reviews />
        <BookingDetails />
        <PopularDestinations />
        <DidYouKnow />
        <BookAirportTransfer />
        <AppDownload />
      </div>
      <Footer />
    </div>
  );
};

export default App;
