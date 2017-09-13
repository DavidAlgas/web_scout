function init_map() {
    var var_location = new google.maps.LatLng(41.636841, -0.8709933);

    var var_mapoptions = {
        center: var_location,
        zoom: 16
    };

    var var_marker = new google.maps.Marker({
        position: var_location,
        map: var_map,
        title: "New York"
    });

    var var_map = new google.maps.Map(document.getElementById("map-container"),
        var_mapoptions);

    var_marker.setMap(var_map);

}

google.maps.event.addDomListener(window, 'load', init_map);

// Animations' initialization
new WOW().init();

// LightBox initialization
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});