var map, infoWindow;
      function initMap() {
              var myLoc = new google.maps.LatLng(33.7836946323483,-118.13152550663756);

            /*
            google.maps.Map() takes 2 parameters separated by a comma: 
            1. the location of the map on your page, and 
            2. the details/options of the map in the form of object properties. 
            */
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 33.770050, lng: -118.193739},
          zoom: 11
        });
        infoWindow = new google.maps.InfoWindow;
            infoWindow.setPosition({position:myLoc});       
            //originally infoWindow.setPosition(pos);
            infoWindow.setContent('I am here.');
            infoWindow.open(map);
      }
/*
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('I am here.');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }
*/
