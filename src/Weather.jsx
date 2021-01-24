import React, {useRef, useState} from 'react'
import './styles/memory.css'

export default function Weather() {
    const [weather, setWeather] = useState(null)
   
    const inputRef = useRef()
    const handleSub = (e) => {
        e.preventDefault()
        fetch("http://api.weatherstack.com/current?access_key=c307c891b6d75c50fcbab7c2b6174080&query=" + inputRef.current.value).
        then(response => response.json()).
        then(data => {
            if(!data.current) return alert('Brak takiego miasta')
            setWeather(data)
        })
    
       
    }
  

     return (

        <div className = 'weatherCont'>
        {
            weather
             ?
          
                  <div style = {weather.current.is_day === "yes" ? {backgroundColor: "rgb(150, 181, 228)"} : {backgroundColor: "rgb(60, 74, 145)", color: "rgb(185, 203, 230)"}} className="currWeather">
                <h1 className = 'city'>{weather.location.name}</h1>
               <h2>{weather.location.localtime}</h2>
               
                <img src={weather.current.weather_icons[0]} alt=""/>
                <h1 className = 'des'>{weather.current.weather_descriptions}</h1>
                <h1 className = "stopnie">{weather.current.temperature}℃</h1>

                <div className="info">
                    <h3>pressure: {weather.current.pressure}</h3>
                    <h3>wind speed: {weather.current.wind_speed}km/h</h3>
                        
                </div>
                <button className = "newWeather" onClick = {() => setWeather(null)} style = {weather.current.is_day === "yes" ? {backgroundColor: "black", color: "rgb(150, 181, 228)"} : {backgroundColor: "rgb(185, 203, 230)", color: "rgb(60, 74, 145)"}}>Check another city</button>
               </div>
       
            :
            <div className = 'inputWrapWeather'>
            <h1 className = 'cityInput'>Wpisz Miasto</h1>
            <form onSubmit = {handleSub}>
                <input ref = {inputRef} type="text"/>
                <button>Szukaj</button>
            </form>
            </div>
        }
        </div>
    )
}
