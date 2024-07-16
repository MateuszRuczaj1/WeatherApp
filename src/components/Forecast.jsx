import React from 'react'
import sunny from '../assets/sunny.png'
import rain from '../assets/rain.png'
import clouds from '../assets/clouds.png'
export default function Forecast({ temp, weather, index }) {
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
        <div className='bg-stone-50/90 rounded-lg flex-1 py-3 px-1 '>
            <h2 className='text-stone-600 font-semibold text-xs md:text-xl'>
                {index === 0 ? 'Tommorow' : `In ${index + 1} days`}
            </h2>
            <h2 className='text-blue-700 font-semibold mt-2 text-xl'>{Math.round(temp)}&deg;C</h2>
            <img src={getIcon(weather)} alt="" className='h-20 w-20 mx-auto my-8' />
        </div>
    )
}
