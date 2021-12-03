const userInput = document.querySelector("input");  //grab the user input
const button = document.querySelector("button");  //grab the button
const output = document.querySelector("p");  //grab the output

function checkLength(){
  if (userInput.value.length >= 5){
  return true;
  } else {
    return false;
  }
}

function checkCase(){
  let upperCaseCount = 0;
  let lowerCaseCount = 0;
   for (var i = 0; i < userInput.value.length; i++)
    if (userInput.value[i] === userInput.value[i].toUpperCase()) {
      upperCaseCount++; }

      else if (userInput.value[i] === userInput.value[i].toLowerCase()) {
      lowerCaseCount++;
    }
    if (upperCaseCount > 0 && lowerCaseCount > 0) {
      return true;
    } else {return false;}

  }


function validation() {
if (checkLength() == true && checkCase() == true) {
    output.innerText = "Valid username"
    output.style.color = "green"}
  else {output.innerHTML = "<strong>Try Again</strong>"
        output.style.color = "red"
      }
}
button.addEventListener('click', validation);
userInput.addEventListener('keydown', function(event){
  if (event.key === 'Enter'){ validation() }
});



