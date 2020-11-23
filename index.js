function updatemap() {
    fetch('data.json')
        .then(responce => responce.json())
        .then(responce => {
            console.log(responce.data)
            responce.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;
                cases = element.infected;
                if(cases > 255){
                    color = 'rgb(255, 0, 0)'
                }
                else{
                    color = `rgb(${cases}, 0, 0)`
                }
                // fetch('https://api.weather.gov/openapi.json')
                // .then(response => response.json())
                // .then(data => console.log(data));
                // }
                new mapboxgl.Marker({
                    color: color
                })
                    .setLngLat([longitude, latitude])
                    .addTo(map);
            });
        })
}

updatemap()