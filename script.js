const rangeInput = document.getElementById("range-input");
const output = document.getElementById("output");
const sortedList = document.getElementById("sorted-list");

rangeInput.addEventListener("input", () => {
  const quantity = rangeInput.value;
  const numbers = Array.from({ length: quantity }, () => Math.floor(Math.random() * 11));
  const sortedNumbers = numbers.sort((a, b) => a - b);
  
  output.innerHTML = numbers.join(", ");
  sortedList.innerHTML = sortedNumbers.map(num => `<li>${num}</li>`).join("");
});
