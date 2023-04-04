
// set the zoom and the center of the map
function initMap() {
  let map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 0, lng: 0 },
    zoom: 2,
  });
  
  //creating and icon to appear on the map for the location
  const marker = new google.maps.Marker({
    map, 
    draggable: false,
    icon: {
        url: 'assets/iss-icon.webp',
        scaledSize: new google.maps.Size(90, 90)   
    }
    });


  // Get the location of ISS every 5 seconds 
  setInterval(() => {
    fetch("https://api.wheretheiss.at/v1/satellites/25544")
    .then((response) => response.json())
    .then((json) => {
      const { latitude, longitude } = json
      console.log(latitude, longitude)
      const position = { lat: parseFloat(latitude), lng: parseFloat(longitude) };
      marker.setPosition(position);
    //   map.setCenter(position);
    });
  }, 5000);
}

//Add script tag with the google maps API to html
function loadScript() {
  const script = document.createElement('script');
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyD4eUP4NTeLcy8A4YOkmP5z7IIbMDGX4N8';
  script.defer = true;
  script.addEventListener('load', initMap);
  document.head.appendChild(script);
}
  
loadScript();


