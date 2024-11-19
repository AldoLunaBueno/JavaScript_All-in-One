let ball = document.getElementById("ball")
document.addEventListener("keydown", handleKeyPress)

let step = 30
let positionX = 0
let positionY = 0

// responds to certain key presses by updating position.
/**
 * @param {KeyboardEvent} ev
 */
function handleKeyPress(ev) {
  switch (ev.key) {
    case "w":
      positionY -= step
      break
    case "s":
      positionY += step;
      break
    case "a":
      positionX -= step
      break
    case "d":
      positionX += step
      break
  }

  if (positionX < 0) {
    positionX = 0
  }
  if (positionY < 0) {
    positionY = 0
  }

  refresh(ball, positionX, positionY)
}

// Update the ball's position
/**
 * @param {HTMLElement} ball 
 * @param {number} x 
 * @param {number} y 
 */
function refresh(ball, x, y) {
  ball.style.top = y + "px"
  ball.style.left = x + "px"
}

