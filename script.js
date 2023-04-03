
let button = document.querySelector(".get-location")

button.addEventListener("click", event =>{
  // event.preventDefault()
  document.querySelector(".open-page").remove()
  // localStorage.setItem('divRemoved', 'true')
  document.location.href = `index2.html`
  
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

