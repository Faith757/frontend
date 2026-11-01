const form = document.getElementById('weather-form')
const inputField = document.getElementById('searchInput')
const API_URL = "https://backend-fa0q.onrender.com"

form.addEventListener('submit', async (e) => {
  e.preventDefault()
  const city = inputField.value.trim()

  if (!city) {
    alert("provide a city")
    return
  }
  try {
    const response = await fetch(`${API_URL}api/weather?city=${encodeURIComponent(city)}`)
    const data = await response.json()

    if (!response.ok) {
      alert(data.message)
      console.log(data.message)
      return
    }
      showWeather(data)
    } catch (error) {
    console.log(error.message)
  }
  function showWeather(data) {
    document.getElementById('weathercity').textContent = `${data.city}`
    document.getElementById('weathercountry').textContent = `${data.country}`
    document.getElementById('weathertemp').textContent = `${data.temp}°C`
    document.getElementById('weathericon').src = `https://openweathermap.org/img/wn/${data.weatherIcon}@4x.png`
    document.getElementById('weathericon').style.width = "400px"
    document.getElementById('weathericon').style.height = "300px"
    document.getElementById('weatherdesc').textContent = `${data.description}`
    document.getElementById('weathermain').textContent = `${data.weather}`
    document.getElementById('min_temp').textContent = `${data.temp_min}°C`
    document.getElementById('max_temp').textContent = `${data.temp_max}°C`
    document.getElementById('humidity').textContent = `${data.humidity}%`
    document.getElementById('speed').textContent = `${data.speed}m/s`
    document.getElementById('pressure').textContent = `${data.pressure}hPa`
    document.getElementById('weatherfeel').textContent = `${data.feels_like}°`
    document.getElementById('visibility').textContent = `${data.visibility/1000}km`

  }
}) 
