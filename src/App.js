import './App.css';
import {useState} from "react";
import WeatherInfo from "./components/weatherInfo/weatherInfo";
import SearchHistory from "./components/searchHistory/searchHistory";
import moment from "moment";
import WeatherForm from "./components/weatherForm/weatherForm";

const initialWeatherData = {
    city: "",
    country: "",
    weather: "",
    description: "",
    temperature: "",
    humidity: "",
    time: "",
};

const App = () => {
    const [weatherData, setWeatherData] = useState(initialWeatherData);
    const [searchList, setSearchList] = useState([]);
    const [showError, setShowError] = useState(false);
    const [showInfo, setShowInfo] = useState(false);

    const onSubmit = async (e, city, country) => {
        e.preventDefault();
        setShowError(false);
        setShowInfo(false);

        let cityQuery  = city;
        let url = "http://api.openweathermap.org/data/2.5/weather?q=" + cityQuery + "&APPID=7db817a81ce5b687309e20cb64b00336";

        try {
            let res = await fetch(url, {method: "POST"});
            let response = await res.json();
            let date = new Date().toISOString();
            let data = {};

            if (res.status === 200) {
                let temp = response?.main.temp_min + "°C - " + response?.main.temp_max + "°C";
                data = {
                    city: response?.name,
                    country: response?.sys?.country,
                    weather: response.weather[0].main,
                    description: response.weather[0].description,
                    temperature: temp,
                    humidity: response?.main.humidity,
                    time: moment(date).format('YYYY-MM-D hh:mm:ss A')
                };
                setWeatherData({
                    ...weatherData,
                    ...data
                });
                setSearchList([...searchList, data]);

                setShowInfo(true);
            } else if (res.status === 404) {
                setShowError(true);
            }
        } catch (err) {
            console.log(err);
        }
    };

    const onDeleteHistory = (index) => {
        let history = [...searchList];
        history.splice(index, 1);
        setSearchList([...history]);
    }

    const onSearch = (e, city, country) => {
        onSubmit(e, city, country).then();
    }

  return (
      <div className="App">
        <h2>Today's Weather</h2>
          <hr/>
          <WeatherForm onSubmit={onSubmit}/>
          {showInfo && <WeatherInfo weatherData={weatherData}/>}
          {showError &&
          <div className={'errorMessage'}>
              <p>Not Found</p>
          </div>}
          <h2>Search History</h2>
          <hr/>
          {searchList && <SearchHistory searchList={searchList} onDeleteHistory={onDeleteHistory} onSubmit={onSearch}/>}
      </div>
  );
};

export default App;
