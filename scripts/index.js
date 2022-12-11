const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const changeColor = () => {
  let hexCode = "#";
  for (let i = 0; i < 6; i++) {
    let randomIndex = Math.trunc(Math.random() * arr.length);
    hexCode += arr[randomIndex];
  }
  // console.log("Background color changed to: " + hexCode);
  // document.getElementById("heading").style.color = hexCode;
  // document.getElementById("flip-color-btn").style.color = hexCode;
  // document.getElementById("heading").style.border = "5px solid transparent";
  // document.getElementById("flip-color-btn").style.border = "5px solid transparent";
  document.body.style.backgroundColor = hexCode;
}

document.getElementById("flip-color-btn").addEventListener(
  "click",
  changeColor
)

function autoFlip() {
  myInterval = setInterval(changeColor, 250);
}

function stopFlip() {
  clearInterval(myInterval);
}