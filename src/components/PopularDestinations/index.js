import React from "react";
import "./index.css"; // Import the CSS file for styling

const MostPopularDestinations = () => {
  const destinations = [
    "Palma Airport",
    "Hyderabad Airport",
    "Pune Airport",
    "Barcelona Airport",
    "Málaga Airport",
    "Gran Canaria Airport",
    "Tenerife South Airport",
    "Lanzarote Airport",
    "Fuerteventura Airport",
    "Alicante Airport",
    "Madrid Airport",
    "Ibiza Airport",
    "Menorca Airport",
    "Tenerife North Airport",
    "Miami International Airport",
    "Las Vegas McCarran International Airport",
    "New York John F. Kennedy Airport",
    "Cancun Airport",
    "Rome Fiumicino Airport",
    "Rome Ciampino Airport",
    "Punta Cana Airport",
    "Faro Airport",
    "Lisbon Portela Airport",
    "Athens Airport",
    "Crete Chania Airport",
    "Crete Heraklion Airport",
    "Paris Charles de Gaulle Airport",
    "Paris Orly Airport",
    "London Gatwick Airport",
    "London Heathrow Airport",
    "Antalya Airport",
    "Istanbul New Airport Havalimanı",
    "Malta Airport",
  ];

  return (
    <div className="most-popular-destinations">
      <h2>The Most Popular Destinations</h2>
      <ul className="destination-list">
        {destinations.map((destination, index) => (
          <li key={index}>{destination}</li>
        ))}
      </ul>
    </div>
  );
};

export default MostPopularDestinations;
