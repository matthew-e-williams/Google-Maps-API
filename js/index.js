

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
  return coordinate;
}

var loc = showPosition();
document.getElementById("demo").innerHTML = loc;


  



function initMap() {
        var aproxLoc = coordinates; 
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 11,
          center: aproxLoc
        });
        var marker = new google.maps.Marker({
          position: aproxLoc,
          map: map
        });
      }