function updateMap() {
    fetch("./data.json")
        .then(response => response.json())
        .then(res => {
            console.log(res.data);
            res.data.forEach(element => {
                longitude = element.longitude
                latitude = element.latitude
                statename = element.name
                //console.log(longitude);
                // console.log(latitude)
                cases = element.infected;
                console.log(cases)
                if (cases > 255) {
                    color = "rgb(255,0 ,0)";
                }
                else {
                    color = `rgb(${cases},0 ,0)`
                }
                new mapboxgl.Marker({
                    draggable: false,
                    color: color
                })
                    .setLngLat([longitude, latitude])
                    .addTo(map);

            });


        });


}
console.log("Updating map with realtime data");
updateMap();
// let interval = 2000;
// setInterval(updateMap , interval);



