const keyApi = '70f42b604c461372e89b2105bc22ba9d'
//Tomo posicion del navegador
const fetchClima = posicion => {
    const lat = posicion.coords.latitude
    const lon = posicion.coords.longitude
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${keyApi}&units=metric&lang=es`)
        .then(resp=>resp.json())
        .then(data=>dataAUsar(data))
}
const dataAUsar = (data) =>{
    const temp = data.main
    const info = data.weather[0]
    console.log(data)
    ciudad.innerText=`${data.name}`
    icon.setAttribute('src',`https://openweathermap.org/img/wn/${info.icon}.png`)
    tempActual.innerText=`${Math.ceil(temp.temp)}°`
    descripcion.innerText=`${info.description}`.toUpperCase()
    sensacionTermica.innerText=`S. térmica: ${temp.feels_like.toFixed(1)}°`
    min.innerText=`Mín: ${temp.temp_min.toFixed(1)}°`
    max.innerText=`Máx: ${temp.temp_max.toFixed(1)}°`
    //aside
    humedad.innerText=`Humedad: ${temp.humidity}%`
    viento.innerText=`Viento: ${(data.wind.speed*3.6).toFixed(1)} Km/H`
    presion.innerText=`Presión: ${temp.pressure}hPa`
    visibilidad.innerText=`Visibilidad: ${data.visibility} mts.`
    lat.innerText=`Latitud: ${data.coord.lat}`
    lon.innerText=`Longitud: ${data.coord.lon}`
}
const posicionDelUsuario = () => {
    navigator.geolocation.getCurrentPosition(fetchClima)
}
//getElement
const ciudad = document.getElementById('ciudad')
const icon = document.getElementById('icon')
const tempActual = document.getElementById('tempActual')
const descripcion = document.getElementById('descripcion')
const sensacionTermica = document.getElementById('sensacionTermica')
const max = document.getElementById('max')
const min = document.getElementById('min')
const humedad = document.getElementById('humedad')
const viento = document.getElementById('viento')
const presion = document.getElementById('presion')
const visibilidad = document.getElementById('visibilidad')
const lat = document.getElementById('lat')
const lon = document.getElementById('lon')