import "./weatherForm.css";
import React, {useState} from "react";

const initialState = {
    city: "",
    country: ""
};

const WeatherForm = (props) => {
    const [state, setState] = useState(initialState);
    const {onSubmit} = props;

    const safeSetState = (obj) => {
        setState(d => {
            return {
                ...d,
                ...obj
            };
        });
    };

    const onInputChange = (e, name) => {
        safeSetState({
            [name]: e
        })
    }

    const onClear = () => {
        safeSetState(initialState);
    }

    const submitForm = (e) => {
        const {city, country} = state;
        onSubmit(e, city, country);
    }

    return (
        <div className="weatherForm">
            <form onSubmit={submitForm}>
                <label>City: </label>
                <input
                    type="text"
                    value={state.city}
                    placeholder="City"
                    onChange={(e) => onInputChange(e.target.value, 'city')}
                />
                <label>Country: </label>
                <input
                    type="text"
                    value={state.country}
                    placeholder="Country"
                    onChange={(e) => onInputChange(e.target.value, 'country')}
                />
                <button type="submit">Search</button>
                <button onClick={() => onClear()}>Clear</button>
            </form>
        </div>
    );
};

export default WeatherForm;
