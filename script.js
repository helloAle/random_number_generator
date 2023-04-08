const rangeInput = document.getElementById("range-input");
const output = document.getElementById("output");

rangeInput.addEventListener("input", () => {
  const quantity = rangeInput.value;
  const numbers = Array.from({ length: quantity }, () => Math.floor(Math.random() * 11));
  output.innerHTML = numbers.map(num => `<span>${num}</span>`).join("");
});
