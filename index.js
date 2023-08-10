numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i  = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
    
        var buttonInnerHTML = this.innerHTML;

        switch(buttonInnerHTML) {
            case "w":
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;
            
            case "a":
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;

            case "s":
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;

            case "d":
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;

            case "j":
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;

            case "k":
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;

            case "l":
            var kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();
            break;              

            default: console.log(buttonInnerHTML + " Unknown");
        }

        buttonAnimation(buttonInnerHTML);
    }); 
}

document.addEventListener("keydown", (event) => {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }

    switch (event.key) {

        case "W":
        case "w":
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;

        case "A":
        case "a":
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;

        case "S":
        case "s":
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;

        case "D":
        case "d":
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;

        case "J":
        case "j":
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;

        case "K":
        case "k":
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;

        case "L":
        case "l":
            var kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();
            break;
        
      default:
        return; // Quit when this doesn't handle the key event.
    }

    buttonAnimation(event.key);

    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
  },
  true,
  
);

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {activeButton.classList.remove("pressed"); }, 100);
 }