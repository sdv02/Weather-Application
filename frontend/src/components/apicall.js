import React from "react";
import axios from 'axios';

const makeiconurl = (iconId) => "http://openweathermap.org/img/wn/"+{iconId}+"@2x.png"

const getdata = async (cn, unit) => {
    try {
      const response = await axios.get('/api/weather', { params: { city : cn , units : unit }, });
      //console.log(cn)
      //console.log(response.data)
      //icon=response.data.weather[0].icon
      //console.log(icon)
      const {main:details, description, icon}= response.data.weather[0]
      
      return {
        cityName: response.data.name,
        temperature: response.data.main.temp,
        description: response.data.weather[0].description,
        country:response.data.sys,
        min:response.data.main.temp_min,
        max:response.data.main.temp_max,
        humidity:response.data.main.humidity,
        sunrise:response.data.sys.sunrise,
        sunset:response.data.sys.sunset,
        feels_like:response.data.main.feels_like,
        detail:response.data.weather[0].main,
        icon:response.data.weather[0].icon,
        iconurl: makeiconurl(icon.toString),
        timezone:response.data.timezone,
        dt:response.data.dt,
      };
      
      //console.log(formattedData);
      
      
    } catch (error) {
      console.error(error);
    }
    //return formattedData;
}
export default getdata;

/*const formatteddata=(weatherData)=>{
    const {}={
      coord : {lon, lat},
      main: { temp, feels_like, temp_min,temp_max, humidity} ,
      name,
      sys:{country,sunrise, sunset},
      timezone,
      weather,
      wind:{speed}

    }= weatherData

    const {main:details, description, icon}= weather[0]
    return {lat, lon,temo, feels_like, temp_max, temp_min, humidity,name,country, sunrise,sunset,timezone,details,description,icon,speed}

  }
  */