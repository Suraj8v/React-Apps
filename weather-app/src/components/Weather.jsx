import React from "react"
import searchbar from '../assets/search-bar-01.png' 

function Weather()
{
    return(
        <div className="weather">
        <div className="search-bar">
            <input type="text" placeholder="search..."/>
        </div>
        <img src={searchbar} alt="" />
        </div>
    )
}

export default Weather