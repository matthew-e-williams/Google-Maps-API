

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    var coordinate = position.coords.latitude + ", " + position.coords.longitude;
  alert(coordinate);
function initMap() {
        var aproxLoc = coordinate; 
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 11,
          center: aproxLoc
        });
        var marker = new google.maps.Marker({
          position: aproxLoc,
          map: map
        });
      }
    var loc = initMap();
document.getElementById("demo").innerHTML = loc;
}




  



