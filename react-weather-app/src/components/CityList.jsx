import React from 'react'


const CityList = ({selectedCity, setSelectedCity}) => {
      /* Added a city name where the data not available in mock data (weatherData) for testing*/
  const cities = ["NewYork", "London", "Tokyo", "Missouri"];
  return (
    <div>
      <h2> Select the City</h2>
      <ul style={{listStyle:"none"}}>
      {cities.map((c) => (
        <li key={c}>
          <button onClick={() => setSelectedCity(c)}
          >
          {c}
          </button>
        </li>
      ))}
      </ul>
    </div>
  )
}


export default CityList