import React, { useEffect, useState, useRef } from "react";
import weatherData from "./weatherData";

const CityForecast = ({ city }) => {
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showDetails, setShowDetails] = useState(false); //  controls visibility
  const detailsRef = useRef(null);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setShowDetails(false); //  hide details when city changes
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const data = weatherData[city];
        if (!data) throw new Error("No data found for selected city");
        setForecast(data);
      } catch (error) {
        console.error(error);
        setForecast({ summary: "Error fetching data", details: error.message });
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  const scrollToDetails = () => {
    setShowDetails(true); // show details only when button clicked
    setTimeout(() => {
      if (detailsRef.current) {
        detailsRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // small delay ensures rendering happens before scroll
  };

  if (loading) return <p>Fetching weather data...</p>;
  if (!forecast) return null;

  return (
    <div>
      <h2>{city} Forecast</h2>
      <p>{forecast.summary}</p>
      <button
        onClick={scrollToDetails}
        style={{
          marginTop: "10px",
          padding: "8px 12px",
          cursor: "pointer",
          borderRadius: "4px",
          border: "none",
          backgroundColor: "#2196F3",
          color: "white",
        }}
      >
        View Details
      </button>

      {/*  Only show details section when showDetails is true */}
      {showDetails && (
        <div
          ref={detailsRef}
          style={{
            marginTop: "20px",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <h3>Details</h3>
          <p>{forecast.details}</p>
        </div>
      )}
    </div>
  );
};

export default CityForecast;
