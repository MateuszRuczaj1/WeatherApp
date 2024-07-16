import React from 'react'
import sunny from '../assets/sunny.png'
import humidity from '../assets/humidity.png'
import wind from '../assets/wind-icon.png'
import pressure from '../assets/pressure.png'
import clouds from '../assets/clouds.png'
import rain from '../assets/rain.png'
export default function WeatherInfo({ weatherData }) {
    function getIcon(weather) {
        if (weather === 'Clouds') {
            return clouds
        }
        else if (weather === 'Rain') {
            return rain
        }
        else {
            return sunny
        }
    }
    return (
        <main className=" flex-col lg:flex-row flex justify-start bg-stone-50 min-h-96 w-5/6  md:w-3/5 mx-auto mt-14 rounded-xl">
            <div className='ms-5 flex flex-col items-start gap-6  wd-4/5 md:w-1/2 '>
                <h2 className='m-6 text-stone-500 font-semibold'>Current Weather</h2>
                <h2 className='text-blue-700 text-4xl md:text-5xl font-semibold md:ms-20 mx-auto lg:ms-10'>{weatherData.city}, {weatherData.countryCode}</h2>

                <div className='flex flex-row items-center gap-2 md:gap-6 md:ms-10'>
                    <img src={getIcon(weatherData.main)} className='object-contain w-20 h-20 mt-4  md:ms-10' alt="" />
                    {weatherData.temp && <h2 className='text-blue-700 text-5xl md:text-6xl font-light mt-4 ms-4 md:ms-10 xl:text-8xl'>{Math.round(weatherData.temp)}&deg;C</h2>}
                </div>
            </div>
            <div className='flex p-8 md:px-20 text-center flex-col gap-8 lg:w-1/2 w-full items-center justify-center'>
                <h2 className=' text-stone-500 font-semibold text-xl'>Feels like {Math.round(weatherData.feelsLike)}&deg;C</h2>

                <div className='flex flex-row gap-5 w-full'>
                    <img src={humidity} className='w-8 h-8 ' alt="" />
                    <h2 className='text-stone-500 font-semibold text-xl'>Humidity {weatherData.humidity}%</h2>

                </div>
                <div className='flex flex-row gap-5 w-full'>
                    <img src={wind} className='w-8 h-8 ' alt="" />
                    <h2 className='text-stone-500 font-semibold text-xl'>Wind {weatherData.windSpeed}km/h</h2>
                </div>
                <div className='flex flex-row gap-5 w-full'>
                    <img src={pressure} className='w-8 h-8 ' alt="" />
                    <h2 className='text-stone-500 font-semibold text-xl'>Pressure {weatherData.pressure}hPa</h2>
                </div>
            </div>

        </main >
    )
}
