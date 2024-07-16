import React from 'react'
import Forecast from './Forecast'
export default function ForecastList({ forecastData }) {
    return (
        <div className='flex gap-2 justify-around mx-auto w-11/12 mt-5 xl:w-2/5'>
            {forecastData.map((forecast, i) => <Forecast key={i} temp={forecast.main.temp} weather={forecast.weather[0].main} index={i} />)

            }
        </div>
    )
}
