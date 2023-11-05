import weatherdata from "./weatherdata"
import Card from "./card"
import { useEffect, useState } from "react";
import logos from "./search.png"


function Content()
{

    const nodata="no data found"
    const[city,setcity]=useState("panjim");
    const [weather,setweather]=useState("panjim");
    const [search,setsearch]=useState("panjim")
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day = weekday[newDate.getDay()];

    let fulldate=`${date}/${month}/${year}`


    useEffect(()=>
    {
        const fetchApi =async()=>
        {
            
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid="token"`
           let response =await fetch(url)
            
            let resjson= await response.json();
            // console.log(response)
            setcity(resjson.main)
            setweather(resjson.weather[0])
       
     
        }

        fetchApi();
    },[search])
    function change(e)
    {
        setsearch(e.target.value)

    }
    
    return(
        <div className="card">
        <div className="cardcontent">
        <div className="search">
        <h6>Search for a location</h6>
        <form>
        <input type="text" className="input" onChange={change}  placeholder="Panjim"></input>
        <img src={logos} className="searchlogo"></img>
        </form>
        </div>

        {!city ?(<p>no city found</p>):
        ( <div className="cardcontentdata">
           <h1>{city.temp}{'\u00b0'} C</h1>
         
           <h6>{weather.description}</h6>
           <h6>Humidity : {city.humidity}%</h6>
           <div className="date">
         
           <h5 className="day">{day}</h5>
           <h3 className="todaydate">{fulldate}</h3>
           </div>
         <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} className="wimage"></img>
     
        </div>
        )} 
        </div>
        </div>
    );
    
}
export default Content;
