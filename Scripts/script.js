//animation fadein and fade left in scroll

const fadeInElement = document.querySelectorAll(".fadeInStart")
const fadeLeftElement = document.querySelectorAll(".fadeLeftStart")

function handleScroll() {
  
    fadeInElement.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top
      const windowHeight = window.innerHeight
  
      if (elementTop < windowHeight) {
        element.classList.add('fade-in')
        
      }
    })
}

function fadeLeft(){
    fadeLeftElement.forEach((element)=>{
        const elementTop = element.getBoundingClientRect().top
        const windowHeight = window.innerHeight

        if(elementTop < windowHeight){
            element.classList.add("fade-left")
        }
    })
}
  
  window.addEventListener('scroll',()=>{
    handleScroll()
    fadeLeft()

});


//animation canva

const cursor = document.querySelector(".cursor")
document.addEventListener("mousemove", function (e) {
  let cursorWidth = cursor.offsetWidth
  let x = e.clientX - (cursorWidth / 2)
  let y = e.clientY - (cursorWidth / 2)
  cursor.style.left = `${x}px`
  cursor.style.top = `${y}px`


});




