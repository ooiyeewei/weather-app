import '../App.css';
import React, {useEffect, useState} from "react";

const WeatherInfo = (props) => {

    const {weatherData} = props;

    return (
        <div className="WeatherInfo">
            <p className={"location"}>{weatherData?.city}, {weatherData?.country}</p>
            <h2>{weatherData?.weather}</h2>
            <p>Description: {weatherData?.description}</p>
            <p>Temperature: {weatherData?.temperature}</p>
            <p>Humidity: {weatherData?.humidity}</p>
            <p>Date: {weatherData?.time}</p>
        </div>
    );
};

export default WeatherInfo;
