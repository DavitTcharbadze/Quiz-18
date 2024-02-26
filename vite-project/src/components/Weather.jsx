import React, { useState } from 'react';
import classes from '../modules/Weather.module.scss';
import axios from 'axios';

export default function Weather() {
    const [cityName, setCityName] = useState('')
    const [isActive, setIsActive] = useState(false)
    const [temperature, setTemperature] = useState(null)

    const onChangeHandler = (e) => {
        setCityName(e.target.value)
        setIsActive(false)
    }

    async function weatherCalc() {
        setIsActive(true);
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=7613e4a1a94e6aabee506df6d295566d`);
            const temperature = response.data.main.temp;
            setTemperature(temperature)
            console.log(response)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className={classes['weather-wrapper']}>
            <input
                onChange={onChangeHandler}
                value={cityName}
                type="text"
            />
            <button onClick={weatherCalc}>search</button>
            {isActive && (
                <div>
                    <h1>weather in {cityName} is {temperature}°C</h1>
                </div>
            )}
        </div>
    )
}
