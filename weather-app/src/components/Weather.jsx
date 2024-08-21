import React, { useEffect, useState } from "react"
import searchbar from '../assets/search-bar-01.png' 
import sun from '../assets/sun.png' 
import humidity from '../assets/humidity.png' 
import wind from '../assets/wind.png' 
import clear_sky from '../assets/clear-sky.png'
import drizzle from '../assets/drizzle.png'
import rain from '../assets/rainy-day.png'
import snow from '../assets/snowy.png'
import cloud from '../assets/clouds.png'

function Weather()
{
        const [weatherData,setWeatherData] = useState(false);
        const allIcons = {
            "01d": clear_sky,
            "01n": clear_sky,
            "02d": cloud,
            "02n": cloud,
            "03d": cloud,
            "04d": drizzle,
            "04n": drizzle,
            "09d": rain,
            "09n": rain,
            "010n": rain,
            "010d": rain,
            "013d": snow,
            "013n": snow,
        }


        const search = async(city)=>{
            try{
                const url = `https://api.openweathermap.org/data/2.5/
                weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
    
                const response = await fetch(url)
                const data = await response.json()
                console.log(data)
                const icon = allIcons[data.weather[0].icon] || clear_sky;
                setWeatherData({
                    humidity: data.main.humidity,
                    windSpeed: data.wind.speed,
                    temperature: Math.floor(data.main.temp),
                    location: data.name,
                    icon: icon
                    
                })
            }catch(error){
    
            }
        }
    
    
    useEffect(()=>{
        search("Pune")
    },[])

    return(
        <div className="weather">
        <div className="search-bar">
            <input type="text" placeholder="search..."/> 
            <img src={searchbar} alt="" />
        </div>
       
       <img src={weatherData.icon} alt="" className="weather-icon"/>
       <p className="temperature">{weatherData.temperature}°c </p>
       <p className="location">{weatherData.location}</p>

       <div className="weather-data">
        <div className="col">
            <img src={humidity} alt="" />
            <div>
                <p>{weatherData.humidity}%</p>
                <span>Humidity</span>
            </div>
        </div>
        <div className="col">
            <img src={wind} alt="" />
            <div>
                <p>{weatherData.windSpeed} Km/hr</p>
                <span>Humidity</span>
            </div>
        </div>
       </div>
        </div>
    )
}

export default Weather