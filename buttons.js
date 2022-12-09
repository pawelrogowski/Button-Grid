const buttons = document.querySelectorAll(".button");
const handleClick = (event) => {
  // Start the timer
  const startTime = Date.now();

  buttons.forEach((button) => button.classList.remove("active"));
  event.target.classList.add("active");

  // Update the textContent of the button every second
  const timer = setInterval(() => {
    const elapsedTime = Date.now() - startTime;
    event.target.textContent = `${elapsedTime / 1000} seconds elapsed`;
  }, 1000);

  // Clear the timer when the button is clicked again
  event.target.addEventListener("click", () => clearInterval(timer));

  // Prompt the user for a task
  const task = prompt("Enter a task:");
  if (task) {
    event.target.textContent = `Task: ${task}`;
  }
};
buttons.forEach((button) => button.addEventListener("click", handleClick));
