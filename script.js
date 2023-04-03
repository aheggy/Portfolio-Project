
let button = document.querySelector(".get-location")

button.addEventListener("click", event =>{
  // event.preventDefault()
  document.querySelector(".open-page").remove()
  localStorage.setItem('divRemoved', 'true')
  document.location.href = `location.html`
  
  // if (localStorage.getItem('divRemoved') === 'true') {
  //   document.querySelector('.open-page').remove()
  // }
  
  
  // console.log("clicked")
  
  
})

function enlargeImage(src) {
  const viewImage = document.createElement("div");
  const largeImage = document.createElement("img");
  largeImage.src = src;
  viewImage.appendChild(largeImage);
  viewImage.style.position = 'fixed';
  // viewImage.style.top = '40px';
  // viewImage.style.left = '10%';
  viewImage.style.width = 'auto';
  viewImage.style.height = 'auto';
  viewImage.style.background = 'rgba(0, 0, 0, 1)';
  viewImage.style.display = 'flex';
  viewImage.style.alignItems = 'center';
  viewImage.style.justifyContent = 'center';
  largeImage.style.maxWidth = '100vw';
  largeImage.style.maxHeight = '100vh';
  viewImage.addEventListener("click", () => {
    viewImage.remove();
  });
  document.body.appendChild(viewImage);
}

const images = document.querySelectorAll("img");
images.forEach((image) => {
  image.addEventListener("click", () => {
    enlargeImage(image.src);
  });
});



  
// function removeDiv(){
//   let div = document.querySelector(".open-page")
//   div.remove()
// }


/*
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 0, lng: 0 },
    zoom: 1,
  });
  
  const marker = new google.maps.Marker({
    map,
  });
  
  
  setInterval(() => {
    fetch("http://api.open-notify.org/iss-now.json")
    .then((response) => response.json())
    .then((data) => {
      const { latitude, longitude } = data.iss_position;
      const position = { lat: parseFloat(latitude), lng: parseFloat(longitude) };
      marker.setPosition(position);
      map.setCenter(position);
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
*/