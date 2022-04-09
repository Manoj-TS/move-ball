const button = document.querySelector("button");
const ball = document.querySelector(".ball");

const arr = ["move-left", "move-bottom", "move-right", "move-top"];
let counter = 0;
button.addEventListener("click", function () {
  if (counter <= 3) {
    ball.classList = `ball ${arr[counter]}`;
    counter++;
    if (counter > 3) {
      counter = 0;
    }
  }
});
