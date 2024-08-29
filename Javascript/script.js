const createNumbers = (number) => {
  const numbers = document.getElementById("tabNumber");
  for (let i = 0; i < 76; i++) {
    const divNumber = document.createElement("div");
    divNumber.className = "number";

    const h3Number = document.createElement("h3");
    h3Number.innerText = i + 1;
    divNumber.appendChild(h3Number);
    numbers.appendChild(divNumber);
  }
  const generateRandomNumber = () => {
    const randomIndex = Math.floor(Math.random() * 76) + 1;
    const everySingleNumber = document.querySelectorAll(".number");

    const colorDiv = everySingleNumber[randomIndex];
    if (colorDiv) {
      colorDiv.classList.add("color");
    }
  };
  const button = document.getElementById("getANumber");
  button.addEventListener("click", generateRandomNumber);
};
createNumbers();
