// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorMessageModal = document.getElementById('modal')
const likeBtnLi = document.querySelectorAll(".like")
const likeGylphSpan = document.querySelectorAll(".like-glyph")
console.log(likeBtnLi)

function hearMelting(){
  
  errorMessageModal.className = 'hidden'
  mimicServerCall()
  .then(heartEvent())
  .catch(handlerErrorMes())


}
function heartEvent(){

  likeGylphSpan.forEach(ele => 
    
    ele.addEventListener('click', e =>{
    
    if (e.target.textContent === EMPTY_HEART){
      e.target.className = "activated-heart"
      return e.target.textContent = FULL_HEART
  } else if (e.target.textContent === FULL_HEART)
      e.target.className = "emty"
      return  e.target.textContent = EMPTY_HEART
    
  }))
}

function handlerErrorMes(){
  errorMessageModal.className ="Show-Message"
  setTimeout(function (){
    errorMessageModal.className = "hidden"

  }, 3000)
}

hearMelting()




//------------------------------------------------------------------------------
// Don't change the code below: this f0unction mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
