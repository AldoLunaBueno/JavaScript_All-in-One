let ball = document.getElementById("ball")
document.addEventListener("keydown", handleKeyPress)

let step = 30
let positionX = 0
let positionY = 0

/**
 * @param {KeyboardEvent} ev
 */
function handleKeyPress(ev) {
  if (ev.key === "w") {
    positionY -= step
  } else if (ev.key === "s") {
    positionY += step
  } else if (ev.key === "a") {
    positionX -= step
  } else if (ev.key === "d") {
    positionX += step
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

