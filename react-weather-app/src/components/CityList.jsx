import React from 'react'

const CityList = ({selectedCity, setSelectedCity}) => {
  const cities = ["NewYork", "London", "Tokyo", "Missouri"];
  return (
    <div>
      <h2> Select the City</h2>
      <ul>
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