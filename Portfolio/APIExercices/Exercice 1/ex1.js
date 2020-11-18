$(document).ready(function(){
    if(typeof(sessionStorage) !=="undefined") {
        alert("Bonjour " + sessionStorage.getItem('username') + ", vous avez visité cette page " + sessionStorage.getItem('counter') + " fois.");
        } 
    else {
        alert("Désolé,maisleWebStoragen'estpassuppoté");
        }
    $("#getLocation").click(function(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
           } 
        else { alert('No Geolocation.');
           }
        function successFunction(position) {
        var map = new google.maps.Map(document.getElementById('google_canvas'),{ zoom: 15, mapTypeId: google.maps.MapTypeId.ROADMAP });
        var geolocate = new google.maps.LatLng(position.coords.latitude,
        position.coords.longitude);
        var infowindow = new google.maps.InfoWindow({ map: map, position: geolocate,content: '' });
        map.setCenter(geolocate);} 
       });
})