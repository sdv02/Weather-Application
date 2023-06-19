import React from 'react'
import "./details.css"
import { DateTime } from 'luxon';

const details =({weather , units})=> {
    const unitText= units === "metric"? 'C': 'F';
    
    const formatLocalTime= (secs,format ) => DateTime.fromSeconds(secs).toFormat(format);
    const sunrise=formatLocalTime(weather.sunrise,"hh:mm a")
    
    const sunset=formatLocalTime(weather.sunset,"hh:mm a")
    return (
        <div>
        <div className='section section_details'>
                <div className='card1'>
                    <h3>Min</h3><br />
                    <h3>{weather.min}&deg;{unitText}</h3>
                </div>
                <div className='card2'>
                    <h3>Max</h3><br />
                    <h3>{weather.max}&deg;{units=== 'metric'? 'C' : 'F' }</h3>
                </div>
                <div className='card3'>
                    <h3>Humidity</h3><br />
                    <h3>{weather.humidity}%</h3>
                </div>
        </div>
        <br />
        <div className='section sun'>
            <div className='sunrise'>
                <img src='https://cdn-icons-png.flaticon.com/128/7802/7802916.png' alt='sunriseicon'></img>
                <h2>Sunrise</h2>
                <h3>{sunrise }</h3>
            </div>
            <div className='sunset'>
                <img src='https://cdn-icons-png.flaticon.com/128/808/808365.png' alt='sunseticon'></img>
                <h2>Sunset</h2>
                <h3>{sunset}</h3>
            </div>
            
      </div>
     </div>   
    )
}

export default details