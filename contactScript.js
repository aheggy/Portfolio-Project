const contactForm = document.getElementById("contact-form")
const successMessage = document.getElementById("success-message");
const errorMessage = document.getElementById("success-message");

contactForm.addEventListener("submit", event =>{
    event.preventDefault()
    const name = document.getElementById("name").value
    const message = document.getElementById("message").value
    
    

//   alert(`Thank You for your message, ${name}. we will get back to you soon.`)
if (name && message) {
    successMessage.style.display = "block";
    successMessage.innerText = "Message sent.";
    setTimeout(() => {
      successMessage.style.display = "none";
      }, 3000);
    } 
  contactForm.reset()
  
})
