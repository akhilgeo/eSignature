const eName = document.getElementById('eName');
const eMail = document.getElementById('eMail');
const oeName = document.getElementById('oeName');
const output1 = document.getElementById('output1');
const tar = document.getElementById('tar');


function printInput(){
  oeName.innerHTML = eName.value;
  output1.innerHTML = eMail.value;
  tar.innerHTML = "Thanks and Regards";
}

input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("button").click();
  }
});