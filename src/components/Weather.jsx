import React from 'react'
import { useState } from 'react'

function Weather() {
    let [city , setCity] = useState()
    let [wDetails , setWDetails] = useState()
    const getData = (e) =>{
        console.log(city);
        e.preventDefault()
       fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=751d66e130befad396405dc13796a57c&units=metric`)
       .then((resp)=>resp.json())
       .then((finalResp)=>{
        console.log(finalResp);
        setWDetails(finalResp)
       })
    }
  return (
    <>
        <h2>Weather App</h2>

        <form onSubmit={getData}> 
            <input type="text" name="" value={city} onChange={(e)=>setCity(e.target.value)} placeholder='Enter Your City!' id="" />
            <button type='submit'>Add City!</button>
        </form>

        <div className="container">
            {wDetails != undefined  ?
            <>
            <h3>{wDetails.name} <span style={{color : "yellow"}}>{wDetails.sys.country}</span></h3>
            
            <h3>{wDetails.main.temp}</h3>
            <img height="150px" src={`https://api.openweathermap.org/img/w/${wDetails.weather[0].icon}.png`} alt="" />
            <h4>{wDetails.weather[0].description}</h4>
            <h5>{wDetails.wind.speed}</h5>
            </>
            :
            "No City Found"
            }
        </div>
    </>
  )
}

export default Weather