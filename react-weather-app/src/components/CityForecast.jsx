import React, { useEffect, useState, useRef } from "react";
import weatherData from "./weatherData";


const CityForecast = ({ city }) => {
  const [forecast, setForecast] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const detailsRef = useRef(null);


  // Load forecast when city changes
  useEffect(() => {
    if (city) {
      setForecast(weatherData[city] || null);
      setShowDetails(false); // hide old details when city changes
    }
  }, [city]);


  // Scroll to details when "View Details" is clicked
  const scrollToDetails = () => {
    setShowDetails(true);
    setTimeout(() => {
      if (detailsRef.current) {
        detailsRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // small delay ensures rendering happens before scroll
  };


  if (!forecast) {
    return <p>No weather data available for {city}.</p>;
  }


  return (
    <div>
      <h2>{city} Forecast</h2>
      <p>{forecast.summary}</p>
       <button onClick={scrollToDetails}>View Details</button>
       <button onClick={() => setForecast(null)}>Back to CityList</button> {/*Clears forecast when button is clicked*/}

      {/* Only shows detail after clicking "View Details" button */}
      {showDetails && (
        <div ref={detailsRef}
        style={{
            width:"1200px",
            marginTop: "10px",
            padding: "10px",
            border: "2px solid #ccc",
            borderRadius: "4px",
            backgroundColor: "#e2dff3ff",
            boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
          }}
        >
          <p>{forecast.details}</p>
        </div>
      )}
    </div>
  );
}


export default CityForecast;
