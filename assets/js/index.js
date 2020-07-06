$(document).ready(loadPage);

function loadPage() {
    currentLocation();
    showMenu();
}

function currentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showCurrentLocation);
    } else {
        alert("Geolocalización no es soportado en tu navegador");
    }
};

function showCurrentLocation(posicion) {
    var latitud = posicion.coords.latitude;
    var longitud = posicion.coords.longitude;

    var coordenadas = {
        lat: latitud,
        lng: longitud
    };

    showMap(coordenadas);
};

function showMap(coordenadas) {
    var map = new google.maps.Map($('#map')[0], {
        zoom: 17,
        center: coordenadas
    });
    var marker = new google.maps.Marker({
        position: coordenadas,
        map: map
    });
};

function showMenu(){
    $('#menu-nav').toggle();
}