let count = 0;
const countEl = document.getElementById('count');

function increase() {
  count++;
  updateDisplay();
}
function decrease() {
  count--;
  updateDisplay();
}
function reset() {
  count = 0;
  updateDisplay();
}
function updateDisplay() {
  countEl.textContent = count;
}
