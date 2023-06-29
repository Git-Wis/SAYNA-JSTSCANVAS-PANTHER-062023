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

//section slide 

const next = document.querySelector('.next')
const slide = document.querySelectorAll('.slide')
let curentSlide = 0
function startSlide(){
    let NbSlide
    //verifiaction la limite du tableau de slide 
    if(NbSlide < 0){
        NbSlide = (slide.length - 1)
    }else if(NbSlide >= slide.length){
        NbSlide = 0
    }

    
}

next.addEventListener('click',()=>{

})

//animation de l'hover d'un image
const hoverImgElement = document.querySelector(".imgHoverStart")

function hoveringImg(element){
    element.classList.add('img-hover')
}

function hoveringImg_out(element){
    element.classList.remove('img-hover')
}

document.querySelector(".row-card").addEventListener('mouseover',()=>{
    console.log("hover")
    hoveringImg(hoverImgElement)
})
document.querySelector(".row-card").addEventListener('mouseout',()=>{
    console.log("hover-out")
    hoveringImg_out(hoverImgElement)
})

//section formulaire


const formBtn = document.querySelector('.btnInput')
const Popup = document.querySelector('.container-popup')

formBtn.addEventListener('click',()=>{
    let inputNom = document.querySelector('.nom').value
    let inputEmail = document.querySelector('.email').value
    let inputMess = document.querySelector('textarea').value

    if(inputNom.trim() === "" || inputEmail.trim() === "" || inputMess.trim() === ""){
        console.log("Null")
    }else{
        //dans le cas ou tout a ete remplit 
        Popup.style.display = "block"
        document.querySelector('form').reset()
    }
})

document.querySelector('.popup-btn .btn').addEventListener('click',()=>{
    Popup.style.display = "none"
})

