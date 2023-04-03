
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

  
  setInterval(() => {
    fetch("http://api.open-notify.org/iss-now.json")
    .then((response) => response.json())
    .then((json) => {
      const { latitude, longitude } = json.iss_position;
      const position = { lat: parseFloat(latitude), lng: parseFloat(longitude) };
      marker.setPosition(position);
    //   map.setCenter(position);
    });
  }, 5000);
}

function loadScript() {
  const script = document.createElement('script');
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBA20kALnAyOpKf40a1O4G-seEH0hQvlBw';
  script.defer = true;
  script.addEventListener('load', initMap);
  document.head.appendChild(script);
}
  
loadScript();
