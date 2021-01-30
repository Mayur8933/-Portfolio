/*===== MENU SHOW =====*/

const showMenu = document.getElementById('nav-toggle')
const navMenu = document.getElementById('nav-menu')
showMenu.addEventListener('click',()=>{
   navMenu.classList.toggle('show') //The toggle() method toggles between hide() and show() for the selected elements. This method checks the selected elements for visibility. show() is run if an element is hidden.
})

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    //Active link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')
    //remove menu mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove()

}
navLink.forEach(n => n.addEventListener('click',linkAction))

//localstorage for contact
// function submitButton(){

//     getName = document.getElementById('name').value
//     getEmail= document.getElementById('email').value
//     getDesc = document.getElementById('description')
//     localStorage.setItem('name',getName)
//     localStorage.setItem('email',getEmail)
//     localStorage.setItem('description',getDesc)
//     console.log(getName)
//     console.log(getEmail)
// }    

//Form submition and localstorage
document.getElementById('submit_form').addEventListener('submit',(event)=>{
    getName = document.getElementById('name').value
    getEmail= document.getElementById('email').value
    console.log(getName)
    console.log(getEmail)
    localStorage.setItem('name',getName)
    localStorage.setItem('email',getEmail)
    event.target.textContent = 'Form submitted!! '
    
})

    