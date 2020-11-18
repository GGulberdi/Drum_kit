let drumbutton = document.querySelectorAll(".drum")//[0];

for(let i=0; i<drumbutton.length; i++){
  let add =()=>{
    drumbutton[i].addEventListener("click",function(){
      var buttonInnerHTML = this.innerHTML;
      makeSound(buttonInnerHTML)
    }) 
  }
    console.log(add());
  }

document.addEventListener('keypress', function(event){
makeSound(event.key);
})
function makeSound(key){
switch(key){
  case 'w':
    var tom_w = new Audio('sounds/tom-w.mp3');
    tom_w.play();
    break;
    case 'a':
    var tom_a = new Audio('sounds/tom-a.mp3') ;
    tom_a.play();
    break;
    case 's':
    var tom_s = new Audio('sounds/tom-s.mp3') 
    tom_s.play();
    break;
    case 'd':
    var tom_d = new Audio('sounds/tom-d.mp3') 
    tom_d.play();
    break;
    case 'j':
    var tom_j = new Audio('sounds/tom-j.mp3');
    tom_j.play(); 
    break;
    case 'k':
    var tom_k = new Audio('sounds/tom-k.mp3') 
    tom_k.play();
    break;
    case 'l':
    var tom_l = new Audio('sounds/tom-l.mp3') ;
    tom_l.play();
    break;
    default:alert('Please type only w,a,d,s,j,k,l for sound');
    break;
  }
}


let drum2 = document.getElementsByClassName("a drum");
let drum3 = document.getElementsByClassName("s drum");
let drum4 = document.getElementsByClassName("d drum");
let drum5 = document.getElementsByClassName("j drum");
let drum6 = document.getElementsByClassName("k drum");
let drum7 = document.getElementsByClassName("l drum");

//=================================================================

// function handleClick(event) {
//     //  this === event.target
//     console.log(this);
//     console.log(event.target);
//     makeSound(event.target.innerText);
//     buttonAnimation(event.target.innerText);
//   }
  
//   // Added event to Each buttom using for loop
//   let eventArray = document.querySelectorAll("button");
//   for (const event of eventArray) {
//     event.addEventListener("click", handleClick);
//   }
  
//   // Adding Event Listeners to Keyboard Pressed
//   document.addEventListener("keypress", handleKeyboardEvent);
  
//   function handleKeyboardEvent(event) {
//     console.log(event.key);
//     makeSound(event.key);
//     buttonAnimation(event.key);
//   }
  
//   function makeSound(key) {
//     switch (key) {
//       case "w": {
//         let tom1 = new Audio("sounds/tom-w.mp3");
//         tom1.play();
//         break;
//       }
//       case "a": {
//         let tom2 = new Audio("sounds/tom-a.mp3");
//         tom2.play();
//         break;
//       }
//       case "s": {
//         let snare = new Audio("sounds/tom-s.mp3");
//         snare.play();
//         break;
//       }
//       case "d": {
//         let tom4 = new Audio("sounds/tom-d.mp3");
//         tom4.play();
//         break;
//       }
//       case "j": {
//         let crash = new Audio("sounds/tom-j.mp3");
//         crash.play();
//         break;
//       }
//       case "k": {
//         let tom3 = new Audio("sounds/tom-k.mp3");
//         tom3.play();
//         break;
//       }
//       case "l": {
//         let kick = new Audio("sounds/tom-l.mp3");
//         kick.play();
//         break;
//       }
//       case "z": {
//         let kick = new Audio("sounds/tom-z.mp3");
//         kick.play();
//         break;
//       }
//       case "x": {
//         let kick = new Audio("sounds/tom-x.mp3");
//         kick.play();
//         break;
//       }
//       case "c": {
//         let kick = new Audio("sounds/tom-c.mp3");
//         kick.play();
//         break;
//       }
//       default: {
//         break;
//       }
//     }
//   }
  
//   function buttonAnimation(key) {
//     let activeButton = document.querySelector("." + key);
//     activeButton.classList.add("pressed");
//     document.body.classList.add("modify-body");
//     setTimeout(() => {
//       activeButton.classList.remove("pressed");
//       document.body.classList.remove("modify-body");
//     }, 200);
//   }