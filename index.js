// Your code here
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";
dodger.style.bottom = "0px";
dodger.style.left = "0px";

document.addEventListener('keydown', function(event){
    if(event.key === "ArrowLeft") {
      moveDodgerLeft()
    }
    else if(event.key === 'ArrowRight'){
       moveDodgerRight()
    }
    else if (event.key === "ArrowUp") {
      moveDodgerUp();
    } else if (event.key === "ArrowDown") {
      moveDodgerDown();
  }
});

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
   
    }
  } 


function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left <  360) {
      dodger.style.left = `${left + 1}px`;
    }
    
  } 
 
  function moveDodgerUp() {
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers, 10);
  
    if (bottom < 360) { // Adjust this value based on the container's height
        dodger.style.bottom = `${bottom + 1}px`;
    }
}

function moveDodgerDown() {
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers, 10);
  
    if (bottom > 0) {
        dodger.style.bottom = `${bottom - 1}px`;
    }
}