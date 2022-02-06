
function onGeoOk(position){ 
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
     console.log(lat , lng);
}

function onGeoEr(){
    alert("Error!");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoEr);
onGeoOk({});