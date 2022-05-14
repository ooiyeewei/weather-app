import React from "react";
import './weatherInfo.css';

const WeatherInfo = (props) => {
    const {weatherData} = props;

    return (
        <div className="weatherInfo">
            <p className={"location"}>{weatherData?.city}, {weatherData?.country}</p>
            <h1>{weatherData?.weather}</h1>
            <p>Description: {weatherData?.description}</p>
            <p>Temperature: {weatherData?.temperature}</p>
            <p>Humidity: {weatherData?.humidity}%</p>
            <p>Date: {weatherData?.time}</p>
        </div>
    );
};

export default WeatherInfo;
