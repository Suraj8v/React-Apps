import React from "react"
import searchbar from '../assets/search-bar-01.png' 
import sun from '../assets/sun.png' 
import humidity from '../assets/humidity.png' 
import wind from '../assets/wind.png' 

function Weather()
{
    return(
        <div className="weather">
        <div className="search-bar">
            <input type="text" placeholder="search..."/> 
            <img src={searchbar} alt="" />
        </div>
       
       <img src={sun} alt="" className="weather-icon"/>
       <p className="temperature">16 c</p>
       <p className="location">London</p>

       <div className="weather-data">
        <div className="col">
            <img src={humidity} alt="" />
            <div>
                <p>91%</p>
                <span>Humidity</span>
            </div>
        </div>
        <div className="col">
            <img src={wind} alt="" />
            <div>
                <p>3.6 Km/hr</p>
                <span>Humidity</span>
            </div>
        </div>
       </div>
        </div>
    )
}

export default Weather