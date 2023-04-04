const nearest = document.querySelector('.nearest')

function renderStationList(stations) {
    nearest.innerHTML = stations.map((station) => renderStation(station)).join('')
}

function renderStation(station) {
    return `<p>${station.name} ${station.owner} ${station.address}<p>`
}

axios.get('/api/stations/all').then(result => {
    console.log(result.data.slice(0, 10))
    return result.data.slice(0, 10)
}).then(renderStationList)