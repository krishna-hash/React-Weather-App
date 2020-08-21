import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { WiDayFog } from "react-icons/wi";

function weather(props) {
  return (
    <div>
      <div className="container">
        <div className="cards">
          <h1>WEATHER DATA</h1>
          <h1 className="py-5">{props.country}</h1>
          <i>
            <WiDayFog fontSize="8rem" color="white"></WiDayFog>
          </i>
          <h4>{props.temp_c}&deg;C</h4>

          <h4 className="h4">{props.temp_f}&deg;F</h4>
          <h4 className="latitude">Lat {props.latitude}</h4>
          <h4 className="longitude">Lon {props.longitude}</h4>
          <h4 className="mood">Climate - {props.mood}</h4>

          <form onSubmit={props.fetch}>
            <label>Enter country:</label>
            <input
              type="text"
              name="location"
              autoComplete="off"
              id="text"
              placeholder="type here..."
            ></input>
            <input type="submit" id="submit" value="Get Weather"></input>
          </form>
        </div>
      </div>
    </div>
  );
}

export default weather;
