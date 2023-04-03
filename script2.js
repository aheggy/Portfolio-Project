
function initMap() {
  let map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 0, lng: 0 },
    zoom: 2.5,
  });
  
  const marker = new google.maps.Marker({
    map, 
    draggable: false,
    icon: {
        url: 'assets/iss-icon.webp',
        scaledSize: new google.maps.Size(90, 90)   
    }
    });

    // const circle = new google.maps.Circle({
    //     map,
    //     radius: 1000000, // 1000 km in meters
    //     strokeColor: "#FF0000",
    //     strokeOpacity: 0.8,
    //     strokeWeight: 2,
    //     fillColor: "#FF0000",
    //     fillOpacity: 0.35
    //   });
  
  setInterval(() => {
    fetch("http://api.open-notify.org/iss-now.json")
    .then((response) => response.json())
    .then((json) => {
      const { latitude, longitude } = json.iss_position;
      const position = { lat: parseFloat(latitude), lng: parseFloat(longitude) };
      marker.setPosition(position);
    //   circle.setCenter(position)
    //   map.setCenter(position);
    });
  }, 500000);
}

function loadScript() {
  const script = document.createElement('script');
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBA20kALnAyOpKf40a1O4G-seEH0hQvlBw';
  script.defer = true;
  script.addEventListener('load', initMap);
  document.head.appendChild(script);
}
  
loadScript();
