const contactForm = document.getElementById("contact-form")

contactForm.addEventListener("submit", event =>{
  event.preventDefault()

  const name = document.getElementById("name").value
  alert(`Thank You for your message, ${name}. we will get back to you soon.`)
  contactForm.reset()
})
