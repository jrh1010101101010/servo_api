// createing the random pertrol station endpoint
const spotlightInfo = document.querySelector('.spotlight-station')

function renderSpotlight (station){
   spotlightInfo.innerHTML = htmlElementRan(station)
}

function htmlElementRan (station){
    return `
            <p><a href="#" onclick="centerMapOnStation(${station.lat}, ${station.long}); return false;">${station.name}</a></p> 
            <p>${station.owner}<p>
            <p>${station.address}<p>`
}

axios.get("http://localhost:8080/api/stations/random").then(result => result.data[0]).then(data => renderSpotlight(data))

const refresh = document.querySelector('.refresh-spotlight')

refresh.addEventListener('click', handleRefresh)

function handleRefresh (event){
   event.preventDefault()
   axios.get("http://localhost:8080/api/stations/random").then(result => result.data[0]).then(data => renderSpotlight(data))
}

function centerMapOnStation(latitude, longitude) {
   const map = new google.maps.Map(document.getElementById("map"), {
     center: { lat: latitude, lng: longitude },
     zoom: 15,
   });
 }