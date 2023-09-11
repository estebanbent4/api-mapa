function iniciarMap() {
    var codernadas = { lat: -33.873514, lng: -57.369913 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: codernadas
    });

    var marker = new google.maps.Marker({
        position: codernadas,
        map: map
    });
}

iniciarMap();
