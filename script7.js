

// Global scope variable
let animationCount = 0;





function calculateAnimationSpeed(baseSpeed, multiplier) {
  return baseSpeed * multiplier;
}

// Function controlling box animation
function triggerBoxAnimation(speedMultiplier) {
  const box = document.querySelector(".animated-box");




  // Local scope variable
  let newSpeed = calculateAnimationSpeed(2, speedMultiplier);

  box.style.animation = `bounce ${newSpeed}s infinite`;
  animationCount++;
  console.log(`Box animated ${animationCount} times at speed: ${newSpeed}s`);
}

//  Combining CSS & JavaScript
const animateBoxBtn = document.getElementById("animateBoxBtn");
animateBoxBtn.addEventListener("click", () => {
  triggerBoxAnimation(0.5); 
});



// Modal logic
const modal = document.getElementById("modal");
const showModalBtn = document.getElementById("showModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

showModalBtn.addEventListener("click", () => {
  modal.classList.add("show");
  modal.style.display = "flex"; 
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("show");
  setTimeout(() => (modal.style.display = "none"), 500); 
});
