const inpt = document.getElementById("input");
const err = document.querySelector('.err')
const infoimg = document.querySelector('.infoimg')
const cityname = document.querySelector('.city')
const temp = document.querySelector('.temp');
const humi = document.querySelector('.humi');
const winds = document.querySelector('.wind');

async function getWeather()
{
    const city = inpt.value; 
    console.log(city)
    const api = "6660435a8ad9c1ccdd95c1f38e7edfdc"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api}`
    if(!city)
        {
            alert("Please Enter City Name!")
        }  
    try
    {
        const res = await fetch(url)
        if(res.status == 404)
        {
         err.innerHTML="city not found!"   
        }
        const data = await res.json()
        console.log(city)
        if(data.cod === 200)
        {
            console.log(data)
            console.log(data.weather[0].main)
            if(data.weather[0].main == "Clouds")
            {
                infoimg.src = "images/clouds.png"
            }
            else if(data.weather[0].main == "Clear")
            {
                infoimg.src = "images/clear.png"
            }
            else if(data.weather[0].main == "Rain")
            {
                infoimg.src = "images/rain.png"
            }
            else if(data.weather[0].main == "Drizzle")
            {
                infoimg.src = "images/drizzle.png"
            }
            else if(data.weather[0].main == "Mist")
            {
                infoimg.src = "images/mist.png"
            }
            else
            {
                infoimg.src = "images/clouds.png"   
            }
            const temperature = Math.round(data.main.temp)
            const humidity = data.main.humidity;
            const wind = data.wind.speed;
            temp.innerHTML=`${temperature}°C`
            cityname.innerHTML=`${city}`
            humi.innerHTML=`${humidity}%`
            winds.innerHTML=`${wind}m/s`
            err.innerHTML=""
        }
        else
        {
            console.log("not")
        }
        
    }    
    catch
    {
        alert("Data Not Found!")
    }
}