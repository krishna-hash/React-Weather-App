import React, { useState } from "react";

import Weather from "./weather";

function App() {
  const [location, setlocation] = useState("");
  const [tempc, settempc] = useState("");
  const [tempf, settempf] = useState("");
  const [lat, setlat] = useState("");
  const [long, setlong] = useState("");
  const [mood, setmood] = useState("");

  const fetching = async (e) => {
    e.preventDefault();
    const city = e.target.elements.location.value;

    if (city === "") {
      alert("Enter Country Name");
      return;
    }
    e.target.elements.location.value = "";
    const data = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=3bc90ee3f25043d0abd85236202008&q=${city}`
    );

    const result = await data.json();
    console.log(result);
    const { country, lat, lon } = result.location;
    const { text } = result.current.condition;
    const { temp_c, temp_f } = result.current;
    setlocation(country);
    settempc(temp_c);
    settempf(temp_f);
    setlat(lat);
    setlong(lon);
    setmood(text);
  };

  return (
    <div className="App">
      <Weather
        country={location}
        temp_c={tempc}
        temp_f={tempf}
        latitude={lat}
        longitude={long}
        mood={mood}
        fetch={fetching}
      ></Weather>
    </div>
  );
}

export default App;
