let display = document.getElementById("display");
let historyList = document.getElementById("history-list");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    let result = eval(display.value);
    if (result !== undefined) {
      addToHistory(display.value + " = " + result);
      display.value = result;
    }
  } catch {
    display.value = "Error";
  }
}

function addToHistory(entry) {
  let li = document.createElement("li");
  li.textContent = entry;
  historyList.insertBefore(li, historyList.firstChild);
}

function clearHistory() {
  historyList.innerHTML = "";
}

// ✅ Keyboard support
document.addEventListener("keydown", function(event) {
  if (!isNaN(event.key) || "+-*/.%".includes(event.key)) {
    appendValue(event.key);
  } else if (event.key === "Enter") {
    event.preventDefault();
    calculateResult();
  } else if (event.key === "Backspace") {
    backspace();
  } else if (event.key === "Escape") {
    clearDisplay();
  }
});
