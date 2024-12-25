import cold from './assets/cloudy.jpg';
import hot from './assets/sunny.jpg';
import React, { useEffect, useState } from 'react';
import Details from './components/Detail';
import getdata from './components/apicall';

function App() {
  
  const [weather, setWeatherData] = useState(null);
  const [units, setUnits]=useState('metric');
  const [city, setCityName] = useState('Bengaluru');
  const [bg,setbg]=useState(hot)
  const [url,seticonurl]=useState('http://openweathermap.org/img/wn/02d@2x.png')
 
 useEffect(() => {
  const fetchWeatherData = async () => {
    const weatherData =await getdata(city, units);
    console.log(weatherData);
    setWeatherData(weatherData);
     
   const  threshold=units=== 'metric'?'20':'60';
   if(weatherData?.temperature<=threshold) setbg(cold)
   else setbg(hot)

   const icon=weatherData?.icon
   //console.log(icon)
   const url= "http://openweathermap.org/img/wn/"+icon+"@2x.png"
  seticonurl(url);

  };
   
   fetchWeatherData();
}, [units, city] );

  const handleUnitsClick = (e) =>
  {
    const button=e.currentTarget
    console.log(button.innerText)
    const isC = button.innerText ==="C";
    button.innerText= isC ? "F": "C";
   setUnits( isC? 'metric': 'imperial')
  }

  const enterkeypressed =(e) =>{
    if(e.keyCode === 13){
      setCityName(e.currentTarget.value)
      e.currentTarget.blur()
    }
  }
  

  return (
    <div className='app' style={{ backgroundImage: `url(${bg})`}}>
      <div className='overlay'>
        {(
          <div className='container'>
            <div className='section section__search'>
              <input type='text' name='place' placeholder='Search city' onKeyDown={enterkeypressed} />
              <button onClick= { (e) =>handleUnitsClick(e)} > F </button>
            </div>
            {weather && weather.cityName ?
           <> <div className='section section__temperature-icon'>
              <div className='temperature'>
                <h1>{weather?.temperature}&deg;{units=== 'metric'? 'C' : 'F' }</h1><br />
                <h3> {weather?.cityName}, {weather?.country?.country}</h3>
              </div>
             
              <div className='icon'>
                
                <img src= {url} alt='icon'>
              </img>
              <h3>{weather?.detail}</h3><br />
            </div>
          </div>
          <div className='section description'>
              <h3>Feels like  {weather?.feels_like}&deg;{units=== 'metric'? 'C' : 'F' } </h3><br />
              <h3>{weather?.description}</h3><br />
              <Details weather={weather} units={units} />
              
            </div>
            </>: <div style={{fontSize:30, fontWeight:600, color:'white', marginBottom:"45%"}}>{`Oops no data found for "${city}"`} </div>}
        </div>
        )}
        </div>
    </div>
  );
}

export default App;

