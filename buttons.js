const buttons = document.querySelectorAll(".button");
const handleClick = (event) => {
  buttons.forEach((button) => button.classList.remove("active"));
  event.target.classList.add("active");
};
buttons.forEach((button) => button.addEventListener("click", handleClick));
