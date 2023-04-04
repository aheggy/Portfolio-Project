
let button = document.querySelector(".get-location")

/*
add event listener to the button in the home page 
once it click it view the ISS current locatin on location page
*/
button.addEventListener("click", event =>{
  document.querySelector(".open-page").remove()
  document.location.href = `location.html`
  
})


